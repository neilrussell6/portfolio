Pixel Map Maker
===============

> This is a simple app that allows you to create pixel art maps.

![pixel-map-maker](/assets/screenshots/pixel-map-maker-1.png)

 * [View Demo](https://pixel-map-maker.neilrussell.co.za)
 * [View code on GitHub](https://github.com/neilrussell6/vuejs-pixel-map-maker)

How it works
------------

* Maps are stored in browser storage using IndexedDb.
* The map is rendered as SVG.
* And each "pixel" is a randomly chosen image overlay with color variant generated in SASS.

![pixel-map-maker](/assets/screenshots/pixel-map-maker-2.png)

Technologies used
-----------------

 * locally generated uuids for offline first data management.
 * IndexedDb (a browser based data storage system) to store data and app state locally.
 * [VueJS 2](https://vuejs.org/) as JavaScript framework
 * [VueX](https://vuex.vuejs.org/en/intro.html) for state management
 * [Mocha](https://mochajs.org/) as testing framework
 * [Webpack 2](https://webpack.github.io/) for module bundling
 * [GNU Make](https://www.gnu.org/software/make/) as a build tool

Roadmap
-------

* To allow maps to be exported as images
* To allow maps to be shared between users

> I also plan on creating some simple browser/mobile games using maps created with this web app.

