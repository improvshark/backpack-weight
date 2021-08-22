<template>
<div id="app" class="container">
    <div class="paper">
        <new-item @add="add"></new-item>
        <list :items="filteredItems" @remove:item="remove" @update:item="update"></list>
        <div id="footer" v-if="count>0">
            <span id="leftOver">{{countUnpacked}} items left</span>
            <span id="filter">
            <a :class="{active:filter=='all'}" @click="setFilter('all')">All</a>
            <a :class="{active:filter=='packed'}" @click="setFilter('packed')">packed</a>
            <a :class="{active:filter=='unpacked'}" @click="setFilter('unpacked')">unpacked</a>
          </span>
            <span id="clear">total: {{totalWeight}}</span>
        </div>
    </div>

</div>
</template>

<script>
import { mapGetters } from 'vuex'

import newItem from './components/newItem';
import list from './components/list';
import '../public/styles.css';
export default {
    name: 'app',
    components: {
        newItem,
        list
    },
    data() {
        return {
            items: [],
            displayedItems: [],
            inputName: null,
            filter: 'all'
        }
    },
    methods: {
        add(item) {
            this.$store.commit('push', {
                key: item.name,
                value: item,
            })
        },
        remove(item) {
            this.$store.commit('remove', {key: item.name})
        },
        update(item) {
            this.$store.commit('set', {key: item.name, packed: !item.packed})
        },
        setFilter(filter) {
            this.filter = filter;
        }
    },
    computed: {
        ...mapGetters([
            'getListPacked',
            'getListUnPacked',
            'getList',
            'countUnpacked',
            'count',
            'totalWeight',
        ]),
        filteredItems() {
            if(this.filter == 'packed'){
                return this.getListPacked
            } else if(this.filter == 'unpacked') {
                return this.getListUnPacked
            } else if(this.filter == 'all') {
                return this.getList
            }
        }
    }
}
</script>

<style>

</style>
