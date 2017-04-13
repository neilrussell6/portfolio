Laravel 5 JSON API package
==========================

> A Laravel 5 implementation of the [JSON API](http://jsonapi.org/format/) specification, with support for customisation, [JWT](https://jwt.io/) integration and ACL (currently only [Laratrust](https://github.com/santigarcor/laratrust)).

 * [View code on GitHub](https://github.com/neilrussell6/laravel5-json-api)

This package is used by my [Task Manager API](/task-manager-api).

Story
-----

For my first attempt at this API I used the popular Laravel API package Dingo, which in turn leverages Fractal.

And while these are great packages with their uses, customising them to meet the JSON API specs turned out to be a bit too messy.

So I decided to create this package from scratch, with vanilla Laravel 5 as it's base.

This API is about 80% complete and strictly implements almost all the JSON API v1 specs and implied functionality.

Features that still need to be implemented are:
 ...
