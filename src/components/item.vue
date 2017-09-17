<template>
<li class="row">
    <span v-if="item.packed" class="fa-stack completed checkbox cap">
    <i class="fa fa-circle-thin fa-stack-2x"></i>
    <i class="fa fa-check fa-stack-1x"></i>
  </span>
    <span v-else class="fa-stack checkbox cap">
    <i class="fa fa-circle-thin fa-stack-2x"></i>
  </span>
    <p :class="{completed:item.packed}" @click="toggle" class="name primary">{{item.name}}</p>
    <p class="weight secondary" v-if="item.weight>0">{{item.weight}} <span>{{unit}}</span></p>
    <span class="delete cap"  @mouseover="deleteActive = true" @mouseleave="deleteActive = false">
        <i v-if="deleteActive" @click="deleteItem" class="fa fa-times"></i>
        <!-- <i v-else class="fa fa-times placeholder"></i> -->
    </span>
</li>
</template>

<script>
export default {
    props: ['item'],
    data(){
        return {
            deleteActive: false,
            unit: 'lbs'
        }
    },
    methods: {
        toggle: function() {
            this.$parent.$emit('update:item', this.item)
        },
        deleteItem: function() {
            this.$parent.$emit('remove:item', this.item);
        }
    }
}
</script>

<style>

li {
    list-style-type: none;
    border-bottom: .5px solid rgba(0, 0, 0, 0.080);
    padding: 10px;
}

li:first-child {
    border-top: 2px solid rgba(0, 0, 0, 0.10);
}

.checkbox {
    color: #D9D9D9;
    text-decoration: line-through;
}

.checkbox.completed {
    color: #76C8B3;
    text-decoration: line-through;
}

.name {
    font-size: 1.5rem;
    /*font-size: 1rem;*/
}

.name.completed {
    color: #D9D9D9;
    text-decoration: line-through;
}

.placeholder{
    color: #D9D9D9;
}

.weight {
    font-size: 1.5rem;
    /*font-size: 1.3rem;*/
}

.delete {
    padding-top: .2rem;
    color: red;
    text-align: center;
    font-size: 20px;
}

/*.hover-hide {
    display: none;
}

.hover-hide:hover {
    display: block;
}*/
</style>
