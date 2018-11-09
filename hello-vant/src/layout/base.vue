<template>
    <div class="wrapper">
        <vHead/>
        <div class="content">
            <transition name="move" mode="out-in">
                <keep-alive>
                    <router-view></router-view>
                </keep-alive>
            </transition>
        </div>
        <vFooter/>
    </div>
</template>
<script>
    import vHead from './header';
    import vFooter from './footer';

    export default {

        mounted() {

        },
        data(){
            return {
                collapse: false,
            }
        },
        components:{
            vHead,
            vFooter
        },
        computed: {

        }
    }
</script>


