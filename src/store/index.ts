import { defineStore } from "pinia"
import {ref} from "vue"

export const pageStore =  defineStore('pageStore', ()=>{
    const page = ref('home')

    return {page}
})