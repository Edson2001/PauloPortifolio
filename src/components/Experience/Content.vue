<script lang="ts" setup>
    import Card from '../Card.vue'
    import { Splide, SplideSlide } from '@splidejs/vue-splide'
</script>
<template >
    <section class="experienceSection">
        <div class="experienceFirstDiv">
            <p>
                Minha jornada esta apenas começando, sempre aprendendo
            </p>
            <h2>
                <span>Experiência</span>
                <span>Profissional</span>
            </h2>
        </div>
        <div class="experiences">
            <Splide :options="{ rewind: true, perPage: 3 }" aria-label="My Favorite Images">
                <SplideSlide v-for="item in 5" >
                    <Card>
                        <h4>Cargo</h4>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                        </p>
                    </Card>
                </SplideSlide>
            </Splide>
        </div>

        
    </section>
</template>