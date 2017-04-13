Markdown Live Reload
====================

> This is a demo that uses NodeJS & Python to convert Markdown to HTML on save, and live reload the resulting VueJS web app in the browser.

@[youtube](gSV9UuXOrdM)

> This approach is also used to manage this website

[View code on GitHub](https://github.com/neilrussell6/vuejs-markdown-live-reload)

Workflow
--------

All you need to do is run two GNU Make commands

 1) ``make serve`` which serves the Webpack dev browser with live reload enabled.
 2) ``make build-md-w`` which handles converting the MDs to HTML, and generating the ES6 template map that our VueJS app will use to both create a menu and import the HTML content.

Then whenever you save an MD file, the browser will automatically reflect the changes.

How it works
------------

I won't go into the ``make serve`` part, as that is simply Webpack with live reload configuration which is covered extensively on the web.

The ``make build-md-w`` part works as follows:

 1) it uses the ``find`` command-line utility to retrieve a list of all the MD files in the ``src/data/content/md`` directory.
 2) it then pipes that list to an AWK script which runs a NodeJS script (``./md-2-html/index.js``) on each filename.
 3) the NodeJS script uses the [markdown-it](https://github.com/markdown-it/markdown-it) package to convert the MD to HTML, with some customisations and extensions (such as my [markdown-it-code-embed](data/content/md/markdown-it-code-embed/index.md)).
 4) lastly it calls a Python script (``dir-2-js-export/dir-2-js-export.py``) which generates an ES6 template map that our VueJS app will use to build a menu and import the HTML content.
