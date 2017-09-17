<style>
  ul {
    padding: 0;
    margin: 0;
  }
</style>

<template>
    <ul>
        <item v-for="i in items" :item="i"></item>
    </ul>
</template>

<script>
    import item from './item.vue'

    export default {
        props: ['items'],
        components:{
            item
        }
    }

</script>
