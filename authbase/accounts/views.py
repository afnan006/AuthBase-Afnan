from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout, update_session_auth_hash
from django.contrib.auth.decorators import login_required
from django.contrib import messages
from django.contrib.auth.forms import PasswordResetForm
from django.core.mail import send_mail
from django.template.loader import render_to_string
from django.utils.http import urlsafe_base64_encode
from django.utils.encoding import force_bytes
from django.contrib.auth.tokens import default_token_generator
from .forms import SignupForm, LoginForm, ChangePasswordForm
from django.contrib.auth import get_user_model
from django.http import JsonResponse
from django.middleware.csrf import get_token
CustomUser = get_user_model()


def signup(request):
    if request.method == 'POST':
        form = SignupForm(request.POST)
        if form.is_valid():
            form.save()
            messages.success(request, "Account created successfully. Please log in.")
            return redirect('login')
        else:
            messages.error(request, "Error creating account. Please correct the errors below.")
    else:
        form = SignupForm()
    return render(request, 'accounts/signup.html', {'form': form})

def get_csrf_token(request):
    csrf_token = get_token(request)
    return JsonResponse({'csrfToken': csrf_token})

def user_login(request):
    if request.method == 'POST':
        form = LoginForm(request, data=request.POST)
        if form.is_valid():
            username_or_email = form.cleaned_data.get('username')
            password = form.cleaned_data.get('password')
            user = authenticate(request, username=username_or_email, password=password)
            if user is None:
                try:
                    user = CustomUser.objects.get(email=username_or_email)
                    user = authenticate(request, username=user.username, password=password)
                except CustomUser.DoesNotExist:
                    pass
            if user is not None:
                login(request, user)
                return redirect('dashboard')
            else:
                messages.error(request, "Invalid credentials. Please try again.")
        else:
            messages.error(request, "Invalid input. Please check your details.")
    else:
        form = LoginForm()
    return render(request, 'accounts/login.html', {'form': form})


@login_required
def dashboard(request):
    return render(request, 'accounts/dashboard.html', {'user': request.user})


@login_required
def profile(request):
    return render(request, 'accounts/profile.html', {'user': request.user})


@login_required
def change_password(request):
    if request.method == 'POST':
        form = ChangePasswordForm(user=request.user, data=request.POST)
        if form.is_valid():
            form.save()
            update_session_auth_hash(request, form.user)
            messages.success(request, "Password changed successfully.")
            return redirect('dashboard')
        else:
            messages.error(request, "Error changing password. Please correct the errors below.")
    else:
        form = ChangePasswordForm(user=request.user)
    return render(request, 'accounts/change_password.html', {'form': form})


def forgot_password(request):
    if request.method == 'POST':
        form = PasswordResetForm(request.POST)
        if form.is_valid():
            email = form.cleaned_data.get('email')
            try:
                user = CustomUser.objects.get(email=email)
                subject = "Password Reset Request"
                email_template = "accounts/password_reset_email.html"
                context = {
                    'user': user,
                    'uid': urlsafe_base64_encode(force_bytes(user.pk)),
                    'token': default_token_generator.make_token(user),
                }
                message = render_to_string(email_template, context)
                send_mail(subject, message, 'noreply@authbase.com', [email])
                messages.success(request, "Password reset instructions sent to your email.")
                return redirect('login')
            except CustomUser.DoesNotExist:
                messages.error(request, "Email not found.")
        else:
            messages.error(request, "Invalid input. Please check your email.")
    else:
        form = PasswordResetForm()
    return render(request, 'accounts/forgot_password.html', {'form': form})


def user_logout(request):
    logout(request)
    messages.success(request, "You have been logged out successfully.")
    return redirect('login')