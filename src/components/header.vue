<template>
            <!-- Hambuger menu -->
            <div class="cursor-pointer w-[30px] mt-2" @click="clickHambuger">
                <i class="pi pi-bars" style="font-size: 1.6rem"></i>
            </div>
            <!-- Search bar -->
            <div class="w-[calc(100%-30px)] flex justify-between space-x-1">
                <div class="w-[calc(100%-200px)] flex justify-center ">
                    <!-- Search bar -->
                    <form class="flex items-center w-[500px]">
                    <label for="voice-search" class="sr-only">Search</label>
                    <div class="relative w-full">
                        <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" class="w-6 h-auto text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path>
                        </svg>
                        </div>
                        <input type="text" id="voice-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." required>
                        <router-link to="/" class="flex absolute inset-y-0 right-0 items-center pr-3">
                        </router-link>
                    </div>
                    </form>
                </div>
                <!-- User login -->
                <div class="w-[200px]">
                    <div class="flex items-center justify-center " @click="toggleDrop">
                        <!-- <img class="w-10 h-10 rounded-full border-2 border-gray-50" src="https://img.icons8.com/color/100/name--v1.png" alt="name--v1"/> -->
                        <!-- <img class="w-10 h-10 rounded-full border-2 border-gray-50" src="https://yt3.ggpht.com/hqsxh-Vnbw9OK0_X4DAWh6RkmEUVnL-82SRCyh-IKr9fIXR8zhUCRdBEwgWWL_14q_L8Piod=s108-c-k-c0x00ffffff-no-rj" alt=""> -->
                        <Avatar icon="pi pi-user" class="mr-2 ml-2" style="background-color: #2196f3; color: #ffffff" shape="circle" />
                        <div class="font-semibold dark:text-white text-left">
                            <div>1151159</div>
                            <div class="text-xs text-gray-500 dark:text-gray-400 text-center">Admin</div>
                            
                        </div>
                    </div>
                    <!-- Drop down -->
                    <div v-show="showDropDown" class="absolute right-[10px] z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                        <div class="py-1 text-left" role="none">
                            <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">Account settings</a>
                            <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">Support</a>
                            <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">License</a>
                            <form method="POST" action="#" role="none">
                            <button type="submit" class="text-gray-700 block w-full px-4 py-2 text-left text-sm" role="menuitem" tabindex="-1" id="menu-item-3">Sign out</button>
                            </form>
                        </div>
                    </div>
                    
                </div>
                </div>                

</template>

<script>
    export default {
        props:{
            dataOpenSideBar:Boolean,
            clickHambuger: Function
        },
        data() {
            return {
                showDropDown:false,

            }

        },
        methods:{
            toggleDrop() {
                this.showDropDown = ! this.showDropDown
            }
        }

    }
</script>