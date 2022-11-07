<script setup lang="ts">

import Menu from './components/Menu.vue'
import RouteSite from './routes/Route.vue';
import {ref} from "vue"
import {pageStore} from "./store"
import {storeToRefs} from "pinia"
const Page = ref('home')
const store = pageStore()
const {page} = storeToRefs(pageStore)
console.log(page)
const changePage  =  (page: string)=>{
  Page.value = page
  
}

</script>

<template>
 <div class="container">
  <Menu @changePage="changePage" />
  <RouteSite :route="Page" />
 </div>
</template>
