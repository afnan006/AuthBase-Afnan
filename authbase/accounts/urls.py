from django.urls import path
from django.contrib.auth import views as auth_views  # Import Django's auth views
from . import views

urlpatterns = [
    path('signup/', views.signup, name='signup'),
    path('login/', views.user_login, name='login'),
    path('logout/', views.user_logout, name='logout'),
    
    path('forgot-password/', auth_views.PasswordResetView.as_view(template_name='accounts/forgot_password.html'), name='forgot_password'),
    
    path('password-reset-done/', auth_views.PasswordResetDoneView.as_view(template_name='accounts/password_reset_done.html'), name='password_reset_done'),
    
    path('reset-password/<uidb64>/<token>/', auth_views.PasswordResetConfirmView.as_view(template_name='accounts/password_reset_confirm.html'), name='password_reset_confirm'),
    
    path('change-password/', views.change_password, name='change_password'),
    path('dashboard/', views.dashboard, name='dashboard'),
    path('profile/', views.profile, name='profile'),
    path('get-csrf-token/', views.get_csrf_token, name='get_csrf_token'),  
    path('api/auth/register/', views.signup, name='api_register'),
]
