import React, { useRef, useState } from 'react';
import { pokeG, pokeD } from '../utils/index';
import { predictBird } from '../utils/api';
import PredictionResult from './PredictionResult';

// Pokédex image dimensions (assumed based on your description)
const POKEDEX_WIDTH = 598;
const POKEDEX_HEIGHT = 835;

// Cropping coordinates defined as percentages of the pokédex image
const SCREEN_PERCENT = {
  left: 22,   // 22%
  top: 29,    // 29%
  width: 46,  // 46%
  height: 25, // 25%
  borderRadius: '8px'
};

const getCropRect = () => {
  return {
    x: (SCREEN_PERCENT.left / 100) * POKEDEX_WIDTH,
    y: (SCREEN_PERCENT.top / 100) * POKEDEX_HEIGHT,
    width: (SCREEN_PERCENT.width / 100) * POKEDEX_WIDTH,
    height: (SCREEN_PERCENT.height / 100) * POKEDEX_HEIGHT,
  };
};

const cropImage = (imageSrc, cropRect, callback) => {
  const image = new Image();
  image.onload = () => {
    const canvas = document.createElement('canvas');
    canvas.width = cropRect.width;
    canvas.height = cropRect.height;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(
      image,
      cropRect.x,
      cropRect.y,
      cropRect.width,
      cropRect.height,
      0,
      0,
      cropRect.width,
      cropRect.height
    );
    callback(canvas.toDataURL());
  };
  image.src = imageSrc;
};

const Hero = () => {
  const fileInputRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const [fileUploaded, setFileUploaded] = useState(false);
  const [previewImage, setPreviewImage] = useState(null);
  const [prediction, setPrediction] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleFileSelect = async (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileUploaded(true);
      setIsActive(true);
      
      // Read the uploaded file as a Data URL
      const reader = new FileReader();
      reader.onload = (e) => {
        const imageSrc = e.target.result;
        const cropRect = getCropRect();
        cropImage(imageSrc, cropRect, (croppedDataUrl) => {
          setPreviewImage(croppedDataUrl);
        });
      };
      reader.readAsDataURL(file);

      // After a brief flash, call the prediction API
      setTimeout(async () => {
        setIsActive(false);
        setIsLoading(true);
        try {
          const result = await predictBird(file);
          setPrediction(result);
        } catch (err) {
          console.error('Prediction error:', err);
          // Optionally handle error feedback here
        } finally {
          setIsLoading(false);
        }
      }, 500);
    }
  };

  // Since the backend doesn't return a predicted image,
  // we always display the cropped preview image.
  const displayedImage = previewImage;

  return (
    <section className="min-h-screen flex items-center justify-center bg-background relative">
      <div className="relative w-64 h-64 cursor-pointer">
        {fileUploaded ? (
          <div 
            className={`relative w-full h-full transition-transform duration-1000 ${prediction ? 'translate-x-[-30%]' : ''}`}
          >
            {/* Pokédex Base Image */}
            <img 
              src={pokeD} 
              alt="Pokédex" 
              className="w-full h-full object-contain"
            />
            
            {/* Display Cropped Bird Image Overlay */}
            {displayedImage && (
              <div 
                className="absolute bg-white overflow-hidden"
                style={{
                  top: `${SCREEN_PERCENT.top}%`,
                  left: `${SCREEN_PERCENT.left}%`,
                  width: `${SCREEN_PERCENT.width}%`,
                  height: `${SCREEN_PERCENT.height}%`,
                  borderRadius: SCREEN_PERCENT.borderRadius,
                }}
              >
                <img
                  src={displayedImage}
                  alt="Bird Preview"
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </div>
        ) : (
          <>
            <img 
              src={pokeG} 
              alt="Pokéball" 
              className="w-full h-full object-contain animate-float"
              onClick={() => !fileUploaded && fileInputRef.current.click()}
            />
            {isActive && (
              <div className="absolute inset-0 bg-white/50 animate-flash" />
            )}
          </>
        )}
      </div>
      <div className="absolute bottom-20 w-full text-center">
        <p className="font-body-font text-primary-text text-xl">
          {fileUploaded ? 
            (isLoading ? "Analyzing bird image..." : 
              (prediction ? "Prediction complete!" : "Bird image uploaded, predicting...")) : 
            "Click the Pokéball to upload bird image!"
          }
        </p>
      </div>

      {/* Hidden File Input */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileSelect}
        className="hidden"
        accept="image/*"
      />

      {/* Display Prediction Details on the right if available */}
      {prediction && (
        <div className="absolute right-10 top-1/2 transform -translate-y-1/2 transition-opacity duration-1000 opacity-100">
          <PredictionResult prediction={prediction} />
        </div>
      )}
    </section>
  );
};

export default Hero;
