<template>
    <div>
        <h3>Component Stocks</h3>
        <app-stock v-for="stock in stocks" :stock="stock"></app-stock>
    </div>
</template>

<script>
    import Stock from "./Stock";

    export default {
        name: "Stocks",
        components:{
            appStock:Stock
        },
        computed:{
            stocks(){
                return this.$store.getters.stocks
            }
        }
    }
</script>

<style scoped>

</style>