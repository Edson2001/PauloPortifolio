
<script lang="ts" setup>
import {ref} from "vue"

let text = "Eu sou um programador"
let tema = ref('')
let textArray = text.split('')

for(let i = 0; i < textArray.length; i++){
    setTimeout(()=>{
        tema.value += textArray[i]
    }, 100*i)
} 

</script>
<template >
    <section class="homeSection">
        <article>
            <span>Olá Pessoas,</span>
            <h3>{{tema}}</h3>
            <span>Seja bem vindo ao meu portifólio</span>
            <a href=""  class="button" >Saiba mais sobre  mim</a>
            <ul>
                <li>
                    <a href="">
                        <img src="/images/Git.svg" alt="">
                    </a>
                </li>
                <li>
                    <a href="">
                        <img src="/images/Instagram.svg" alt="">
                    </a>
                </li>
                <li>
                    <a href="">
                        <img src="/images/Linkedin.svg" alt="">
                    </a>
                </li>
            </ul>

        </article>
        <article>
            <img src="/images/Home_art 1.svg" alt="">
        </article>
    </section>
</template>