import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import * as templates from 'data/content/template-map';
import * as menu_utils from 'utils/menu.utils';

Vue.use(VueRouter);

const _routes = menu_utils.formatRoutes(templates);

export const router = new VueRouter({
    // mode: 'history',
    routes: _routes,
    scrollBehavior (to, from, savedPosition) {
        return { x: 0, y: 0 };
    }
});

new Vue({
    router,
    el: '#app',
    components: { App }
});
