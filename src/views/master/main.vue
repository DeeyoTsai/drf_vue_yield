!<template>
    <div class="w-full h-full flex">
        <div class=" h-dvh">
            <sidebar :dataOpenSideBar="openSidebar"/>
        </div>

        <div class=" w-full h-dvh bg-gray-100">
            <div class=" h-[50px] bg-gray-100 flex items-center shadow-sm px-[20px] w-full py-[10px] z-10 border-b">
                <headerTop :dataOpenSideBar="openSidebar" :clickHambuger="toggleSidebar" />
            </div>     
        
            <div class="h-[calc(dvh-50px)] bg-gray-50 p-[10px]">
                <div class="border border-gray-300 rounded-md p-[20px] h-full">
                    <content/>
                </div>
            </div>
        </div>
    </div>


</template>

<script>

import headerTop from './../../components/header.vue'
import sidebar from './../../components/sidebar.vue'
import content from './../../components/content.vue'

export default {
    components:{
        headerTop, sidebar, content
    },
    data() {
        return{
            openSidebar:true
        }
    },
    methods:{
        toggleSidebar(){
            this.openSidebar = !this.openSidebar
        },
    },  
}
</script>

<style>

</style>