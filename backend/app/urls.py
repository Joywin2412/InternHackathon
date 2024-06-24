from django.contrib import admin
from django.urls import path, include
from .views import ImageDescriptionView, ChatGeminiView1, ChatGeminiView2, GenerateFinalDescriptionView, FaceDescriptionView

urlpatterns = [
    path("image-desc",ImageDescriptionView.as_view(),name='image-desc'),
    path("chat-gemini",ChatGeminiView1 .as_view(), name='chat-gemini'),
    path("chat-gemini2",ChatGeminiView2 .as_view(), name='chat-gemini2'),
    path("final-desc",GenerateFinalDescriptionView .as_view(), name='final-desc'),
    path("face-desc",FaceDescriptionView.as_view(),name="face-desc")
]
