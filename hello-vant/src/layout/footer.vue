<template>
    <div class="footer">
        <van-tabbar v-model="active" >
            <van-tabbar-item icon="wap-home" :to="{name:'Index'}">首页</van-tabbar-item>
            <van-tabbar-item icon="exchange" dot :to="{name:'productIndex'}">产品</van-tabbar-item>
            <van-tabbar-item icon="like-o" info="5" :to="{name:'showIndex'}">展示</van-tabbar-item>
            <van-tabbar-item icon="contact" info="20"  :to="{name:'userIndex'}">个人中心</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
    export default {
        computed: {
            // 如果用mapGetters方法会报错
            active:{
                get:function () {
                    return this.$store.state.active
                },set: function () {
                }
            }
        }

    }
</script>