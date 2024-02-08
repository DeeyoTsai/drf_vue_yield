import { defineStore } from "pinia";
import axios from "axios";

const STATES = {
    INIT:0,
    DONE:1,
    WIP:2,
    ERROR:3
}
const today = new Date().toISOString().slice(0, 10);
// which_date = today.toISOString().split('T')[0]
export const useYieldStore = defineStore('yield',  {
    // ******composition style******
    // const storeData = ref([]);
    // async function getTopFive(url) {
    //     try {
    //         const data = await axios.get(url)
    //         storeData.value = data.data 
    //     } catch (error) {
    //         console.log(error);
    //     }

    // }
    // return {storeData, getTopFive}

    // ******options API******
    state:() => ({
        RGBtopfive:{
            dt:[],
            state:STATES.INIT
        },
        ALLtopfive:{
            dt:[],
            state:STATES.INIT
        },
    }),

    actions:{
        initStore() {
            // this.getData()
        },
        async getTopfive(url, which_date=today) {
            if (url.includes('rgb')) {
                this.RGBtopfive.state = STATES.WIP
                await axios.get(url,{
                        params:{
                            day:'2023-12-26'// which_date替換2023-11-28
                        }
                    })
                    .then(response => {
                        this.RGBtopfive.dt = response.data
                        // console.log(response.data);
                        this.RGBtopfive.state = STATES.DONE
                    })
                    .catch(error => {
                        console.log('error', error);
                    })                
            } else {
                this.ALLtopfive.state = STATES.WIP
                await axios.get(url,{
                    params:{
                        day:'2023-12-26'// which_date替換2023-11-28
                    }
                })
                .then(response => {
                    this.ALLtopfive.dt = response.data
                    // console.log(response.data);
                    this.ALLtopfive.state = STATES.DONE
                })
                .catch(error => {
                    console.log('error', error);
                })                      
            }

        },
        // async getTopfive(url) {
        //     try {
        //         const response = await fetch(url);
        //         const jokes = await response.data;
        //         console.log(jokes);
        //     } catch (error) {
        //         console.error(error);
        //     }
        // }

    },

})