<template>
    <div class="card">

        <!-- <DataTable v-model:filters="filters" v-model:selection="selectedRow" :value="ginfo" paginator :rows="10" dataKey="id" filterDisplay="menu"
            :globalFilterFields="['name', 'country.name', 'representative.name', 'balance', 'status']"> -->
        <DataTable v-model:filters="filters"  
                v-model:selection="selectedCustomer"
                :value="ginfo" 
                paginator 
                :rows="10" 
                dataKey="id" 
                filterDisplay="menu" 
                :globalFilterFields="[
                    'product',
                    'gid',
                    'xpos',
                    'ypos',
                ]"
            >
            <!-- {{ selected.length }} -->
            <template #header>
                <div class="flex justify-content-between space-x-3">
                    <Button type="button" icon="pi pi-filter-slash" label="Clear" outlined @click="clearFilter()" />
                    <span class="p-input-icon-left">
                        <i class="pi pi-search" />
                        <InputText v-model="filters['global'].value" placeholder="Keyword Search" />
                        
                        <!-- <InputText  placeholder="Keyword Search" /> -->
                    </span>
                </div>
            </template>
            <template #empty> No data found. </template>
            <Column selectionMode="multiple" headerStyle="width: 3rem"></Column>

            <Column field="product" header="Product" sortable style="min-width: 14rem">
                <template #body="{ data }">
                    {{ data.product }}
                </template>
                <template #filter="{ filterModel }">
                    <InputText v-model="filterModel.value" type="text" class="p-column-filter" placeholder="Search by product name" />
                </template>
            </Column>

            <Column field="gid" header="GlassID" sortable style="min-width: 14rem">
                <template #body="{ data }">
                    {{ data.gid }}
                </template>
                <template #filter="{ filterModel }">
                    <InputText v-model="filterModel.value" type="text" class="p-column-filter" placeholder="Search by glass ID" />
                </template>
            </Column>

            <Column field="xpos" header="Position X" sortable filterField="xpos" dataType="numeric" style="min-width: 10rem">
                <template #body="{ data }">
                    {{ data.xpos }}
                </template>
                <template #filter="{ filterModel }">
                    <InputNumber v-model="filterModel.value" />
                </template>
            </Column>

            <Column field="ypos" header="Position Y" sortable filterField="ypos" dataType="numeric" style="min-width: 10rem">
                <template #body="{ data }">
                    {{ data.ypos }}
                </template>
                <template #filter="{ filterModel }">
                    <InputNumber v-model="filterModel.value" />
                </template>
            </Column>

            <!-- <Column header="ADI檢出站別" sortable sortField="adirecord.inspectstops" filterField="adirecord.inspectstops" style="min-width: 14rem">
                <template #body="{ data }">
                    <div class="flex align-items-center gap-2">
                        <span>{{ data.adirecord.inspectstops }}</span>
                    </div>
                </template>
                <template #filter="{ filterModel }">
                    <InputText v-model="filterModel.value" type="text" class="p-column-filter" placeholder="Search by line" />
                </template>
            </Column>

            <Column header="ADI檢出第一站" sortable sortField="adirecord.firststop" filterField="adirecord.firststop" style="min-width: 14rem">
                <template #body="{ data }">
                    <div class="flex align-items-center gap-2">
                        <span>{{ data.adirecord.firststop }}</span>
                    </div>
                </template>
                <template #filter="{ filterModel }">
                    <InputText v-model="filterModel.value" type="text" class="p-column-filter" placeholder="Search by line" />
                </template>
            </Column>             -->
            
            <!-- <Column field="name" header="Name" sortable style="min-width: 14rem">
                <template #body="{ data }">
                    {{ data.name }}
                </template>
                <template #filter="{ filterModel }">
                    <InputText v-model="filterModel.value" type="text" class="p-column-filter" placeholder="Search by name" />
                </template>
            </Column>
            <Column header="Country" sortable sortField="country.name" filterField="country.name" style="min-width: 14rem">
                <template #body="{ data }">
                    <div class="flex align-items-center gap-2">
                        <img alt="flag" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="`flag flag-${data.country.code}`" style="width: 24px" />
                        <span>{{ data.country.name }}</span>
                    </div>
                </template>
                <template #filter="{ filterModel }">
                    <InputText v-model="filterModel.value" type="text" class="p-column-filter" placeholder="Search by country" />
                </template>
            </Column>
            <Column header="Agent" sortable sortField="representative.name" filterField="representative" :showFilterMatchModes="false" :filterMenuStyle="{ width: '14rem' }" style="min-width: 14rem">
                <template #body="{ data }">
                    <div class="flex align-items-center gap-2">
                        <img :alt="data.representative.name" :src="`https://primefaces.org/cdn/primevue/images/avatar/${data.representative.image}`" style="width: 32px" />
                        <span>{{ data.representative.name }}</span>
                    </div>
                </template>
                <template #filter="{ filterModel }">
                    <MultiSelect v-model="filterModel.value" :options="representatives" optionLabel="name" placeholder="Any" class="p-column-filter">
                        <template #option="slotProps">
                            <div class="flex align-items-center gap-2">
                                <img :alt="slotProps.option.name" :src="`https://primefaces.org/cdn/primevue/images/avatar/${slotProps.option.image}`" style="width: 32px" />
                                <span>{{ slotProps.option.name }}</span>
                            </div>
                        </template>
                    </MultiSelect>
                </template>
            </Column>
            <Column field="date" header="Date" sortable filterField="date" dataType="date" style="min-width: 10rem">
                <template #body="{ data }">
                    {{ formatDate(data.date) }}
                </template>
                <template #filter="{ filterModel }">
                    <Calendar v-model="filterModel.value" dateFormat="mm/dd/yy" placeholder="mm/dd/yyyy" mask="99/99/9999" />
                </template>
            </Column>
            <Column field="balance" header="Balance" sortable filterField="balance" dataType="numeric" style="min-width: 10rem">
                <template #body="{ data }">
                    {{ formatCurrency(data.balance) }}
                </template>
                <template #filter="{ filterModel }">
                    <InputNumber v-model="filterModel.value" mode="currency" currency="USD" locale="en-US" />
                </template>
            </Column>
            <Column header="Status" field="status" sortable :filterMenuStyle="{ width: '14rem' }" style="min-width: 12rem">
                <template #body="{ data }">
                    <Tag :value="data.status" :severity="getSeverity(data.status)" />
                </template>
                <template #filter="{ filterModel }">
                    <Dropdown v-model="filterModel.value" :options="statuses" placeholder="Select One" class="p-column-filter" showClear>
                        <template #option="slotProps">
                            <Tag :value="slotProps.option" :severity="getSeverity(slotProps.option)" />
                        </template>
                    </Dropdown>
                </template>
            </Column>
            <Column field="activity" header="Activity" sortable :showFilterMatchModes="false" style="min-width: 12rem">
                <template #body="{ data }">
                    <ProgressBar :value="data.activity" :showValue="false" style="height: 6px"></ProgressBar>
                </template>
                <template #filter="{ filterModel }">
                    <Slider v-model="filterModel.value" range class="m-3"></Slider>
                    <div class="flex align-items-center justify-content-between px-2">
                        <span>{{ filterModel.value ? filterModel.value[0] : 0 }}</span>
                        <span>{{ filterModel.value ? filterModel.value[1] : 100 }}</span>
                    </div>
                </template>
            </Column>
            <Column headerStyle="width: 5rem; text-align: center" bodyStyle="text-align: center; overflow: visible">
                <template #body>
                    <Button type="button" icon="pi pi-cog" rounded />
                </template>
            </Column> -->
        </DataTable>
    </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import { FilterMatchMode, FilterOperator } from 'primevue/api';
