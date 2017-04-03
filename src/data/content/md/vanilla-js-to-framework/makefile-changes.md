Redux
=====

**NOTE:**
We won't go into setting up Redux, but here is an overview of the parts our counter component will interact with:

 * `'state/store'` - Our app's Redux store
 * `'state/counters/counters.actions'` - The Redux actions for our app's counters

JavaScript Changes
------------------

> We don't want our view to make changes to our counter's state, so we'll seperate state updates and view updates as follows:
>  - Wherever we are updating state, we'll instead dispatch a Redux action.
>  - And instead of updating the view there and then, we'll subscribe to our Redux, and update the view on state changes.
>  - We'll also set each counter's `local id` when defining it in out HTML, and so we'll add a custom attribute to support this.

### Vanilla JavaScript

```html
<fancy-counter data-local-id="1"></fancy-counter>
```

**fancy-counter.js**

```javascript
import { store } from 'state/store';
import * as CountersActions from 'state/counters/counters.actions';

function onStartCounterClick (local_id) {

    const _state = store.getState();

    window.setInterval(function() {
    
        // dispatch Redux action
        store.dispatch(CountersActions.incrementCounter(local_id));
    }, 1000);
}

function onCounterAttached (el) {
    ...

    const _state = store.getState();
    
    let _instance_data = {
        local_id: el.dataset.localId, // our 'data-local-id' HTML attribute
        el_counter: el.querySelector('.fancy-counter .counter'),
        ...
    }
    
    // add counter to state
    store.dispatch(CountersActions.addCounter(_instance_data));
    
    ...
    
    // just pass instance's local id, becuase that's all our handler will need to dispatch the incremenet counter Redux action
    _el_button_start.addEventListener("click", onStartCounterClick.bind(null, _instance_data.local_id);
}

function updateView () {

    const _state = store.getState();

    _state.counters.map((counter) => {
        ...
        counter.el_counter.innerHTML = counter.count;
        ...
    });
}

// subscribe to Redux store, so can respond to state changes
store.subscribe(updateView);
```

### VueJS 2

```html
<fancy-counter local-id="1"></fancy-counter>
```

**FancyCounter.vue**

```html
<script type="text/babel">

    function updateView () {

        const _state = store.getState();

        // get counter by this.localId
    }
    
    export default {
        ...
        props: {
            localId: {
                type: Number,
                required: true
            }
        },
        ...
        mounted: function () {
        
            // create counter state instance
            store.dispatch(CountersActions.addCounter({
                local_id: this.localId,
                title: this.title
            }));

            // subscribe to Redux store, so can respond to state changes
            store.subscribe(updateView);
        },
        ...
    };
</script>
```

### AngularJS 2

> ...

### ReactJS

> ...
