<script lang="ts" setup>

    const emit = defineEmits([
        'changePage'
    ])


</script>

<template>

    <nav class="menu">
        <h1>
            <a href="">Paulo Lopes</a>
        </h1>
        <ul>
            <li>
                <a  @click.prevent="$emit('changePage', 'home')" href="">Home</a>
            </li>
            <li>
                <a @click.prevent="$emit('changePage', 'sobre')" href="">Sobre</a>
            </li>
            <li>
                <a @click.prevent="$emit('changePage', 'portifolio')" href="">Pertifólio</a>
            </li>
            <li>
                <a @click.prevent="$emit('changePage', 'techs')" href="">Techs</a>
            </li>
            <li>
                <a @click.prevent="$emit('changePage', 'blog')" href="">Blog</a>
            </li>
            <li>
                <a @click.prevent="$emit('changePage', 'experience')" href="">Experiências</a>
            </li>
        </ul>
    </nav>

</template>