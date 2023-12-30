<template>
    <!-- Side bar -->
    <div class=" w-[400px] h-full bg-gray-200 text-white" id="side-bar" :class="dataOpenSideBar == true ? 'side-bar-visible' : 'side-bar-close'">
        <div class="h-[50px] bg-gray-900">
            <div class="px-[20px] py-[10px]">
                <div v-if="dataOpenSideBar"  class="font-bold text-2xl">
                    <h3>MC5EP2</h3> 
                </div>
                <div v-else class="font-bold text-2xl">
                    <h3>P2</h3> 
                </div>
                <!-- <h3 v-show="dataOpenSideBar" class="font-bold text-2xl">MC5EP2</h3> -->
            </div>
        </div>
        <div class="h-[calc(100vh-50px)] bg-gray-800 py-[20px]">
            <div class=" flex flex-col justify-between h-full px-[20px] space-y-[10px]">
                <div class=" flex flex-col justify-between space-y-[10px]">
                    <router-link to="/home" class="inline-flex relative items-center py-[10px] px-[10px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-200 hover:text-gray-800  transition duration-400 ease-in-out">
                        <span class="pi pi-home mr-2" style="font-size: 1.5rem" v-tooltip.right="'單日良率晨報'"></span>
                        <span v-show="dataOpenSideBar" class=" text-lg mt-1">單日良率晨報</span>
                    </router-link>
                    
                    <router-link to="/lineDefectView" class="inline-flex relative items-center py-[10px] px-[10px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-200 hover:text-gray-800  transition duration-400 ease-in-out">
                        <span class="pi pi-chart-bar mr-2" style="font-size: 1.5rem" v-tooltip.right="'各LINE點數'"></span>
                        <span v-show="dataOpenSideBar" class=" text-lg mt-1">各LINE點數</span>
                    </router-link>

                    <router-link to="/hyperLinkView" class="inline-flex relative items-center py-[10px] px-[10px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-200 hover:text-gray-800  transition duration-400 ease-in-out">
                        <span class="pi pi-link mr-2" style="font-size: 1.5rem" v-tooltip.right="'超連結'"></span>
                        <span v-show="dataOpenSideBar" class=" text-lg mt-1 text-center">超連結</span>
                    </router-link>
                    
                    <router-link to="/memberView" class="inline-flex relative items-center py-[10px] px-[10px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-200 hover:text-gray-800  transition duration-400 ease-in-out">
                        <span class="pi pi-id-card mr-2" style="font-size: 1.5rem" v-tooltip.right="'人員名單'"></span>
                        <span v-show="dataOpenSideBar" class=" text-lg mt-1 text-center">人員名單</span>
                    </router-link>
                </div>
                <div class="h-[50px] border-t-2">
                    <div>
                        <router-link to="/helpView" class="flex relative items-center py-[10px] px-[10px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-300 hover:text-gray-800  transition duration-400 ease-in-out">
                            <span class="pi pi-info-circle mr-2" style="font-size: 1.5rem" v-tooltip.right="'Help'"></span>
                            <span v-show="dataOpenSideBar" class=" text-lg mt-1 text-center mb-1">Help</span>
                        </router-link>
                    </div>
                </div>
            </div>

        </div>
    </div>
        
    
</template>

<script>
    export default {
        props:{
            dataOpenSideBar:Boolean
        },
    }
</script>
<style>
#side-bar {
  overflow: hidden;
  transition: 300ms;
}

.side-bar-visible {
  width: 250px !important;
}

.side-bar-close {
  width: 90px !important;
}
</style>