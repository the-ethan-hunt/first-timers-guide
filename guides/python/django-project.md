# How to create a Django project

Django is a high-level Python web framework that is used to create scalable web applications rapidly with a clean and pragmatic design. We shall create a Django application using Ubuntu Linux, the commands will be executed in a terminal.

### Create a directory where you will be working from
- `mkdir django-hello-world`
- `cd django-hello-world`
### Create a virtual environment and activate it
- `python3 -m venv project_env`
- `source project_env/bin/activate`

### Install Django using pip
If you have not installed pip, read this [article](https://www.educative.io/edpresso/installing-pip3-in-ubuntu) to install pip
- `pip install django`

### Create a project
- `django-admin startproject myfirstproject . `

### Create a Django app
- `python manage.py startapp helloapp`

### Run the development server
- `python manage.py runserver`

Open your browser and type **127.0.0.1:8000**
Congrats you launched your first Django application!