<script lang="ts" setup>

    const used = [
        {
            img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg'
        },
        {
            img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/storybook/storybook-original.svg'
        },
        {
            img: '/images/Vector(2).svg'
        },
        {
            img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg'
        },
        {
            img: '/images/Vector(1).svg'
        },
        {
            img: '/images/Vector(2).svg'
        },
        {
            img: '/images/Vector.svg'
        },
        {
            img: '/images/Vector(1).svg'
        },
        {
            img: '/images/Vector(2).svg'
        },
        {
            img: '/images/Vector.svg'
        },
        {
            img: '/images/Vector(1).svg'
        },
        {
            img: '/images/Vector(2).svg'
        }
    ]   

    const studying = [
        {
            img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg'
        },
        {
            img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/storybook/storybook-original.svg'
        },
        {
            img: '/images/Vector(2).svg'
        },
        {
            img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg'
        },
        {
            img: '/images/Vector(1).svg'
        },
        {
            img: '/images/Vector(2).svg'
        },
        {
            img: '/images/Vector.svg'
        },
        {
            img: '/images/Vector(1).svg'
        },
        {
            img: '/images/Vector(2).svg'
        },
        {
            img: '/images/Vector.svg'
        },
        {
            img: '/images/Vector(1).svg'
        },
        {
            img: '/images/Vector(2).svg'
        }
    ]

</script>

<template >
    <section class="techsSection">
        <h2><span>Minhas</span> Techs</h2>
        <p>Tecnologias</p>
        <p class="techsUsed">Já <span>utilizadas</span></p>
        
        <ul>
            <li v-for="(item, index) in used" :key="index" >
                <img :src="item.img" alt="">
            </li>
        </ul>

        <p class="techsUsed">Atualmente  <span>Desenvolvendo</span></p>
        <ul>
            <li v-for="(item, index) in studying" :key="index">
                <img :src="item.img" alt="">
            </li>
        </ul>
    </section>
</template>