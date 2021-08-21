<template>
<div id="newItem" class="row">
    <i  id="caret" class="fa fa-caret-down fa-fw cap" ></i>
    <input id="item" class="primary" type="text" v-model="item.name" placeholder="Item">
    <input id="weight" class="secondary" type="number" v-model="item.weight" placeholder="0.0 lbs">
    <button id="add" class="cap" type="button" @click="add"><i class="fa fa-plus"></i></button>
</div>
</template>

<script>
export default {
    data: function() {
        return {
            item:{
                name: null,
                weight: null,
                packed: false,
                unit: 'lbs'
            }
        }
    },
    methods: {
        add() {
            if(this.item.name == null)
                return;
            if(typeof(this.item.weight) == null)
                this.item.weight = 0;
            this.$emit('add', this.item);
            this.item = {
                name: null,
                weight: null,
                packed: false,
            };
        }
    }
}
</script>

<style lang="css">
#newItem {
    /*display: flex;*/
    flex-flow: row nowrap;
    font-size: 35px;
}

#newItem>input {
    height: 100%;
    font-size: 35px;
    outline-width: 0;
    grid-column-start: 2;
    width: 100%;
    border: 0;
}
#weight {
    /*flex-basis: 8rem;*/
    border-left: 2px solid #D9D9D9 !important;
}
#caret,
#add {
    color: #D9D9D9;
    /*flex-basis: 3rem;*/
    background-color: white;
    border-bottom: 0;
    border-top: 0;
    border-right: 0;
}
#weight {

}
#weight input {
}
#item{
    /*flex-basis: 1rem;*/
    /*flex-grow: 1;*/
}

#add {
    /*flex-basis: 3rem;*/
}
</style>
