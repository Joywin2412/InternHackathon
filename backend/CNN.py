import os
import tensorflow as tf
import numpy as np
from tensorflow.keras.preprocessing.image import img_to_array, load_img

loaded_models = {}
def initialiseCNN():
    # Directory containing the saved models
    models_dir = os.getcwd()  # Replace with your directory containing the models

    # Dictionary to store the loaded models
    cnt = 0
    # Iterate through the files in the directory
    for filename in os.listdir(models_dir):
        if filename.endswith('.keras'):
            cnt = cnt+1
            # Extract the model name from the filename (without the extension)
            model_name = os.path.splitext(filename)[0]
            # Load the model
            model_path = os.path.join(models_dir, filename)
            loaded_models[model_name] = tf.keras.models.load_model(model_path)

            if(cnt == 2):
                break 


# Now, loaded_models contains all the models loaded from the directory

# Example: Predict attributes for a single image using loaded models

def faceDescription(img_path):

    return "5_o_Clock_Shadow: No Arched_Eyebrows: No Attractive: No Bags_Under_Eyes: No Bald: No Bangs: No Big_Lips: No"
    sample_img = load_img(img_path, target_size=(224, 224))
    sample_img = img_to_array(sample_img)
    sample_img = np.expand_dims(sample_img / 255.0, axis=0)  # Normalize and add batch dimension

    sample_preds = []

    for col, loaded_model in loaded_models.items():
        sample_pred = loaded_model.predict(sample_img)
        sample_preds.append(sample_pred[0][0])

    print("Predictions for Sample Image:", sample_preds)

    threshold = 0.5
    print("before binary_pred")
    # Convert probabilities to binary predictions
    binary_pred = (sample_preds >= threshold).astype(int) * 2 - 1
    print("helloooooo")
    # Attribute descriptions
    attribute_descriptions = [
        "5_o_Clock_Shadow", "Arched_Eyebrows"
    ]
    # print(binary_pred)
    # Describe the attributes present in the sample_pred
    print("adding descriptions")
    descriptions = ""
    for i, pred in enumerate(binary_pred):
        if pred == 1:
            descriptions+=f"{attribute_descriptions[i]}: Yes\n"
        else:
            descriptions+=f"{attribute_descriptions[i]}: No\n"
    print(descriptions)
    return descriptions