import requests
from PIL import Image
from transformers import BlipProcessor, BlipForConditionalGeneration

import os
def salesforceCaptioning(imageurl):
    processor = BlipProcessor.from_pretrained("Salesforce/blip-image-captioning-base")
    model = BlipForConditionalGeneration.from_pretrained("Salesforce/blip-image-captioning-base")

    print(imageurl)
    # img_url = 'https://storage.googleapis.com/sfr-vision-language-research/BLIP/demo.jpg' 
    img_url = imageurl
    raw_image = Image.open(img_url).convert('RGB')
    # raw_image = Image.open(requests.get(img_url, stream=True).raw).convert('RGB')

    # conditional image captioning
    text = "a photography of"
    inputs = processor(raw_image, text, return_tensors="pt")

    out = model.generate(**inputs)
    print(processor.decode(out[0], skip_special_tokens=True))
    # >>> a photography of a woman and her dog
    # unconditional image captioning
    inputs = processor(raw_image, return_tensors="pt")

    out = model.generate(**inputs)
    out = processor.decode(out[0], skip_special_tokens=True)
    return out


import cv2
import numpy as np




# Function to get the output layer names
def get_output_layers(net):
    layer_names = net.getLayerNames()
    output_layers = [layer_names[i - 1] for i in net.getUnconnectedOutLayers()]
    return output_layers

# Function to perform object detection and print results
def detect_objects(image,net,classes):
    height, width, _ = image.shape

    # Prepare the image for YOLO model
    blob = cv2.dnn.blobFromImage(image, 1/255.0, (416, 416), swapRB=True, crop=False)
    net.setInput(blob)

    # Run forward pass through the network
    outputs = net.forward(get_output_layers(net))

    detected_objects = []
    detected_faces = []
    # Lists to store bounding boxes, confidences, and class IDs
    boxes = []
    confidences = []
    class_ids = []

    # Process detections
    for output in outputs:
        for detection in output:
            scores = detection[5:]
            class_id = np.argmax(scores)
            confidence = scores[class_id]

            if confidence > 0.5:
                # Object detected
                center_x = int(detection[0] * width)
                center_y = int(detection[1] * height)
                w = int(detection[2] * width)
                h = int(detection[3] * height)

                # Rectangle coordinates
                x = int(center_x - w / 2)
                y = int(center_y - h / 2)

                boxes.append([x, y, w, h])
                print(x,y,w,h)
                confidences.append(float(confidence))
                class_ids.append(class_id)

    # Apply Non-Maximum Suppression (NMS)
    indices = cv2.dnn.NMSBoxes(boxes, confidences, score_threshold=0.5, nms_threshold=0.2)
    detected_faces = []


    objectResponse=[]
    for i in indices:
        # i = i[0]
    
        box = boxes[i]
        x, y, w, h = box
        class_id = class_ids[i]
        x = max(0,x)
        y = max(0,y)
        objectResponse.append(classes[class_id])
        # Filter for "person" class (adjust for other relevant classes)
        if classes[class_id] == 'person':
            # Extract face region from the person bounding box (example: just the upper half)
            face_region = image[y:y+h//2, x:x+w]

            # Append detected face region to the list
            detected_faces.append(face_region)
        
            

    return image, detected_faces, objectResponse


def YOLO(imageurl,session_id):
    net = cv2.dnn.readNetFromDarknet('yolov4.cfg', 'yolov4.weights')
    # Specify configuration and weights files for the model
    net.setPreferableBackend(cv2.dnn.DNN_BACKEND_OPENCV)
    net.setPreferableTarget(cv2.dnn.DNN_TARGET_CPU)

    # Load names of YOLO classes
    classes = []
    with open("coco.names", "r") as f:
        classes = [line.strip() for line in f.readlines()]

    image_path = imageurl  # Replace with your image path
    image = cv2.imread(image_path)
    detected_image , detected_faces, object_response = detect_objects(image,net,classes)
    i = 0
    print(len(detected_faces))
    # return detected_faces, object_response
    if(os.path.exists(f"media/yolo/{session_id}")):
        print("Already exists")
        for i in os.listdir(f"media/yolo/{session_id}"):
            os.remove(f"media/yolo/{session_id}/{i}")
            print(i)
        os.rmdir(f"media/yolo/{session_id}")
    
    
    os.mkdir(f"media/yolo/{session_id}")
    for face in (detected_faces):
        try:
            cv2.imwrite(f'media/yolo/{session_id}/face_{i}.jpg', face)
            print(i)
        except:
            print("Error")
        i = i+1

    return object_response
    


    
# Display the detected image
# cv2.imshow('YOLOv4 Object Detection', detected_image)
# cv2.waitKey(0)
# cv2.destroyAllWindows()
