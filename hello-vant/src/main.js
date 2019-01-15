import Vue from 'vue'
import App from './App.vue'
import Vant from 'vant';
import './assets/css/style.css'
import 'vant/lib/index.css';
import router from './router';
import store from './store'
import axios from 'axios'
import Vuex from 'vuex'

Vue.use(Vant);
Vue.use(Vuex)
let bus = new Vue();
Vue.prototype.$store=store;
Vue.prototype.$bus = bus;
Vue.prototype.$http = axios


router.beforeEach((to, from, next) => {
    if(to.meta.title){
        document.title=to.meta.title;
        next()
    }
})




Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
