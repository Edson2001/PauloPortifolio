<script setup lang="ts">

import Menu from './components/Menu.vue'
import RouteSite from './routes/Route.vue'

import {pageStore} from "./store"

const store = pageStore()

const changePage  =  (next: string)=>{
  store.$patch({page: next}) 
}

</script>

<template>
 <div class="container">
  <Menu @changePage="changePage" />
  <RouteSite />
 </div>
</template>
