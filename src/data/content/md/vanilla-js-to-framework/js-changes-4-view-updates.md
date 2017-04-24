View Updates
============

JavaScript Changes
------------------

> Once a counter has been started (by click it's start button), we want to update the displayed count every second.

This is where the Vanilla JavaScript code and that of the various frameworks diverge significantly.
In order for this component to be reusable, the click events in our counter need to know which instance of the component was clicked.
While all the frameworks we're demo'ing here pretty much handle all this for you, our Vanilla JavaScript counter will need a few things to get this working properly.

### Vanilla JavaScript

So because our 'start the counter' click handler needs to know which counter to start,
we'll need to pass some instance data to the click handler, when we register the listener.

We'll do so like this:

```javascript
onStartCounterClick.bind(null, _instance_data);
```

And the instance data will include:

 * counter DOM element
 * current count

**fancy-counter.js**

```javascript
const TEMPLATE = '<div class="fancy-counter">' +
    ...
    '<div class="counter"></div>' +
    ...
    '</div>';

function onStartCounterClick (instance_data) {
    window.setInterval(function() {
        instance_data.count++; // update state
        instance_data.el_counter.innerHTML = instance_data.count; // update view
    }, 1000);
}

function onCounterAttached (el) {
    ...
    let _instance_data = {
        el_counter: el.querySelector('.fancy-counter .counter'),
        count: 0
    }
    ...
    let _el_button_start: el.querySelector('.fancy-counter .btn-start');
    _el_button_start.addEventListener("click", onStartCounterClick.bind(null, _instance_data);
    ...
}
```

### VueJS 2

**FancyCounter.vue**

```html
<template>
    <div class="fancy-counter">
        ...
        '{'{'count}}
        ...
    </div>
</template>
<script type="text/babel">
    export default {
        ...
        data: function () {
            return {
                count: 0
            }
        },
        ...
        methods: {
            onStartCounterClick: function () {
                this.count++; // update state and view will automatically be updated
            }
        },
        ...
    };
</script>
```

### AngularJS 2

...

### ReactJS

...
