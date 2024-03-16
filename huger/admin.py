from django.contrib import admin
from .models import User, Plan

# Register your models here.
class UserAdmin(admin.ModelAdmin):
    user_list = ("username", "password")

class PlanAdmin(admin.ModelAdmin):
    plan_list = ("name", "url")

admin.site.register(User, UserAdmin)
admin.site.register(Plan, PlanAdmin)

