from django.db import models
from django.core.validators import FileExtensionValidator

# Create your models here.

class Image(models.Model):
    session_id = models.CharField(max_length=255)
    image_url = models.FileField(upload_to='image/', validators=[FileExtensionValidator(allowed_extensions=['jpg','png','jpeg'])])
    description = models.TextField(default="")
    def __str__(self):
        return self.session_id


class ChatGemini(models.Model):
    session_id = models.CharField(max_length=255)
    user_input = models.TextField()
    def __str__(self):
        return self.session_id



class ChatGemini2(models.Model):
    session_id = models.CharField(max_length=255)
    user_input = models.TextField()
    img_url = models.TextField()
    def __str__(self):
        return self.session_id


class GetNames(models.Model):
    user_input = models.TextField()
    session_id = models.CharField(max_length=255)
    def __str__(self):
        return self.session_id


