<template>
<div id="app" class="container">
    <div class="paper">
        <new-item @add="add"></new-item>
        <list :items="filteredItems" @remove:item="remove" @update:item="update"></list>
        <div id="footer" v-if="items.length>0">
            <span id="leftOver">{{itemsLeft}} items left</span>
            <span id="filter">
            <a :class="{active:filter=='all'}" @click="setFilter('all')">All</a>
            <a :class="{active:filter=='packed'}" @click="setFilter('packed')">packed</a>
            <a :class="{active:filter=='unpacked'}" @click="setFilter('unpacked')">unpacked</a>
          </span>
            <span id="clear">total: {{total}}</span>
        </div>
    </div>

</div>
</template>

<script>
import newItem from './components/newItem';
import list from './components/list';
import './assets/styles.css';
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
            this.items.push(item);
        },
        remove(item) {
            this.items.splice(this.items.indexOf(item), 1);
        },
        update(item) {
            item.packed = !item.packed;
        },
        setFilter(filter) {
            this.filter = filter;
        }
    },
    computed: {
        total() {
            let total = 0;
            this.filteredItems.forEach(elm => {
                total += Number(elm.weight);
            })
            return total;
        },
        itemsLeft() {
            let count = 0;
            this.items.forEach(elm => {
                if (!elm.packed)
                    count++;
            });
            return count;
        },
        filteredItems() {
            if(this.filter == 'packed'){
                return this.items.filter(elm => elm.packed )
            } else if(this.filter == 'unpacked') {
                return this.items.filter(elm => !elm.packed )
            } else if(this.filter == 'all') {
                return this.items;
            }
        }
    }
}
</script>

<style>

</style>
