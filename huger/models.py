from django.contrib.auth.models import AbstractUser
from django.utils.translation import gettext_lazy as _
from django.db import models


class User(AbstractUser):
    email = models.EmailField(_("email address"))

    def __str__(self):
        return self.username

class Plan(models.Model):
    name = models.CharField(max_length=64)
    memebers = models.ManyToManyField(User)
    url = models.TextField(default=None)

    def __str__(self):
        return self.name