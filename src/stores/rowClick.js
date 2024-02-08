import { defineStore } from "pinia";
import axios from "axios";

export const userowClickStore = defineStore('rowClick', {
    state:() => {
        return {
            selectedRow: [],
            RowGinfo: [],
            selectedGinfoRows: [],
        }
    },
    getters:{

    },
    actions:{
        getRowData(data) {
            this.selectedRow = data
            // console.log(this.selectedRow);
        },
        async getGinfo() {
            await axios.get(this.selectedRow.url)
            .then(res =>{
                // console.log(res.data.ginfo);
                this.RowGinfo = res.data.ginfo;
                // console.log(this.RowGinfo);
            })
            .catch(error => {
                console.log('error',error);
            })
            
        },
        async deleteGinfo() {
            await axios.delete(this.selectedRow.url)
            .then(res=>{
                console.log('aa');
            })
            .catch(error => {
                console.log('error',error);
            })
        }
    },
})