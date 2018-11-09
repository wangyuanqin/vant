<template>
    <div>porudct</div>
</template>

<script>
    export default {
        activated(){
            this.$store.dispatch('setHeader','产品');
            this.$store.dispatch('setActive',1);
        }
    }
</script>