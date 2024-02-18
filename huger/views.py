from django.shortcuts import render
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from django.db import IntegrityError
from django.http import JsonResponse
from django.shortcuts import HttpResponse, HttpResponseRedirect, render
from django.urls import reverse
from django.views.decorators.csrf import csrf_exempt

from .models import User


def index(request):
    return render(request, 'huger/layout.html')

def profile(request):
    if(request.method == "POST"):
        pass
    return render(request, "huger/profileBody.html")
    
def login_view(request):
    if request.method == "POST":

        username = request.POST['name']
        password = request.POST["password"]

        user = authenticate(request, username=username,password=password)

        if user is not None:
            login(request, user)
            return HttpResponseRedirect(reverse("profile"))
        else:
            return render(request, "huger/login.html", {
                "message": "Invalid email and/or password."
            })
    
    else:
        return render(request, "huger/login.html")
            

def logout_view(request):
    logout(request)
    return HttpResponseRedirect(reverse("index"))

def register(request):
    if request.method == "POST":
        username = request.POST['name']
        email = request.POST.get('email', False)
        password = request.POST["password"]
        PassConfirm = request.POST.get('confirmation', False)

        if password != PassConfirm:
            return render(request, "huger/register.html", {
                "message": "Passwords must match."
            })
        
        try:
            user = User.objects.create_user(username, email, password)
            user.save()
        except IntegrityError as e:
            print(e)
            return render(request, "huger/register.html", {
                "message": "Email address already taken."
            })
        login(request, user)
        return HttpResponseRedirect(reverse("profile"))
    
    else:
        return render(request, "huger/register.html")

