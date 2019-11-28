from django_react.settings import *

DEBUG = False

WSGI_APPLICATION = 'django_vue.wsgi.application'

ALLOWED_HOSTS = ['*']

COMPRESS_OFFLINE = True

COMPRESS_OUTPUT_DIR = 'CACHE'