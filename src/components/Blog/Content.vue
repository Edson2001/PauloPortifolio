<script lang='ts' setup>
import Card from "../Card.vue"
import { Splide, SplideSlide } from '@splidejs/vue-splide'
</script>
<template >
    <section class="portifolioSection">
       <div class="portifolioInfo">
            <span>Meu</span>
            <div>   
                <h2>Blog</h2>
                <p>Estes são alguns dos conteúdos que já partilhei</p>
            </div>
       </div>
       <!-- <ul>
            <li class="active">
                <a href="">Todos</a>
            </li>
            <li>
                <a href="">Web app</a>
            </li>
            <li>
                <a href="">Data Analysis</a>
            </li>
            <li>
                <a href="">Outros</a>
            </li>
       </ul> -->

       <div class="portifolioList">
            <Splide :options="{ rewind: true, perPage: 3 }" aria-label="My Favorite Images">
                <SplideSlide v-for="item in 5" >
                    <a href="">
                        <Card>
                            <h4>Titulo do projecto</h4>
                            <p>Pequena descrição, Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates ducimus quos velit facilis.</p>
                        </Card>
                    </a>
                </SplideSlide>
            </Splide>
        </div>
    </section>
</template>