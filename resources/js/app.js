require('./bootstrap');

window.Vue = require('vue').default;
import store from './store';

import "@sensetence/vue-quintable/dist/vue-quintable.css"
import VueTable from '@sensetence/vue-quintable'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(VueTable);
Vue.use(ElementUI);

Vue.component('importer-component', require('./components/ImporterComponent.vue').default);

const app = new Vue({
    store,
    el: '#app',
});
