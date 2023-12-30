<template>
    <div><h1> This is daily yield page</h1></div>
    <div class="layout-main-container">
        <!-- <div class="grid grid-rows-4 gap-1 "> -->
        <div class="flex mb-2">
            <div class="w-1/2 px-1">

                <div class="mb-1 border border-gray-600">
                    <h5 class="text-xl font-bold bg-cyan-400">單日良率晨報</h5>
                    <DataTable :value="products" showGridlines :size="'small'" tableStyle="min-width: 10rem; " >
                        <Column field="code" header="Code"></Column>
                        <Column field="name" header="Name"></Column>
                        <Column field="category" header="Category"></Column>
                        <Column field="quantity" header="Quantity"></Column>
                    </DataTable>
                </div>
            </div>
            <div class="w-1/2 px-1">
                <div class="mb-1 border border-gray-600">
                    <h5 class="text-xl font-bold bg-cyan-400">RGB良率日報</h5>
                    <DataTable :value="products" showGridlines :size="'small'" tableStyle="min-width: 10rem border">
                        <Column field="code" header="Code"></Column>
                        <Column field="name" header="Name"></Column>
                        <Column field="category" header="Category"></Column>
                        <Column field="quantity" header="Quantity"></Column>
                    </DataTable>
                </div>
            </div>

        </div>
        <div class="border">
            
            <h2>233123</h2>
            <div class="flex space-x-1">
                <div class=" w-2/3">
                    
                    <ScatterChart/>
                </div>
                <div class="w-1/3 h-full">
                    
                        <DataTable :value="products" showGridlines tableStyle="min-width: 50rem" class="border">
                            <Column field="code" header="Code"></Column>
                            <Column field="name" header="Name"></Column>
                            <Column field="category" header="Category"></Column>
                            <Column field="quantity" header="Quantity"></Column>
                        </DataTable>
                    
                </div>
            </div>
            <!-- <img  class=" h-full max-w-full" src="D:\Javascript\django_vue_yield\chart_img\2023-11-27\B-Dead code\2023-11-27_B-Dead code.png" alt=""> -->
        </div>
        <div>
            <!-- <BarChart/> -->
            <!-- <AreaChart/> -->

        </div>
        <!-- <div class="small">
            <line-chart :chart-data="datacollection"></line-chart>
            <button @click="fillData()">Randomize</button>
        </div> -->
            <!-- <div class="border"><p>zxczxc</p></div>
            <div class="border"><p>zdsdqwe</p></div> -->
        
        <!-- </div> -->
    </div>

</template>

<script>
    import BarChart from '../components/BarChart.vue'
    import ScatterChart from '../components/ScatterChart.vue'

    export default {
        components:{
            BarChart,
            ScatterChart
        },
        data() {
            return {
                products:null,

            };
        },
        mounted(){
            this.products = this.setData();
            console.log(this.products);
        },
        methods: {
            setData() {
                return [
                    {
                        id: '1000',
                        code: 'f230fh0g3',
                        name: 'Bamboo Watch',
                        description: 'Product Description',
                        image: 'bamboo-watch.jpg',
                        price: 65,
                        category: 'Accessories',
                        quantity: 24,
                        inventoryStatus: 'INSTOCK',
                        rating: 5
                    },
                    {
                        id: '1001',
                        code: 'nvklal433',
                        name: 'Black Watch',
                        description: 'Product Description',
                        image: 'black-watch.jpg',
                        price: 72,
                        category: 'Accessories',
                        quantity: 61,
                        inventoryStatus: 'INSTOCK',
                        rating: 4
                    },
                ]
            },
            getData(){
            
            },          
        },

    }

</script>

<style scoped>

</style>