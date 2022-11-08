<script lang="ts" setup>

import { Sobre, Blog, Home, Portifolio, Techs, Experience} from "./"

import {pageStore} from "../store"

const store = pageStore()

</script>

<template>
  <Sobre class="animate__animated  animate__backInRight" v-if="store.page === 'sobre'" />  
  <Home class="animate__animated  animate__backInRight" v-if="store.page === 'home'" /> 
  <Portifolio  class="animate__animated  animate__backInRight" v-if="store.page === 'portifolio'" />
  <Techs class="animate__animated  animate__backInRight" v-if="store.page === 'techs'" /> 
  <Experience class="animate__animated  animate__backInRight" v-if="store.page === 'experience'" />
  <Blog class="animate__animated  animate__backInRight" v-if="store.page === 'blog'" />
</template>