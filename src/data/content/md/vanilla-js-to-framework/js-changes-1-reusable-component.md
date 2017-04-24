Reusable component
==================

JavaScript Changes
------------------

> We want to add our counter directly to the HTML, like this:

```html
<fancy-counter></fancy-counter>
```

### Vanilla JavaScript

**fancy-counter.js**

```javascript
const TEMPLATE = '<div class="fancy-counter">...</div>';

function onCounterAttached (el) {
    el.innerHTML = TEMPLATE;
}

// create custom element
let _prototype = Object.create(HTMLElement.prototype);

// listen for when the element is attached in our HTML
_prototype.attachedCallback = function () {
    onCounterAttached(this); // 'this' is the counter HTML element
};

// register custom element
document.registerElement('fancy-counter', { prototype: _prototype });
```

### VueJS 2

* [VueJS 2 component docs](https://vuejs.org/v2/guide/components.html)

**FancyCounter.vue**

```html
<template>
    <div class="fancy-counter">...</div>
</template>
<script type="text/babel">
    export default {
        ...
    };
</script>
```

### AngularJS 2

...

### ReactJS

...
