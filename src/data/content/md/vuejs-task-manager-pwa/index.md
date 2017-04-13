VueJS Task Manager PWA
======================

> This is your typical Todo / Task manager app, but with a few extras. It's an open source progressive web app with offline / online modes.

![vuejs-task-manager-pwa](/assets/screenshots/vuejs-task-manager-pwa.png)

 * [View Demo](https://task-manager.neilrussell.co.za)
 * [View Code on GitHub](https://github.com/neilrussell6/vuejs-task-manager)

How it works
------------

As a progressive web app, this project uses a Service Worker to cache all it's essential assets, which allows for almost instant load time and offline usage, amongst other things.

It requires no signup or login to use in offline mode, but if you have an account and login the app will then syncronise with a [Laravel 5 JSON API backend](/task-manager-api) whenever a connection is available, and continuously query the API in the background as you work, storing the changes you make.

However logins are not currently available, as this project is primarily for education / demo purposes.

Technologies used
-----------------

 * locally generated uuids for offline first data management.
 * IndexedDb (a browser based data storage system) to store data and app state locally.
 * [VueJS 2](https://vuejs.org/) as JavaScript framework
 * [Redux](http://redux.js.org/) for state management
 * [Mocha](https://mochajs.org/) as testing framework
 * [Istanbul](https://istanbul.js.org/) for test coverage reporting
 * [Webpack 2](https://webpack.github.io/) for module bundling
 * [GNU Make](https://www.gnu.org/software/make/) as a build tool

Goal
----

A simple, clean & "clutter" free task manager for simple / personal project management.

Roadmap
-------

Features I plan on implementing in the future include:

 * prioritising & ordering projects & tasks
 * simple reporting (eg. graphs etc)
 * syncronising with Jira and YouTrack APIs
 * signups, to allow other users to persist their data, manage their tasks on multiple devices and share tasks with other users.
