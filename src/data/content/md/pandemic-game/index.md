Pandemic game 3
===============

> I recently got this in board game format, and thought it would be fun to recreate it as an interactive Google Maps style web app.

![pandemic-game](/assets/screenshots/pandemic-2.png)

 * [Play Game](https://pandemic-game.neilrussell.co.za)
 * [View code on GitHub](https://github.com/neilrussell6/vuejs-leafletjs-pandemic-game)

### Roadmap

Currently it only supports 2 players, playing in the same browser, but I plan on adding support for remote play using Web Sockets.

I also plan on turning this into a PWA with offline support.

### Technologies used

 * [LeafletJS](http://leafletjs.com/) for interactive map
 * [MapBox](https://www.mapbox.com/) to customize and serve the map images
 * [VueJS 2](https://vuejs.org/) as JavaScript framework
 * [Redux](http://redux.js.org/) for state management
 * [Mocha](https://mochajs.org/) as testing framework
 * [Istanbul](https://istanbul.js.org/) for test coverage reporting
 * [Webpack 2](https://webpack.github.io/) for module bundling
 * [GNU Make](https://www.gnu.org/software/make/) as a build tool
