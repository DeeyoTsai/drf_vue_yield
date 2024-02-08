<template>
    <DataTable :value="sales" :size="'small'" showGridlines tableStyle="min-width: 50rem">
        <ColumnGroup type="header">

            <Row>
                <Column header="GlassID" :rowspan="3" />
                <Column header="BM1(EMIN01)" :colspan="3" />
                <Column header="BM2(EMIN03)" :colspan="3" />
                <Column header="R1(ERIN01)" :colspan="3" />
                <Column header="R2(ERIN04)" :colspan="3" />
                <Column header="G1(ERIN02)" :colspan="3" />
                <Column header="G2(ERIN05)" :colspan="3" />
                <Column header="B1(ERIN03)" :colspan="3" />
                <Column header="B2(ERIN06)" :colspan="3" />
                <Column header="AOI(ESIN02)" :colspan="3" />

            </Row>
            <Row>
                <Column header="Y" sortable field="lastYearSale"/>
                <Column header="N" sortable field="thisYearSale"/>
                <Column header="ALL" sortable field="lastYearProfit"/>
                <Column header="Y" sortable field="lastYearSale"/>
                <Column header="N" sortable field="thisYearSale"/>
                <Column header="ALL" sortable field="lastYearProfit"/>
                <Column header="Y" sortable field="lastYearSale"/>
                <Column header="N" sortable field="thisYearSale"/>
                <Column header="ALL" sortable field="lastYearProfit"/>
                <Column header="Y" sortable field="lastYearSale"/>
                <Column header="N" sortable field="thisYearSale"/>
                <Column header="ALL" sortable field="lastYearProfit"/>
                <Column header="Y" sortable field="lastYearSale"/>
                <Column header="N" sortable field="thisYearSale"/>
                <Column header="ALL" sortable field="lastYearProfit"/>
                <Column header="Y" sortable field="lastYearSale"/>
                <Column header="N" sortable field="thisYearSale"/>
                <Column header="ALL" sortable field="lastYearProfit"/>
                <Column header="Y" sortable field="lastYearSale"/>
                <Column header="N" sortable field="thisYearSale"/>
                <Column header="ALL" sortable field="lastYearProfit"/>
                <Column header="Y" sortable field="lastYearSale"/>
                <Column header="N" sortable field="thisYearSale"/>
                <Column header="ALL" sortable field="lastYearProfit"/>
                <Column header="Y" sortable field="lastYearSale"/>
                <Column header="N" sortable field="thisYearSale"/>
                <Column header="ALL" sortable field="lastYearProfit"/>

            </Row>
        </ColumnGroup>
        <Column field="product" />
        <Column field="lastYearSale">
            <template #body="slotProps">
                {{slotProps.data.lastYearSale}}
            </template>
        </Column>
        <Column field="thisYearSale">
            <template #body="slotProps">
                {{slotProps.data.thisYearSale}}
            </template>
        </Column>
        <Column field="lastYearProfit">
            <template #body="slotProps">
                {{slotProps.data.lastYearProfit}}
            </template>
        </Column>
        <Column field="lastYearSale">
            <template #body="slotProps">
                {{slotProps.data.lastYearSale}}
            </template>
        </Column>
        <Column field="thisYearSale">
            <template #body="slotProps">
                {{slotProps.data.thisYearSale}}
            </template>
        </Column>
        <Column field="lastYearProfit">
            <template #body="slotProps">
                {{slotProps.data.lastYearProfit}}
            </template>
        </Column>
        <Column field="lastYearSale">
            <template #body="slotProps">
                {{slotProps.data.lastYearSale}}
            </template>
        </Column>
        <Column field="thisYearSale">
            <template #body="slotProps">
                {{slotProps.data.thisYearSale}}
            </template>
        </Column>
        <Column field="lastYearProfit">
            <template #body="slotProps">
                {{slotProps.data.lastYearProfit}}
            </template>
        </Column>
        <!-- <Column field="thisYearProfit">
            <template #body="slotProps">
                {{formatCurrency(slotProps.data.thisYearProfit)}}
            </template>
        </Column> -->
        <!-- <ColumnGroup type="footer">
            <Row>
                <Column footer="Totals:" :colspan="3" footerStyle="text-align:right"/>
                <Column :footer="lastYearTotal" />
                <Column :footer="thisYearTotal" />
            </Row>
        </ColumnGroup> -->
    </DataTable>
</template>

<script setup>
import { ref, computed } from 'vue';


const sales = ref([
    {product: 'Bamboo Watch', lastYearSale: 51, thisYearSale: 40, lastYearProfit: 54406, lastYearProfit: 43342, thisYearSale: 40, lastYearProfit: 54406, lastYearProfit: 43342, thisYearSale: 40, lastYearProfit: 54406}


]);

const formatCurrency = (value) => {
    return value.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
};

const lastYearTotal = computed(() => {
    let total = 0;
    for(let sale of sales.value) {
        total += sale.lastYearProfit;
    }

    return formatCurrency(total);
});

const thisYearTotal = computed(() => {
    let total = 0;
    for(let sale of sales.value) {
        total += sale.thisYearProfit;
    }

    return formatCurrency(total);
});

</script>


<!-- <script setup>
// props變數，接受來自父組件的資料
const props = defineProps({
    data:{
        type:Promise,
        require:true
    }
})
console.log(props.value);
</script> -->