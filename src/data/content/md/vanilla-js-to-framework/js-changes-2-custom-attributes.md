Custom attributes
=================

JavaScript Changes
------------------

> We want to set our counter's title on a per instance basis via a custom attribute, like this:

```html
<fancy-counter title="Fancy Counter 1"></fancy-counter>
```

### Vanilla JavaScript

```html
<fancy-counter data-title="Fancy Counter 1"></fancy-counter>
```

**fancy-counter.js**

```javascript
const TEMPLATE = '<div class="fancy-counter">' +
    ...
    '<div class="title"></div>' +
    ...
    '</div>';

function onCounterAttached (el) {    
    ...
    let _el_title = el.querySelector('.fancy-counter .title');
    _el_title.innerHTML = el.dataset.title || "Fancy Counter";
}
```

### VueJS 2

> [VueJS 2 component props](https://vuejs.org/v2/guide/components.html#Props)

if we want to set it using a literal string:

```html
<fancy-counter title="Fancy Counter 1"></fancy-counter>
```

if we want to set it using a JavaScript variable:

```html
<fancy-counter :title="first_fancy_counter_title"></fancy-counter>
```

**FancyCounter.vue**

```html
<template>
    <div class="fancy-counter">
        ...
        {{title}}
        ...
    </div>
</template>
<script type="text/babel">
    export default {
        ...
        props: {
            title: {
                type: String,
                default: "Fancy Counter"
            }
        },
        ...
    };
</script>
```

### AngularJS 2

> ...

### ReactJS

> ...
