<template>
    <div>
        <vSwiper/>
        this is index
        <router-link :to="{name:'userIndex'}"><van-button type="primary">go user index</van-button></router-link>
        <van-button @click="toast">toast</van-button>
    </div>

</template>

<script>
    import vSwiper from '../components/swiper.vue';
    export default {
        activated(){
            this.$store.dispatch('setHeader','首页');
            this.$store.dispatch('setActive',0);
        },
        components:{
            vSwiper
        },
        methods:{
            toast(){
                this.$toast('提示文案');
            }
        }

    }
</script>