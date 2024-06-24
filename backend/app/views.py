from django.shortcuts import render

import os
import requests
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Image, ChatGemini, ChatGemini2, GetNames
from .serializers import ImageSerializer, ChatGeminiSerializer, ChatGemini2Serializer, GetNamesSerializer
from EnvironmentDescriptor import salesforceCaptioning, YOLO
from llama import startIt1, chat_with_gemini1 
from llama2 import startIt2, chat_with_gemini2 
from llama3 import startIt3, chat_with_gemini3 
from CNN import faceDescription


backendurl="http://127.0.0.1:8000"

class ImageDescriptionView(APIView):
    queryset = Image.objects.all()
    serializer_class = ImageSerializer

    def post(self,request):
        serializer = ImageSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            try:
                print("In the post func of Image Desc")
                imageurl = serializer.data['image_url'][1:]
                session_id = serializer.data['session_id']
                salesforce_output=salesforceCaptioning(imageurl)
                # print("salesforce_output", salesforce_output)
                yolo_output = YOLO(imageurl,session_id)
                
                # print("yolo_output", yolo_output)
                



                yp=""
                for i in yolo_output:
                    yp+=i+" "
                
                startIt1(session_id)
                initial_prompt=f"Environment: {salesforce_output}. There are {yp}objects somewhere.Question : Give a description of the environment"
                print(initial_prompt)
                llama1_output=chat_with_gemini1(initial_prompt,session_id)
                print(llama1_output)
                return Response({"status": "success","data":llama1_output})
            except:
                return Response({"status": "failed","data":"Something went wrong with the API"})
        return Response(serializer.errors)  
    


class ChatGeminiView1(APIView):
    queryset = Image.objects.all()
    serializer_class = ChatGeminiSerializer

    def post(self,request):
        serializer = ChatGeminiSerializer(data=request.data)
        if serializer.is_valid():
            # serializer.save()
            try:
                session_id = serializer.data['session_id']
                user_input = serializer.data['user_input']
                llama1_output=chat_with_gemini1(user_input,session_id)
                print(llama1_output)
                if(llama1_output[-4:]=="Test"):
                    allImages = os.listdir(f"media/yolo/{session_id}")
                    print(allImages)
                    return Response({"status":"success","data":allImages})
                else:
                    return Response({"status": "success","data":llama1_output})
            except:
                return Response({"status": "failed","data":"Something went wrong with the API"})
        return Response(serializer.errors)  



class FaceDescriptionView(APIView):
    queryset = Image.objects.all()
    serializer_class = ChatGeminiSerializer

    def post(self,request):
        serializer = ChatGeminiSerializer(data=request.data)
        if serializer.is_valid():
            try:
                session_id = serializer.data['session_id']
                img_url = f"media/yolo/{session_id}/{serializer.data['user_input']}"
                print(session_id,img_url)
                face_description_output = faceDescription(img_url)
                startIt2(f"{session_id}_{serializer.data['user_input']}")
                print("before gemini")
                gemini_output = chat_with_gemini2(face_description_output,f"{session_id}_{serializer.data['user_input']}")
                print(gemini_output)
                return Response({"status":"success", "data":gemini_output})
            except:
                return Response({"status": "failed","data":"Something went wrong with the API"})
            
        return Response(serializer.errors)  






class ChatGeminiView2(APIView):
    queryset = Image.objects.all()
    serializer_class = ChatGemini2Serializer
    def post(self,request):
        serializer = ChatGemini2Serializer(data=request.data)
        if serializer.is_valid():
            try:
                session_id = serializer.data['session_id']
                user_input = serializer.data['user_input']
                img_url = serializer.data['img_url']
                
                gemini_output = chat_with_gemini2(user_input,f"{session_id}_{img_url}")

                return Response({"status":"success", "data":gemini_output})
                
            except:
                return Response({"status": "failed","data":"Something went wrong with the API"})
            
        return Response(serializer.errors)  



class GenerateFinalDescriptionView(APIView):
    queryset = Image.objects.all()
    serializer_class = GetNamesSerializer
    def post(self,request):
        serializer = GetNamesSerializer(data=request.data)
        if serializer.is_valid():
            try:
                session_id = serializer.data['session_id']
                user_input = serializer.data['user_input']
                
                initial_prompt=f"The persons in the image are {user_input}. Generate a complete description"

                gemini_output = chat_with_gemini1(initial_prompt,session_id)
                print(gemini_output)
                Image.objects.filter(session_id=session_id).update(description=gemini_output)
                print("Done")
                return Response({"status":"success", "data":gemini_output})
            except:
                return Response({"status": "failed","data":"Something went wrong with the API"})
        return Response(serializer.errors)  


