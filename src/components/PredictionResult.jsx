import React from 'react';

const PredictionResult = ({ prediction }) => {
  const { species, species_id, confidence } = prediction;

  return (
    <div className="p-4 bg-white rounded-lg shadow-lg transform transition-all duration-1000 scale-100">
      <h2 className="text-2xl font-bold mb-2">{species.name}</h2>
      <p><strong>Species ID:</strong> {species_id}</p>
      <p><strong>Habitat:</strong> {species.habitat}</p>
      <p><strong>Wingspan:</strong> {species.wingspan}</p>
      <p><strong>Diet:</strong> {species.diet}</p>
      <p><strong>Confidence:</strong> {(confidence * 100).toFixed(2)}%</p>
    </div>
  );
};

export default PredictionResult;
