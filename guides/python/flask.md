# 1: What is Flask? Why Should You Care?

Flask is a web application framework written in Python, meaning it is a third-party Python library used for developing web applications.

It makes the process of designing a web application simpler. Flask lets us focus on what the users are requesting and what sort of response to give back.
 

You probably heard Django when looking up Flask.Both are web frameworks written in Python.
Django is a full-stack web framework for Python, whereas Flask is a lightweight and extensible Python web framework

# 2: Why Flask?
Just like how people get confused with which Python version to start with, Django vs Flask is another age-old debate. Though people say Flask is simple and easy to get started with while Django is heavy for building web applications, there is another important reason why you should choose Flask over Django.

We, as developers in the era of the cloud, are moving away from monolithic applications. With microservices architecture in place, running multiple Django servers is going to make your services heavy because of all the built-in apps it comes with.

# 3: Flask Structure
Instead of cramming all your code into one place, Flask helps you organize:
- (1) your logic
- (2) design
- (3) database into separate files.

**LOGIC**: ‘main.py’ imports the Flask module, creates a web server, creates an instance of the Flask class — your new web application! This is where you write all your “logical” code structuring your web app.

**DESIGN**: The Flask Framework looks for HTML files in a folder called templates. Put all your HTML files in there. In static folder, store CSS, JavaScript, images, and other files.

**DATABASE**: Flask does not support databases natively, but there are a number of Flask extensions such as Flask-SQLAlchemy.


## RESOURCES TO LEARN Flask:

[Learn Flask for Python — Full Tutorial](https://www.youtube.com/watch?v=Z1RJmh_OqeA)

[How to build a web application using Flask](https://www.freecodecamp.org/news/how-to-build-a-web-application-using-flask-and-deploy-it-to-the-cloud-3551c985e492/)

[Build Your 1st Python Web App With Flask](https://medium.com/bhavaniravi/build-your-1st-python-web-app-with-flask-b039d11f101c)

[Flask Tutorials](https://realpython.com/tutorials/flask/)
