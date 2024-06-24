from django.contrib import admin

# Register your models here.
from .models import Image, ChatGemini, ChatGemini2

class ImageAdmin(admin.ModelAdmin):
    list_display=('session_id','image_url')

    class Meta:
        model = Image
        fields = '__all__'


class ChatAdmin(admin.ModelAdmin):
    list_display=('session_id','user_input')

    class Meta:
        model = Image
        fields = '__all__'



class Chat2Admin(admin.ModelAdmin):
    list_display=('session_id','user_input','img_url')

    class Meta:
        model = Image
        fields = '__all__'
    



admin.site.register(Image, ImageAdmin)
admin.site.register(ChatGemini, ChatAdmin)
admin.site.register(ChatGemini2, Chat2Admin)
