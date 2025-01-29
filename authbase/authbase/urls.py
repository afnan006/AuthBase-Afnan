from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('accounts/', include('allauth.urls')),  # Include allauth URLs
    path('', include('accounts.urls')),  # Include custom app URLs
]