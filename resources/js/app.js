require('./bootstrap')

window.Vue = require('vue').default
import store from './store'

import "@sensetence/vue-quintable/dist/vue-quintable.css"
import VueTable from '@sensetence/vue-quintable'
import locale from 'element-ui/lib/locale'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
const lang = 'en'

const _lang = require('element-ui/lib/locale/lang/' + lang)
locale.use(_lang.default)

Vue.use(VueTable);
Vue.use(ElementUI);

Vue.component('importer-component', require('./components/ImporterComponent.vue').default)

const app = new Vue({
    store,
    el: '#app',
});
