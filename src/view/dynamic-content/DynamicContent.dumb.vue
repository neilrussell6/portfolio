<template>

    <div class="body" :class="page_name">

        <aside class="aside aside-1">

            <ul class="nav" v-if="!is_categorized">

                <li v-for="item in menu" class="nav-item" :class="{'selected': selected_item_key === item.key}">

                    <template v-if="menu[ item_i ].to === '/'">
                        <router-link :to="menu[ item_i ].to" exact v-on:click.native="_onSelect(menu[ item_i ])">{{menu[ item_i ].label}}</router-link>
                    </template>

                    <template v-else>
                        <router-link :to="menu[ item_i ].to" v-on:click.native="_onSelect(menu[ item_i ])">{{menu[ item_i ].label}}</router-link>
                    </template>

                    <template v-if="item.hasOwnProperty('items')">

                        <ul class="nav sub-nav">
                            <li v-for="subitem in item.items" class="nav-item">
                                <router-link :to="subitem.to">{{subitem.label}}</router-link>
                            </li>
                        </ul>

                    </template>

                </li>
            </ul>

            <div v-if="is_categorized">
                <div v-for="category in categories">

                    <div v-if="category.label" class="category">{{category.label}}</div>

                    <ul class="nav">

                        <li v-for="item_i in category.menu_indices" class="nav-item" :class="{'selected': selected_item_key === menu[ item_i ].key}">

                            <template v-if="menu[ item_i ].to === '/'">
                                <router-link :to="menu[ item_i ].to" exact v-on:click.native="_onSelect(menu[ item_i ])">{{menu[ item_i ].label}}</router-link>
                            </template>

                            <template v-else>
                                <router-link :to="menu[ item_i ].to" v-on:click.native="_onSelect(menu[ item_i ])">{{menu[ item_i ].label}}</router-link>
                            </template>

                            <template v-if="menu[ item_i ].hasOwnProperty('items')">

                                <ul class="nav sub-nav">
                                    <li v-for="subitem in menu[ item_i ].items" class="nav-item">
                                        <router-link :to="subitem.to">{{subitem.label}}</router-link>
                                    </li>
                                </ul>

                            </template>

                        </li>
                    </ul>

                </div>
            </div>

        </aside>

        <main class="main content-wrapper">
            <div class="content content-main">
                <router-view></router-view>
            </div>
        </main>

    </div>

</template>

<script type="text/babel">

    import { router } from '../main';
    import VueRouter from 'vue-router';

    // data
    import * as templates from 'data/content/template-map';
    import * as config from 'data/config/dynamic-content.json';

    // utils
    import * as menu_utils from 'utils/menu.utils';
    import * as collection_utils from 'utils/collection.utils';

    // ----------------------------
    // VueJS
    // ----------------------------

    let _menu = menu_utils.formatMenu(templates, config);
    _menu = menu_utils.sortMenu(_menu, 'to', config.order);
    _menu = _menu.map((item) => {
        return item.hasOwnProperty('items') ? Object.assign({}, item, { items: menu_utils.sortMenu(item.items, 'to', config.order) }) : item;
    });
    let _categories = menu_utils.populateCategoryIndices(_menu, config.categories);

    export default {

        data: function () {
            return {
                menu: _menu,
                categories: _categories,
                is_categorized: true,
                selected_item_key: null
            };
        },

        computed: {
            page_name: function () {

                if (this.$route.path === '/') {
                    return 'home';
                }

                return this.$route.path.replace(/^\//, '').replace(/\//g, '_');
            }
        },

        methods: {
            _onSelect (link) {
                this.selected_item_key = link.key;
            }
        },

        mounted: function () {
            const _selected_item = collection_utils.findByKeyValue(_menu, 'to', router.currentRoute.path);
            if (_selected_item !== null) {
                this.selected_item_key = _selected_item.key;
            }

            console.log(this.$route);
        }
    };
</script>

<style lang="scss" scoped>
    @import '../../styles/dynamic-content.scss';
</style>
