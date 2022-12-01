<script lang="ts" setup>
import {ref, watch} from "vue"
import { Sobre, Blog, Home, Portifolio, Techs, Experience} from "./"

import {pageStore} from "../store"

const store = pageStore()

const routeComponent = ref(Home)

watch(()=>store.page, ()=>{
  console.log('mudou')
  switch(store.page){
    case 'home':
      routeComponent.value = Home
    break
    case 'sobre':
      routeComponent.value = Sobre
    break
    case 'portifolio':
      routeComponent.value = Portifolio
    break
    case 'techs':
      routeComponent.value = Techs
    break
    case 'experience':
      routeComponent.value = Experience
    break
    case 'blog':
      routeComponent.value = Blog
    break
    default:
      routeComponent.value = Home
  }
})

</script>

<template>
  <component :is="routeComponent" class="animate__animated  animate__backInRight" />
</template>