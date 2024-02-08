<template>
    <div class="px-5 py-2 flex items-center justify-between mb-2 ">
        <div class="text-4xl  justify-center pl-5">
            <h1> MC5EP2 Daily Yield Report</h1>
        </div>
        <div class="flex items-center space-x-2">
            <!-- <label for="buttondisplay" class="font-bold block mb-2"> Button Display </label> -->
            <!-- <p class=" text-xl">日期:</p> -->
            <span class="p-float-label">
                <Calendar v-model="date" inputid="choose_date" showIcon class=" text-lg"/>
                <label for="choose_date" >請選擇日期...</label>
            </span>
            <Button type="submit" label="確認" class=" text-xl"/>
        </div>  
    </div>
    <div class="layout-main-container h-full">
        <!-- <div class="grid grid-rows-4 gap-1 "> -->
        <div class="h-50 flex py-1">
            <div class="w-1/2 ">
                <div class="mb-1 border border-gray-600">
                    <h5 class="text-xl font-bold bg-cyan-400">當日前五大(update:{{ updated_at.value }})</h5>
                    <!-- <h5 v-else="allTopFive.length > 0" class="text-xl font-bold bg-cyan-400">當日前五大(No Data)</h5> -->
                    <DataTable :value="allTopFive" showGridlines :size="'small'" tableStyle="min-width: 10rem; " >
                        <Column field="stop" header="站別"></Column>
                        <Column field="dfcode" header="Defect code"></Column>
                        <Column field="quantity" header="Qty"></Column>
                        <Column field="ratio" header="全良佔有率"></Column>
                    </DataTable>
                </div>
            </div>
            <div class="w-1/2 pl-2">
                <div class="mb-1 border border-gray-600">
                    <h5 class="text-xl font-bold bg-cyan-400">RGB良率日報(update:{{ updated_at.value }})</h5>
                    <DataTable :value="tf" showGridlines :size="'small'" tableStyle="min-width: 10rem border">
                        <Column field="dfcode" header="Defect code"></Column>
                        <Column field="quantity" header="Qty"></Column>
                        <Column field="ratio" header="全良佔有率"></Column>
                    </DataTable>
                </div>
            </div>
        </div>
        <div class="px-3 py-3 mb-2 border rounded-lg">
            <div class="flex space-x-1">
                <div class=" w-1/2">
                    <p> Defect Map </p>
                    <ScatterChart/>
                </div>
                <div class="w-1/2">
                    <div class="mb-2">
                        <DataTable :value="products" showGridlines :size="'small'" tableStyle="min-width: 5rem" class="border">
                            <Column field="code" header="Code"></Column>
                            <Column field="name" header="Name"></Column>
                            <Column field="category" header="Category"></Column>
                            <Column field="quantity" header="Quantity"></Column>
                        </DataTable>
                    </div>
                <div>
                    <GalleryImg/>
                </div>    
                </div>
            </div>
        </div>

        <div class=" px-3 py-3 w-full h-full mb-2 border rounded-lg">
            <!-- 顯示圖片 -->
            <GlassTable/>
        </div>
        <div class="px-3 py-3 mb-2 border rounded-lg">
            <!-- ADI各站檢出點數，同AOI Defect Analysis  -->
            <div class="px-1 ">
                <AdiHistory :data="products"/>
            </div>                  
        </div>        

        <div class="w-full px-1 py-2 flex justify-center border rounded-lg">
            <div class="px-1 w-1/3 ">
                <TrendChartImg/>
            </div>
            
            <div class=" px-1 w-1/3">
                <h5 class="text-xl font-bold bg-cyan-400">Glass Rework History</h5>
                <DataTable :value="products" showGridlines :size="'small'" tableStyle="min-width: 10rem; " >
                    <Column field="sht_id" header="SHT_ID"></Column>
                    <Column field="bm1" header="BM1"></Column>
                    <Column field="bm2" header="BM1"></Column>
                    <Column field="r1" header="R1"></Column>
                    <Column field="r2" header="R2"></Column>
                    <Column field="g1" header="G1"></Column>
                    <Column field="g2" header="G2"></Column>
                    <Column field="b1" header="B1"></Column>
                    <Column field="b2" header="B2"></Column>
                </DataTable>
            </div>
            <div class=" px-1 w-1/3">
                <h5 class="text-xl font-bold bg-cyan-400">Oven Slot</h5>
                <DataTable :value="products" showGridlines :size="'small'" tableStyle="min-width: 10rem; " >
                    <Column field="event_datetime" header="DATETIME" class=" text-xs"></Column>
                    <Column field="eqp_id" header="EQPT_ID"></Column>
                    <Column field="sht_id" header="SHT_ID"></Column>
                    <Column field="sgr_id" header="SGR_ID"></Column>
                    <Column field="cure_pos" header="CURE_POSITION"></Column>
                </DataTable>
            </div>
        </div>
        <div class=" bg-indigo-500 border w-10">
            <button @click="getData">test</button>
        </div>
    </div>

</template>

<script setup>
    import ScatterChart from '../components/ScatterChart.vue'
    import GlassTable from '@/components/GlassTable.vue';
    import GalleryImg from '@/components/GalleryImg.vue';
    import TrendChartImg from '@/components/TrendChartImg.vue';
    import AdiHistory from '@/components/AdiHistory.vue';
    import { useYieldStore } from '@/stores/yield';
    import { onBeforeMount,onMounted,onActivated,reactive,ref,toRaw } from 'vue';
    import { storeToRefs } from 'pinia';
    import sidebar from '@/components/sidebar.vue';

    const userStore = useYieldStore()
    const products = ref([]);
    const date = ref('');
    const updated_at = ref('');
    const tf = ref([]);
    const allTopFive = ref([]);
    const { RGBtopfive, ALLtopfive } = storeToRefs(userStore);
    const { getTopfive } = userStore;
    const RGBtopfiveUrl = '/api/rgbtopfive/';
    const ALLtopfiveUrl = '/api/topFive/';



    getTopfive(RGBtopfiveUrl);
    getTopfive(ALLtopfiveUrl);
    // tf.value = toRaw(RGBtopfive.value).dt.results;
    // allTopFive.value = toRaw(ALLtopfive.value).dt.results;
    // onBeforeMount(()=>{
    //     getTopfive(RGBtopfiveUrl);
    //     getTopfive(ALLtopfiveUrl);
    // })
    onMounted(()=>{
        // userStore.getTopFive();
        // async function getTopfive(RGBtopfiveUrl){
        tf.value = toRaw(RGBtopfive.value).dt.results;
        // };
        
        // async function getTopfive(ALLtopfiveUrl){
        allTopFive.value = toRaw(ALLtopfive.value).dt.results;
        // };

        // getTopfive(ALLtopfiveUrl);
        products.value = setData();

        // console.log(products.value);
        // console.log(toRaw(topfive.value).dt);
        
    })    
    
    function getData() {
        console.log("test btn");
        
    };
    function setData() {
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
                    rating: 5,
                    sht_id:'AXX40510431',
                    event_datetime:'2024/1/4 上午 02:55:50'

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
    };


</script>

<style scoped>

</style>