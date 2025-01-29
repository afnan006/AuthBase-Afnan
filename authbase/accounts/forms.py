from django import forms
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm, PasswordChangeForm
from django.contrib.auth import get_user_model
from django.core.exceptions import ValidationError

CustomUser = get_user_model()

class SignupForm(UserCreationForm):
    email = forms.EmailField(required=True)
    password1 = forms.CharField(
        label="Password",
        widget=forms.PasswordInput,
        help_text="Password must be at least 7 characters long, contain an uppercase letter, a lowercase letter, a number, and a special character."
    )
    password2 = forms.CharField(label="Confirm Password", widget=forms.PasswordInput)

    class Meta:
        model = CustomUser
        fields = ('username', 'email', 'password1', 'password2')

    def clean_password1(self):
        password1 = self.cleaned_data.get('password1')
        if len(password1) < 7:
            raise ValidationError("Password must be at least 7 characters long.")
        if not any(char.isupper() for char in password1):
            raise ValidationError("Password must contain at least one uppercase letter.")
        if not any(char.islower() for char in password1):
            raise ValidationError("Password must contain at least one lowercase letter.")
        if not any(char.isdigit() for char in password1):
            raise ValidationError("Password must contain at least one number.")
        if not any(char in '!@#$%^&*()_+' for char in password1):
            raise ValidationError("Password must contain at least one special character.")
        return password1

    def clean_email(self):
        email = self.cleaned_data.get('email')
        if CustomUser.objects.filter(email=email).exists():
            raise ValidationError("This email is already registered.")
        return email


class LoginForm(AuthenticationForm):
    username = forms.CharField(label="Username or Email")
    password = forms.CharField(widget=forms.PasswordInput)


class ChangePasswordForm(PasswordChangeForm):
    old_password = forms.CharField(widget=forms.PasswordInput)
    new_password1 = forms.CharField(
        label="New Password",
        widget=forms.PasswordInput,
        help_text="Password must be at least 7 characters long, contain an uppercase letter, a lowercase letter, a number, and a special character."
    )
    new_password2 = forms.CharField(label="Confirm New Password", widget=forms.PasswordInput)

    def clean_new_password1(self):
        password = self.cleaned_data.get('new_password1')
        if len(password) < 7:
            raise ValidationError("Password must be at least 7 characters long.")
        if not any(char.isupper() for char in password):
            raise ValidationError("Password must contain at least one uppercase letter.")
        if not any(char.islower() for char in password):
            raise ValidationError("Password must contain at least one lowercase letter.")
        if not any(char.isdigit() for char in password):
            raise ValidationError("Password must contain at least one number.")
        if not any(char in '!@#$%^&*()_+' for char in password):
            raise ValidationError("Password must contain at least one special character.")
        return password