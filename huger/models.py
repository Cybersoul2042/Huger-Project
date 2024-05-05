from django.contrib.auth.models import AbstractUser
from django.utils.translation import gettext_lazy as _
from django.db import models


class User(AbstractUser):
    email = models.EmailField(_("email address"))

    def __str__(self):
        return self.username

class Plan(models.Model):
    owner = models.ForeignKey(User, on_delete=models.CASCADE, null=True, related_name="%(class)s_owner")
    name = models.CharField(max_length=64)
    url = models.TextField(default=None)
    team = models.ManyToManyField(User, related_name="%(class)s_team") 
    def __str__(self):
        return self.name
    
class PlanTime(models.Model):
    name = models.CharField(max_length=64)
    plan = models.ForeignKey(Plan, on_delete=models.CASCADE)
    date = models.DateTimeField(auto_now_add=True)

    
    