# Face Recognition and Description Generation

This repository contains Python scripts for a project that combines face recognition and natural language generation to generate descriptions based on detected faces in images.

## Project Files

- **file1_copy.ipynb**: Responsible for training the CNN model used for generating descriptions of detected faces, which integrates with `llama2.py`.
  
- **EnvironmentDescriptor.ipynb**: Generates descriptions based on a template prompt.

- **llama.py**: Manages conversation and description generation. Detects people in images and queries if they are known. If recognized, appends "continue" and switches to `llama2.py`.

- **llama2.py**: Focuses on face labeling. Receives descriptions from the CNN model, integrates with Gemini for final description generation. Ends when the user identifies the person.

- **faceRecognition.py**: Generates face encodings for matching faces in images to names used in descriptions.

## Installation

To run this project, follow these steps:

1. Install required Python packages:
   ```bash
   pip install -r requirements.txt
2.Download yolov4.weights from https://github.com/AlexeyAB/darknet/releases/download/darknet_yolo_v3_optimal/yolov4.weights and place it in the project directory.

3.Obtain your Google Gemini API key and store it in an environment file (.env)
