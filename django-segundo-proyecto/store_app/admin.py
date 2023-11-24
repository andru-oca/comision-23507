from django.contrib import admin
from django.contrib.admin import ModelAdmin

# Register your models here.

from .models import Store


@admin.register(Store)
class StoresAdmin(ModelAdmin):
    ...


# -> settings.py (settings del project)
