Step 1 - Reusable JavaScript counter component
==============================================

Goal
----

To create a reusable counter component using plain JavaScript (no ES6) and plain CSS (no SASS or LESS),
that we can use by placing the following in our HTML:

```html
<fancy-counter data-title="Fancy Counter"></fancy-counter>
```

We will use **GNU Make** for JavaScript linting and for publishing new releases to GitHub.

We will add 2 instances of the component to our HTML to ensure the component is reusable and that it's state is instance specific.

Resources
---------

 * [an article on custom html tags](https://www.html5rocks.com/en/tutorials/webcomponents/customelements/)
 * [an article on self executing anonymous functions](http://markdalgleish.com/2011/03/self-executing-anonymous-functions/)
 * [GNU Make docs](https://www.gnu.org/software/make/)

Code
----

Here's a snapshot of the finished code for this step:
[https://github.com/neilrussell6/vanilla-es6-fancy-counter/tree/v0.0.1](https://github.com/neilrussell6/vanilla-es6-fancy-counter/tree/v0.0.1)

HTML / JavaScript / CSS
=======================

Our counter component will consist of:

 * A render function
 * 2 helper functions
    * startCounter
    * stopCounter
 * 3 event handlers
    * onStartClick
    * onStopClick
    * onResetClick

The render function will register a custom HTML tag and build the component view.

```javascript
document.registerElement('fancy-counter');
...
```

Which will allow us to use the component in our index.html.

```html
<fancy-counter></fancy-counter>
```

We'll also get the counter's title from the DOM element's dataset, but fallback to a default incase it's not set.

```javascript
var _title = dom.el.dataset.title || DEFAULT_TITLE;
```

Which will allow us to set the counter's title in our index.html.

```html
<fancy-counter data-title="Fancy Counter"></fancy-counter>
```

All the component code will be wrapped in a self executing anonymous function, to keep it's internals out of the global scope.

```javascript
(function(){
    // our component code
})();
```

Makefile
========

todo
----

> A helpful rule that lists all the `TODO` comments in our source JavaScript.

jslint
------

> A rule that lints our source JavaScript.

args:

 * SUPPRESS (suppresses the lint output and instead displays a predefined message based on the linting result eg. "There were warnings during JS lint")
 * ERROR_LEVEL (When used in combination with the `SUPPRESS` argument, can cause this rule to fail on lint warnings)
 * WATCH (reruns the rule when JavaScript files are modified)

examples:

```bash
make jslint
make jslint SUPPRESS=1
make jslint SUPPRESS=1 ERROR_LEVEL=2
make jslint WATCH=1
make jslint SUPPRESS=1 WATCH=1
```

push
----

> A rule that performs a few checks before pushing our local repository to GitHub,
> which ensures we don't push any un-linted or broken code.

checks:

 * no JS lint errors

publish
-------

> A rule that performs a few checks before creating a new annotated GitHub tag and pushing as a release.
> Will use package.json version number and MESSAGE (if provided).

args:

 * MESSAGE (message for annotated tag, must be escaped and wrapped in quotes eg. `MESSAGE="some\ \-\ new\ version"`, defaults to "v$(PACKAGE_VERSION)")

checks:

 * local repo is clean (no outstanding commits)
 * local repo is up to date with remote
 * package.json version is new

examples:

```bash
make publish
make publish MESSAGE=version1
make publish MESSAGE="new\ release"
make publish MESSAGE="fancy\ counter\ \-\ version\ one"
```
