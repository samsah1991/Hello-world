<template>
    <div class="col-sm-4 col-md-4">
        <div class="panel panel-success">
            <div class="panel-heading">
                <p >Name :{{stock.name}} -----------------> Price :{{stock.price}}</p>
            </div>
            <div class="panel-body">
                <input type="number" class="pull-left col-sm-8 col-md-8" v-model="quantity" >
                <button class="btn btn-success" @click="buyStocks" :disabled="quantity <= 0">Buy</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {

        data(){
            return{
                quantity:0
            }
        },
        props:[
            'stock'
        ],
        methods:{
            buyStocks(){
                const order = {
                    stockId: this.stock.id,
                    stockPrice: this.stock.price,
                    stackQuantity: this.quantity
                }
                console.log(order)
            },

        },
    }
</script>

<style scoped>

</style>