<template>
    <div>
        <van-tabs v-model="active">
            <van-tab title="测试内容">
                <van-list
                        v-model="loading"
                        :finished="finished"
                        @load="onLoad">
                    <van-cell
                            v-for="item in list"
                            :key="item"
                            :title="item"/>
                </van-list>
            </van-tab>
            <van-tab title="标签 2">内容 2</van-tab>
            <van-tab title="标签 3">内容 3</van-tab>
            <van-tab title="标签 4">内容 4</van-tab>
        </van-tabs>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                active:0,
                list: [],
                loading: false,
                finished: false
            };
        },
        activated(){
            this.$store.dispatch('setHeader','展示');
            this.$store.dispatch('setActive',2);
        },
        methods: {
            onLoad() {
                // 异步更新数据
                setTimeout(() => {
                    for (let i = 0; i < 10; i++) {
                        this.list.push(this.list.length + 1);
                    }
                    // 加载状态结束
                    this.loading = false;

                    // 数据全部加载完成
                    if (this.list.length >= 40) {
                        this.finished = true;
                    }
                }, 1000);
            }
        }
    }
</script>