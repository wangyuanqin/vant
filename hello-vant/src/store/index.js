import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);



const  store = new Vuex.Store({
    state:{
        header:"首页",
        active:0
    },
    mutations:{
        SET_HEADER(state,param){
            this.state.header=param;
        },
        SET_ACTIVE(state,param){
            this.state.active=param;
        },
    },
    actions:{
        setHeader({commit},param){
            commit('SET_HEADER',param);
        },
        setActive({commit},param){
            commit('SET_ACTIVE',param);
        },
    },
    getters: {
        header: (state) => {
            return state.header;
        },
        active: (state) => {
            return state.active;
        },
    }
})

export default store;