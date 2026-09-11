"""
Django settings for nammasarthi project.
"""

from pathlib import Path
import os
from dotenv import load_dotenv

# --------------------------------------------------
# BASE DIRECTORY
# --------------------------------------------------

BASE_DIR = Path(__file__).resolve().parent.parent

load_dotenv(BASE_DIR / ".env")


# --------------------------------------------------
# SECURITY
# --------------------------------------------------

SECRET_KEY = "5k*blc19jc2ltu@if0l9w=wy#7ut82i$#7x6s#n81jv1+q8nou"

DEBUG = True


# --------------------------------------------------
# ALLOWED HOSTS
# --------------------------------------------------

ALLOWED_HOSTS = [
    "8000-kode-ws-182dab7bc.hebbale.academy",
    "localhost",
    "127.0.0.1",
]


# --------------------------------------------------
# CSRF
# --------------------------------------------------

CSRF_TRUSTED_ORIGINS = [
    "https://8000-kode-ws-182dab7bc.hebbale.academy",
]


# --------------------------------------------------
# API KEY
# --------------------------------------------------

ROUTING_API_KEY = os.getenv(
    "ROUTING_API_KEY",
    "5b3ce3597851110001cf6248a3f8c859d00f40a6b7d14d3f4fa4111f"
)


# --------------------------------------------------
# APPLICATIONS
# --------------------------------------------------

INSTALLED_APPS = [
    "django.contrib.admin",
    "django.contrib.auth",
    "django.contrib.contenttypes",
    "django.contrib.sessions",
    "django.contrib.messages",
    "django.contrib.staticfiles",

    "tracker",
]


# --------------------------------------------------
# MIDDLEWARE
# --------------------------------------------------

MIDDLEWARE = [
    "django.middleware.security.SecurityMiddleware",
    "django.contrib.sessions.middleware.SessionMiddleware",
    "django.middleware.common.CommonMiddleware",
    "django.middleware.csrf.CsrfViewMiddleware",
    "django.contrib.auth.middleware.AuthenticationMiddleware",
    "django.contrib.messages.middleware.MessageMiddleware",
]


# --------------------------------------------------
# URLS
# --------------------------------------------------

ROOT_URLCONF = "nammasarthi.urls"


# --------------------------------------------------
# TEMPLATES
# --------------------------------------------------

TEMPLATES = [
    {
        "BACKEND": "django.template.backends.django.DjangoTemplates",

        "DIRS": [
            BASE_DIR / "templates",
        ],

        "APP_DIRS": True,

        "OPTIONS": {
            "context_processors": [
                "django.template.context_processors.debug",
                "django.template.context_processors.request",
                "django.contrib.auth.context_processors.auth",
                "django.contrib.messages.context_processors.messages",
            ],
        },
    },
]


# --------------------------------------------------
# WSGI
# --------------------------------------------------

WSGI_APPLICATION = "nammasarthi.wsgi.application"


# --------------------------------------------------
# DATABASE
# --------------------------------------------------

DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.sqlite3",
        "NAME": BASE_DIR / "db.sqlite3",
    }
}


# --------------------------------------------------
# PASSWORD VALIDATION
# --------------------------------------------------

AUTH_PASSWORD_VALIDATORS = [
    {
        "NAME": "django.contrib.auth.password_validation.UserAttributeSimilarityValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.MinimumLengthValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.CommonPasswordValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.NumericPasswordValidator",
    },
]


# --------------------------------------------------
# INTERNATIONALIZATION
# --------------------------------------------------

LANGUAGE_CODE = "en-us"

TIME_ZONE = "Asia/Kolkata"

USE_I18N = True

USE_TZ = True


# --------------------------------------------------
# STATIC FILES
# --------------------------------------------------

STATIC_URL = "/static/"

STATICFILES_DIRS = [
    BASE_DIR / "static",
]


# --------------------------------------------------
# EMAIL
# --------------------------------------------------

EMAIL_BACKEND = "django.core.mail.backends.console.EmailBackend"


# --------------------------------------------------
# OTHER
# --------------------------------------------------

SECURE_CROSS_ORIGIN_OPENER_POLICY = "unsafe-none"

DEFAULT_AUTO_FIELD = "django.db.models.BigAutoField"