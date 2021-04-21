import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueLazyload from 'vue-lazyload'
Vue.config.productionTip = false

Vue.use(VueAxios, axios)

Vue.use(VueLazyload, {
    loading: require('./assets/load.svg'),
    error: require('./assets/load.svg')
})


new Vue({
    router,
    render: h => h(App)
}).$mount('#app')