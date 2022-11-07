<script lang="ts" setup>
import {ref} from "vue"
import { Sobre, Blog, Home, Portifolio, Techs, Experience} from "./"
const props = defineProps([
    'route'
])
console.log(props.route)
const Page = ref(props.route)
</script>
<template>

  <Sobre   v-if="Page === 'sobre'" />  
  <Home    v-if="Page === 'home'" /> 
  <Portifolio  v-if="Page === 'portifolio'" />
  <Techs  v-if="Page === 'techs'" /> 
  <Experience v-if="Page === 'experience'" />
  <Blog v-if="Page === 'blog'" />
  
</template>