import { userowClickStore } from '@/stores/rowClick.js'


const selectedCustomer = ref();
const selected = ref()
const filters = ref();
const ginfo = ref();

// const loadRGBrowInfo = defineProps({
//     glassInfo:{
//         type:Object,
//     }
// });

// watch(() => loadRGBrowInfo.glassInfo, (newInfo,oldInfo) => {
//     console.log('newInfo', newInfo);
//     console.log(('oldInfo', oldInfo));
// });

const rowStore = userowClickStore();


watch(()=> (selected.value),(newdt,olddt) => {
    console.log(newdt);
});


watch(() => (rowStore.RowGinfo),(newData,oldData) =>{
    // console.log(newData);
    // console.log(oldData);
    if (newData != null){
        console.log(newData.url);
        ginfo.value = newData;
        // selectedRow.value = newData;
        console.log(ginfo.value);
        // axios.get(newData.url)
        //     .then(res =>{
        //         // console.log(res.data.ginfo);
        //         ginfo.value = res.data.ginfo;
        //     })
        //     .catch(error => {
        //         console.log('error',error);
        //     })
    } else {
        ginfo.value = [];
    }
});

onMounted(() => {
    // selected.value = rowStore.RowGinfo;
    // axios.get('/api/ginfo/')
    //     .then(res => {
    //         // console.log(res.data.results);
    //         ginfo.value = getGinfo(res.data.results);
    //         // console.log(ginfo);
    //     })
    //     .catch(error =>{
    //         console.log('error', error);
    //     })
});

const initFilters = () => {
    filters.value = {
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
        product: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
        gid: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
        xpos: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },
        ypos: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },
        // 'adirecord.inspectstops': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
        // 'adirecord.firststop': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
        // name: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
        // 'country.name': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
        // representative: { value: null, matchMode: FilterMatchMode.IN },
        // date: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.DATE_IS }] },
        // balance: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },
        // status: { operator: FilterOperator.OR, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },
        // activity: { value: [0, 100], matchMode: FilterMatchMode.BETWEEN },
        // verified: { value: null, matchMode: FilterMatchMode.EQUALS }
    };
};

initFilters();
// console.log(filters[global].value);
const formatDate = (value) => {
    return value.toLocaleDateString('en-US', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });
};
// const formatCurrency = (value) => {
//     return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
// };
const clearFilter = () => {
    initFilters();
};
const getCustomers = (data) => {
    return [...(data || [])].map((d) => {
        d.date = new Date(d.date);

        return d;
    });
};

const getGinfo = (data) => {
    return [...(data || [])].map((d) => {
        d.date = new Date(d.date);

        return d;
    });
};

const getSeverity = (status) => {
    switch (status) {
        case 'unqualified':
            return 'danger';

        case 'qualified':
            return 'success';

        case 'new':
            return 'info';

        case 'negotiation':
            return 'warning';

        case 'renewal':
            return null;
    }
};
</script>
