
<script lang="ts" setup>
import {ref} from "vue"

let text = "Software Engineer"
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
            <!-- <span>Olá Pessoas,</span> -->
            <h3>{{tema}}</h3>
            <span>Welcome to my portfolio</span>
            <a href=""  class="button">Learn more about me</a>
            <ul>
                <li>
                    <a href="https://github.com/Paulo-Lopes-Estevao">
                        <img src="/images/Git.svg" alt="">
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/paulo_lopes_estevao/?hl=af">
                        <img src="/images/Instagram.svg" alt="">
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/paulo-lopes-estev%C3%A3o-7a70881b4/">
                        <img src="/images/Linkedin.svg" alt="">
                    </a>
                </li>
            </ul>

        </article>
        <article>
            <img src="/images/Home_art_1.svg" alt="">
        </article>
    </section>
</template>