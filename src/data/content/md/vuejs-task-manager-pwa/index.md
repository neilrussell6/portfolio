Vuejs Task Manager Web App
==========================

[View project on Github](https://github.com/neilrussell6/vuejs-task-manager)

This is your typical Todo / Task manager app, with a few extras.
It's an open source progressive web app with offline / online modes.

#### How it works

As a progressive web app, this project uses a Service Worker to cache all it's essential assets, which allows for almost instant load time and offline usage, amongst other things.
It requires no signup or login to use in offline mode, but if you have an account and login the app will then syncronise with a [Laravel 5 JSON API backend](/task-manager-api) whenever a connection is available, and continuously query the API in the background as you work, storing the changes you make.
However logins are not currently available, as this project is primarily for education / demo purposes.

#### Technologies used

This app uses:

 * locally generated uuids for offline first data management.
 * IndexedDb (a browser based data storage system) to store data and app state locally.
 * VueJS as it's JavaScript framework.
 * REDUX for state management.
 * General functional programming / no mutations approach to it's code.
 * Mocha / Chai / Sinon for testing
 * Webpack for ...
 * GNU Make as a build tool

#### Goal

One goal I habe for this project, beyond demo'ing the capabilities of a PWA with a Laravel backend, is to create a task manager that is simple, clean and free of the "clutter" that comes with systems like YouTrack and Jira.
While I understand the importance of all the features in these systems, especially when it comes to collaboration, and the oversight it provides everyone involved in a project, I just personally prefer to work from a simple task list, especially on solo / personal projects, as in these cases systems like Jira and Youtrack are just overkill.

#### Roadmap

Features I plan on implementing in the future include:

 * syncronising with a Jira and YouTrack accounts.
 * signups, to allow other users to persist their data, manage their tasks on multple devices and share tasks with other users.
