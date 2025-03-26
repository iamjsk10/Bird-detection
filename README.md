
Bird Classifier Frontend
------------------------------------------------------------

Overview:
-----------
This repository contains the frontend for the Bird Classification project. The frontend is built using React and Tailwind CSS, offering a seamless and engaging user experience. It connects to the backend API to display bird species predictions and includes custom animations such as a moving Poké Ball and an animated navigation bar.

How It Works:
---------------
1. The frontend provides an intuitive interface where users can upload an image file (accepted formats: PNG, JPG, JPEG).
2. Once an image is uploaded, it sends a POST request to the backend's `/predict` endpoint.
3. The backend processes the image and returns a JSON response containing the predicted species, its metadata (name, habitat, diet, wingspan), and a confidence score.
4. The frontend then displays the results with custom animations and interactive UI elements.

Key Features:
---------------
- **React & Tailwind CSS**: Modern tech stack for a fast and responsive interface.
- **Custom Animations**: Includes unique animations such as a moving Poké Ball and an animated navigation bar for a dynamic user experience.
- **Seamless Integration**: Connects effortlessly with the backend API for real-time predictions.
- **User-Friendly Design**: Clean and intuitive layout designed to enhance user engagement.

Screenshots & Demo:
--------------------
- The **Demo** folder includes screenshots and videos showcasing the complete application.
  
Example Screenshots:
  
![Demo Screenshot](https://raw.githubusercontent.com/iamjsk10/Bird_Fine_Grain_Classification/main/Demo/Screenshot%202025-03-26%20at%203.57.51%E2%80%AFPM.png)
  
![Demo Screenshot](https://raw.githubusercontent.com/iamjsk10/Bird_Fine_Grain_Classification/main/Demo/Screenshot%202025-03-26%20at%203.59.12%E2%80%AFPM.png)

Setup & Running Locally:
---------------------------
1. Clone the repository.
2. Install the required dependencies:
   ```sh
   npm install
   ```
3. Run the development server:
   ```sh
   npm start
   ```
   The app will open in your default browser (typically on http://localhost:3000).

Notes:
-------
- **Tech Stack**: The project is built with React for the frontend and styled with Tailwind CSS. Custom animations add a unique touch, including a moving Poké Ball and interactive navigation elements.
- **Backend Integration**: This frontend seamlessly integrates with the Bird Classifier Backend API to fetch predictions.
- **Customization**: You can modify the animations and styling by editing the React components and Tailwind configuration.

