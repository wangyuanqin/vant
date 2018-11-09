<template>
    <div>
        <van-swipe :autoplay="3000">
            <van-swipe-item v-for="(image, index) in images" :key="index">
                <img class="swiperImg" :src="image"/>
            </van-swipe-item>
        </van-swipe>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                images: [
                    'https://img.yzcdn.cn/2.jpg',
                    'https://img.yzcdn.cn/2.jpg'
                ]
            }
        }
    }
</script>