<template>

    <nav class="menu">
        <h1>
            <a href="">Paulo Lopes Estevão</a>
        </h1>
        <div class="menuMobile"></div>
        <ul>
            <li>
                <a @click.prevent="$emit('changePage', 'home')" href="">Home</a>
            </li>
            <li>
                <a @click.prevent="$emit('changePage', 'sobre')" href="">about</a>
            </li>
            <!-- <li>
                <a @click.prevent="$emit('changePage', 'portifolio')" href="">Portfolio</a>
            </li> -->
            <li>
                <a @click.prevent="$emit('changePage', 'techs')" href="">Techs</a>
            </li>
            <li>
                <a @click.prevent="$emit('changePage', 'blog')" href="">Blog</a>
            </li>
            <!-- <li>
                <a @click.prevent="$emit('changePage', 'experience')" href="">Experiences</a>
            </li> -->
        </ul>
    </nav>

</template>