<template>
    <div class="header">
        <van-nav-bar
                :fixed="fixed"
                :z-index="zIndex"
                :title="header"
                left-text="返回"
                right-text="按钮"
                left-arrow
                @click-left="onClickLeft"
                @click-right="onClickRight"
        />
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';

    export default {
        data(){
            return{
                fixed:true,
                zIndex:100
            }
        },
        computed: {
            ...mapGetters(['header'])
        },
        methods: {
            onClickLeft() {
                this.$toast('返回');
            },
            onClickRight() {
                this.$toast('按钮');
            }
        }
    }
</script>