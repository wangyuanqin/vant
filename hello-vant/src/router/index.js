import Vue from 'vue'
import Router from 'vue-router';

Vue.use(Router);
export default new Router({
    mode: 'history',
    routes: [{
        path: '/',
        component: resolve => require(['../layout/base.vue'], resolve),
        children: [
            {
                path: '/',
                name: 'Index',
                component: resolve => require(['../pages/index.vue'], resolve),
                meta: {title: '首页'}
            },{
                path: 'productIndex',
                name: 'productIndex',
                component: resolve => require(['../pages/product/index.vue'], resolve),
                meta: {title: '产品'}
            },{
                path: 'showIndex',
                name: 'showIndex',
                component: resolve => require(['../pages/show/index.vue'], resolve),
                meta: {title: '展示'}
            },{
                path: 'userIndex',
                name: 'userIndex',
                component: resolve => require(['../pages/user/index.vue'], resolve),
                meta: {title: '个人中心'}
            },
        ]
    }]
})