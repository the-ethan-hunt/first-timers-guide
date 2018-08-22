# Overview

[**Progressive Web Apps**][1] (or **PWA**) behave like regular web pages/web apps with additional functionalities of native apps viz. working offline, push notifications, accessibility and a lot more--in fact, Google has provided a [checklist][2] that sets the standard for how a PWA should function.

![](https://i0.wp.com/pbiswas101.files.wordpress.com/2018/08/pwa.png?ssl=1&w=450)

In 2015, **Frances Berriman** and **Alex Russell** coined the term `progressive web apps` in order to describe the seamless benefits of mobile rich experience provided by modern browsers that are on par with most native apps in terms of performance and accessibility. According to **Alex Russel**, PWAs are --

> "Just websites that took all the right vitamins"

# Introduction

There's no doubt **native apps** run a lot faster & smoother than **web apps** as most of these don't require an internet connection to operate as opposed to web apps; so there's no request-response time delay associated with it. In general, native apps are much more performant in terms of accessibility and user interface but these apps are platform dependent. An Android app can't run on the iOS device and vice-versa. For which, a developer needs to maintain multiple codebases for running the same application on various [operating systems][3] for reaching all the users. But the web is operating system independent, widely reachable, and the biggest platform on the internet. Now, what if, we could somehow bring together the best of both world? -- The answer is **Progressive Web Apps**!

![](https://i2.wp.com/pbiswas101.files.wordpress.com/2018/08/pwa_vs_native.png?ssl=1&w=450)

###### The key features of a PWA are:

- **Reliable** -- offline-first approach, meaning it should provide interfaces even in poor or no internet connection.

- **Fast** -- instant-loading, and smooth experiences even on loading content.

- **Engaging** -- immersive experience, equivalent to that of a native app with the help of push notifications, home screen icon and so on.

Samsung Internet’s **Peter O’Shaughnessy** has a good approach for implementing the above-mentioned concepts from a technical point of view and enlists a requirement of core technologies:

![](https://i2.wp.com/pbiswas101.files.wordpress.com/2018/08/requirement.png?ssl=1&w=450)

- **Service Worker** -- A specific category of web worker or scripts written in JavaScript that runs separately from the main browser thread in the background, intercepting network requests, caching resources, and support various APIs including push notifications, background sync, and caching.

- **HTTPS** -- It represents s secure HTTP communications using TLS or SSL encryption as PWA are expected to be highly secure because due to service workers these apps can be exploited easily to cause serious attacks. There are many services which help you get your site an SSL certificate like [LetsEncrypt][4] and [SSLforfree][5].

- **Web App Manifest** -- Basically, a JSON file that gives information about how the app should look in the home screen, on the web, and so on. It can be used to add a theme color, icons for the home screen, and a splash screen to name a few.

# Conclusion

[Lighthouse][6] is a great extension for checking whether a web app qualifies as **Progressive** or not. In a nutshell, think of PWA as belonging to a next-generation universal platform-independent backward-compatible responsive set of applications which has access to the internet while also being fast, reliable and engaging in poor networks with a sophisticated level of access to the device's functionality. The idea behind building Progressive Web Apps is to bring together the best practices of web development and capabilities of native apps so that one app can run across multiple platforms.

------------

[1]: https://en.wikipedia.org/wiki/Progressive_Web_Apps
[2]: https://developers.google.com/web/progressive-web-apps/checklist
[3]: https://en.wikipedia.org/wiki/Operating_system
[4]: https://letsencrypt.org/
[5]: https://www.sslforfree.com/
[6]: https://developers.google.com/web/tools/lighthouse/
