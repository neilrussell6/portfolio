Step 5 - Redux state management
===============================

#### Goal

To add Redux state management to the project.

#### Resources

 * [Redux - state management](http://redux.js.org/)
 * [Deep Freeze - recursively freeze objects for testing](https://github.com/substack/deep-freeze)

#### Code

Here's a snapshot of the full project at this point:
[https://github.com/neilrussell6/fancy-counter/tree/0.0.5](https://github.com/neilrussell6/fancy-counter/tree/0.0.5)

#### Code overview

Wherever there is functionality in the component that altered the app's state, we wil instead dispatch Redux actions.

Redux reducers will handle all the state manipulation, making it easier to test.

And our component will subscribe to the state change, and render all UI updates according to current app state.
