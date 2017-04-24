Walk-through :: Vanilla JavaScript Fancy Counter
================================================

> In this walk-through we will incrementally create a **reusable JavaScript counter component**, that can count in a number of different ways (eg. in the Fibonacci sequence).

Overview
--------

We will initially use plain JavaScript and CSS, but we'll switch over to **ES6** and **SASS** from Step 3.

We'll use [GNU Make](https://www.gnu.org/software/make/) to run all scripts such as code compilation, linting, testing, building and publishing.

We'll use [Webpack](https://webpack.github.io) for module loading/bundling and as our dev server, and we'll set it up so that we have **hot module replacement** for CSS changes and reload on change for JavaScript changes.

At each step we'll go through the important JavaScript, Webpack & Makefile changes.

> NOTE: At the time of writing this project only works in Chrome.

Table of contents
-----------------

### [Step 1 - Create a reusable counter component](vanilla-es6-fancy-counter/step-1-reusable-counter-component):

 * Create a reusable counter component using only plain JavaScript (no ES6) and plain CSS (no SASS or LESS).
 * Implement JavaScript linting.
 * Create a Makefile with rules for JavaScript linting and basic GitHub actions (pushing / publishing new releases).

### [Step 2 - Implement Webpack](vanilla-es6-fancy-counter/step-2-webpack-hot-module-replacement):

 * Implement Webpack and configure Live Reloading / Hot module replacement.
 * Update Makefile with rules to serve Webpack Dev Server.

### [Step 3 - Convert to ES6 and SASS](vanilla-es6-fancy-counter/step-3-es6-sass):

 * Convert all JavaScript to ES6.
 * Convert all CSS to SASS.
 * Add Babel and update Webpack config to compile ES6 and SASS.
 * Update Makefile with rule to lint ES6 and SASS on change.
 * Update Makefile with rule to build project for distribution.
 * Update Makefile to lint before pushing, publishing or building.

### [Step 4 - Create a counter utility with tests](vanilla-es6-fancy-counter/step-4-counter-utility-tests):

 * Add Mocha / Chai and writes tests for the counter utility that will allow the counter to count in various ways (eg. in the Fibonacci sequence).
 * Create counter utility that passes tests.
 * Update Makefile with rules to run tests and generate code coverage.
 * Update Makefile to test before pushing, publishing or building.

### [Step 5 - Implement Redux for state management](vanilla-es6-fancy-counter/step-5-redux-state-management):

 * Implement Redux for state management.

Code
----

You can get the code for each step of the process at the following locations:

* [Finished project](https://github.com/neilrussell6/vanilla-es6-fancy-counter)
* [Step 1 - Create a reusable counter component with plain JavaScript & CSS](https://github.com/neilrussell6/vanilla-es6-fancy-counter/tree/v0.0.1)
* [Step 2 - Implement Webpack and configure Hot module replacement](https://github.com/neilrussell6/vanilla-es6-fancy-counter/tree/v0.0.2)
* [Step 3 - Convert to ES6 and SASS](https://github.com/neilrussell6/vanilla-es6-fancy-counter/tree/v0.0.3)
* [Step 4 - Create a counter utility with tests](https://github.com/neilrussell6/vanilla-es6-fancy-counter/tree/v0.0.4)
* [Step 5 - Redux state management](https://github.com/neilrussell6/vanilla-es6-fancy-counter/tree/v0.0.5)
