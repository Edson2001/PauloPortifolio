<script lang='ts' setup>
import Card from "../Card.vue"
import { Splide, SplideSlide } from '@splidejs/vue-splide'

const options = { 
    rewind: true, 
    perPage: 3 ,
    breakpoints: {
        851: {
            perPage: 2
        },
        500: {
            perPage: 1
        }
    }
}

const posts = [
    {
        title: 'Titulo do projecto',
        description: 'Pequena descrição, Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates ducimus quos velit facilis.',
        img: 'https://maximomussini.com/assets/a-rubyist-guide-to-vite-js.1320b44c.jpeg'
    },
    {
        title: 'Titulo do projecto',
        description: 'Pequena descrição, Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates ducimus quos velit facilis.',
        img: 'https://repository-images.githubusercontent.com/289191277/06310700-7154-11eb-9965-4bef03e92a9c'
    },
    {
        title: 'Titulo do projecto',
        description: 'Pequena descrição, Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates ducimus quos velit facilis. Pequena descrição, Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates ducimus quos velit facilis. Pequena descrição, Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates ducimus quos velit facilis.',
        img: 'https://i.morioh.com/210420/f66ef75b.webp'
    },
    {
        title: 'Titulo do projecto',
        description: 'Pequena descrição, Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates ducimus quos velit facilis.',
        img: 'https://cdn.nodesol.com/articles/jds4tKjpeRwQ42mclybYEOK81gNGsUBjdsx2Rsuo.webp'
    }
]

function limitString(text: string, limit: number){
    if(text.length > limit){
        return text.substr(0, limit) + '...'
    }
    return text
}

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
            <Splide :options="options" aria-label="My Favorite Images">
                <SplideSlide v-for="(item, index) in posts" :key="index" > 
                    <a href="">
                        <Card>
                            <img  :src="item.img" />
                            <div class="info">
                                <h4>{{item.title}}</h4>
                                <p>{{limitString(item.description, 130)}}</p>
                            </div>
                        </Card>
                    </a>
                </SplideSlide>
            </Splide>
        </div>
    </section>
</template>