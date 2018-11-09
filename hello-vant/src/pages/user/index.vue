<template>
    <div>this is user index</div>
</template>

<script>
    export default {

        activated(){
            this.$store.dispatch('setHeader','个人中心')
            this.$store.dispatch('setActive',3)
        },
    }
</script>