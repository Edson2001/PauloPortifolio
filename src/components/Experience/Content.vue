<script lang="ts" setup>
    import Card from './Card.vue';
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
            <Card>
                <h3>Cargo</h3>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                </p>
            </Card>
            <Card>
                <h3>Cargo</h3>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                </p>
            </Card>
            <Card>
                <h3>Cargo</h3>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                </p>
            </Card>
        </div>

        <article>
            <img src="/images/used/right-quote1.svg" alt="">
            <h5>
                “Aprender é a unica coisa que a mente não se cansa, nunca tem medo e nunca se arrepende”
            </h5>
            <p>
                ~Leonardo da Vinci
            </p>
        </article>
    </section>
</template>