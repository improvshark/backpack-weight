<template>
    <div id="newItem" class="row">
        <i id="caret" class="fa fa-caret-down fa-fw cap"></i>
        <input id="item" class="primary" type="text" v-model="item.name" placeholder="Item" />
        <input id="weight" class="secondary" type="string" v-model="item.weight" placeholder="0.0 g" />
        <button id="add" class="cap" type="button" @click="add"><i class="fa fa-plus"></i></button>
    </div>
</template>

<script>
    import { unit } from 'mathjs'
    export default {
        data: function () {
            return {
                item: {
                    name: null,
                    weight: null,
                    defaultUnit: 'g',
                }
            }
        },
        methods: {
            add() {
                console.log('item', this.item)
                if (unit(this.item.weight).value == null )
                    return
                if (unit(this.item.weight).units.length < 1)
                    return

                this.$emit('add', {
                    name: this.item.name,
                    value: this.item.weight,
                });
                this.item = {
                    name: null,
                    weight: '',
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

    #newItem > input {
        height: 100%;
        font-size: 35px;
        outline-width: 0;
        grid-column-start: 2;
        width: 100%;
        border: 0;
    }
    #weight {
        /*flex-basis: 8rem;*/
        border-left: 2px solid #d9d9d9 !important;
    }
    #caret,
    #add {
        color: #d9d9d9;
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
    #item {
        /*flex-basis: 1rem;*/
        /*flex-grow: 1;*/
    }

    #add {
        /*flex-basis: 3rem;*/
    }
</style>
