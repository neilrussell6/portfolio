Step 4 - Counter utility with tests
===================================

Goal
----

To implement testing and add a Counter utility with tests.

We will use **GNU Make** to run tests and generate a coverage report.

Resources
---------

 * [Mocha docs - test framework](https://mochajs.org/)
 * [Chai docs - test assertion library](http://chaijs.com/)
 * [Istanbul docs - test coverage report](https://istanbul.js.org/)
 * [Wikipedia page on the Fibonacci Sequence](https://en.wikipedia.org/wiki/Fibonacci_number)

Code
----

Here's a snapshot of the full project at this point:
[https://github.com/neilrussell6/vanilla-es6-fancy-counter/tree/v0.0.4](https://github.com/neilrussell6/vanilla-es6-fancy-counter/tree/v0.0.4)

Code overview
-------------

Our counter utility will have 2 simple functions:

`countNormal`
Will just increment the current count and return the result.
This will be the default count type for the component.

`countFibonacci`
Will add the previous and current counts and return the result, unless the result is 0, in which case it will return 1.
This will be the count type used by the component when the Fibonacci button is toggled on.
