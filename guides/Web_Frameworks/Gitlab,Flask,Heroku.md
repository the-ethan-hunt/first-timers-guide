# Integrating GitLab CI/CD, Flask, and Heroku

This tutorial assumes you already have a working flask application within a virtual environment and have your code hosted on GitLab. Also ensure you have Gunicorn installed. You can install it from ```pip install gunicorn```.

## Getting Ready

Run ```pip freeze > requirements.txt``` to grab all the requirements for running your application.

Create a ```Procfile``` file. Inside, place the following code ```web: gunicorn <name of the app.py file>:<app-name>``` where app-name is usually “app”.

Push everything to GitLab.

## Connecting Everything

Create a new Heroku application. Using a short name will make later steps easier.

Create a new file in your app root called ```.gitlab-ci.yaml```.

Here is a cookie-cutter example of a GitLab CI/CD config:
```yaml
[app.py file name]:
    script:
        — apt-get update -qy
        — apt-get install -y python-dev python-pip
        — pip install -r requirements.txt
 
production:
    type: deploy
    script:
        — apt-get update -qy
        — apt-get install -y ruby-dev
        — gem install dpl
        — dpl — provider=heroku — app=[Heroku App Name] — api-key=$HEROKU_SECRET_KEY
    only:
        — master
 ```

 Now swap out ```[app.py file name]``` with your file name and ```[Heroku App Name]``` with the name of your heroku app.

 To set the HEROKU_SECRET_KEY,
 * Get your Heroku API key from https://dashboard.heroku.com/account. 

 * Within GitLab, go to **Settings → CI / CD → Secret variables**.
 
 * Create a new variable and set the **Variable key** to **HEROKU_SECRET_KEY** and the **Variable Value** to your **Heroku API Key**.

 * Set the protected switch to **ON**.

Push the changes to GitLab.

## Conclusion

Now that everything is all setup, head over to your Heroku app URL and enjoy the fruits of your labour.

