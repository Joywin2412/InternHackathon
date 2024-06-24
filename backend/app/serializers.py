from rest_framework import serializers

from .models import Image, ChatGemini, ChatGemini2, GetNames

class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Image
        fields = '__all__'


class ChatGeminiSerializer(serializers.ModelSerializer):
    class Meta:
        model = ChatGemini
        fields = '__all__'


class ChatGemini2Serializer(serializers.ModelSerializer):
    class Meta:
        model = ChatGemini2
        fields = '__all__'
    


class GetNamesSerializer(serializers.ModelSerializer):
    class Meta:
        model = GetNames
        fields = '__all__'