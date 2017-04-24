Internal events
===============

JavaScript Changes
------------------

> We want to listen to the click events of our counter's controls.

### Vanilla JavaScript

**fancy-counter.js**

```javascript
const TEMPLATE = '<div class="fancy-counter">' +
    ...
    '<button class="btn-start">START</button>' +
    ...
    '</div>';

function onCounterAttached (el) {
    ...
    let _el_button_start: el.querySelector('.fancy-counter .btn-start');
    _el_button_start.addEventListener("click", onStartCounterClick);
}
```

### VueJS 2

* [VueJS 2 Custom Event docs](https://vuejs.org/v2/guide/components.html#Custom-Events)

**FancyCounter.vue**

```html
<template>
    <div class="fancy-counter">
        ...
        <button class="btn-start" v-on:click="onStartCounterClick()">START</button>
        ...
    </div>
</template>
<script type="text/babel">
    export default {
        ...
        methods: {
            onStartCounterClick: function () {
            ...
        },
        ...
    };
</script>
```

### AngularJS 2

...

### ReactJS

...
