<script lang="ts" setup>
import { ref } from "vue"
const emit = defineEmits([
    "changePage"
])

const toggleMenu = ref(false)

function toggleMenuMobile(){
    if(toggleMenu.value){
        toggleMenu.value = false
    }else{
        toggleMenu.value = true
    }
}

function changePage(page:string){
    if(toggleMenu.value){
        toggleMenu.value = false
    }
    emit("changePage", page)
}

</script>
<template>
    <nav class="menu">
        <h1>
            <a href="">Paulo Lopes Estevão</a>
        </h1>
        <div @click="toggleMenuMobile" class="menuMobile"></div>
        <ul :class="toggleMenu ? 'activeMenu' : ''">
            <li>
                <a @click.prevent="changePage('home')" href="">Home</a>
            </li>
            <li>
                <a @click.prevent="changePage('sobre')" href="">about</a>
            </li>
            <!-- <li>
                <a @click.prevent="$emit('changePage', 'portifolio')" href="">Portfolio</a>
            </li> -->
            <li>
                <a @click.prevent="changePage('techs')" href="">Techs</a>
            </li>
            <li>
                <a @click.prevent="changePage('blog')" href="">Blog</a>
            </li>
            <!-- <li>
                <a @click.prevent="$emit('changePage', 'experience')" href="">Experiences</a>
            </li> -->
        </ul>
    </nav>

</template>