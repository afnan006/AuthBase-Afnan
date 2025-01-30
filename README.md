# AuthBase

A robust Django-based authentication system with comprehensive user management features. Built with security and scalability in mind, AuthBase provides a complete solution for user authentication, registration, and profile management.

![Django](https://img.shields.io/badge/Django-5.1.5-green.svg)
![Python](https://img.shields.io/badge/Python-3.8+-blue.svg)
![DRF](https://img.shields.io/badge/DRF-Latest-red.svg)

## 🚀 Features

- **User Authentication**
  - Email/Username login support
  - Secure session management
  - Token-based API authentication
  - CSRF protection

- **User Management**
  - Email verification system
  - Password reset functionality
  - Profile management
  - Custom user model support

- **Security First**
  - Strong password validation
  - Rate limiting
  - Session timeout controls
  - Email verification enforcement

- **Ready-to-Use Templates**
  - Responsive design
  - Complete authentication workflow
  - Customizable layouts

## 🛠️ Tech Stack

- Django 5.1.5
- Django REST Framework
- Django Allauth
- SQLite (configurable)
- HTML/CSS Templates

## ⚡ Quick Start

1. **Clone the repository**
```bash
git clone https://github.com/afnan006/Authbase.git
cd authbase
```

2. **Set up virtual environment**
```bash
python3 -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

3. **Install dependencies**
```bash
pip install -r requirements.txt
```

4. **Apply migrations**
```bash
python manage.py migrate
```

5. **Create admin user (optional)**
```bash
python manage.py createsuperuser
```

6. **Run the server**
```bash
python manage.py runserver
```

7. **Access the application**
- Admin Dashboard: `http://localhost:8000/admin/`
- Login: `http://localhost:8000/login/`
- Registration: `http://localhost:8000/signup/`

## 📁 Project Structure
```
authbase/
├── manage.py
├── requirements.txt
├── accounts/
│   ├── admin.py
│   ├── backends.py
│   ├── forms.py
│   ├── models.py
│   ├── serializers.py
│   ├── urls.py
│   ├── views.py
│   └── templates/
│       └── accounts/
│           ├── login.html
│           ├── signup.html
│           ├── profile.html
│           └── ...
└── authbase/
    ├── settings.py
    ├── urls.py
    └── wsgi.py
```

## 🔑 API Endpoints

| Endpoint | Method | Description | Auth Required |
|----------|--------|-------------|---------------|
| `/signup/` | POST | Register new user | No |
| `/login/` | POST | Authenticate user | No |
| `/logout/` | POST | End user session | Yes |
| `/forgot-password/` | POST | Request password reset | No |
| `/password-reset-done/` | GET | Password reset confirmation page | No |
| `/reset-password/<uidb64>/<token>/` | POST | Reset password with token | No |
| `/change-password/` | POST | Change user password | Yes |
| `/dashboard/` | GET | User dashboard | Yes |
| `/profile/` | GET/POST | View/Update profile | Yes |
| `/get-csrf-token/` | GET | Retrieve CSRF token | No |
| `/api/auth/register/` | POST | API endpoint for registration | No |

## 🔒 Security Features

- Django's secure password hashing
- CSRF protection
- Configurable session security
- Rate limiting
- Required email verification
- Password validation:
  - Min length: 7 characters
  - Mixed case, numbers, symbols required
  - Common password protection

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📫 Support

- Create an issue on GitHub
- Contact: [Afnan Ahmed](https://github.com/afnan006)

## 🙏 Acknowledgments

- Django Documentation
- Django REST Framework
- Django Allauth
- All contributors

---
Built with 💻 by [Afnan Ahmed](https://github.com/afnan006)
