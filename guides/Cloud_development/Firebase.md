# Firebase

[Firebase](https://firebase.google.com) is a development platform owned by Google (formerly known as *Firebase, Inc.* acquired in 2014) that enables programmers to build web and mobile applications faster. It is comprised of many functionalities such as:
- [**Cloud Storage**](https://firebase.google.com/products/storage/) to simply serve resources like videos and photos.
- [**Hosting**](https://firebase.google.com/products/hosting/) to deliver web assets easily by deploying static files (HTML, CSS, JS);
- [**Cloud Functions**](https://firebase.google.com/products/functions/) to run server side code hassle-free.

> For further details about their many other functionalities such as their **user engagement** tools (*analytics*, *invites* and so on), please follow this [link](https://firebase.google.com/products/).
***
## Install and develop with the [Firebase client](https://firebase.google.com/docs/cli/) locally:
1. [**NodeJS**](https://nodejs.org/en/download/) must be installed first.
2. Second, open a **command prompt** and run `npm i -g firebase-tools` (Patience will help for this step as there are lots of node modules being downloaded...).
3. Afterwards, by running this command: `firebase login`, you can log in to your Google account to access your Google projects (Email + password of the Google account).
4. Next, run `firebase init` in a project folder of your choice to start developing.
5. Use `firebase serve` to test the project locally ([**ngrok**](https://ngrok.com/download) shall come in handy to expose your local instance to the Web with HTTP tunnelling).
5. Finally, once you're done tinkering with your app, `firebase deploy` can be used to push your changes to Google's servers.
***
## There are 3 pricing plans:
- **Spark Plan** which is mainly used for testing purposes and external network calls are disabled.
- **Flame Plan** is a monthly fee plan with capped services.
- **Blaze Plan** is a "pay-as-you-go" plan without any capping on use and allows several databases per project unlike the other plans.