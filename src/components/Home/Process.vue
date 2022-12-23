<template>
    <div id="process" class="max-w-7xl mx-auto py-5 mt-5 ">
        <Carousel
            :wrap-around="true"
            :breakpoints="this.breakpoints"
            v-model="this.currentSlide"
            class="mb-10 w-11/12 mx-auto text-text font-light"
            :transition="1000"
        >
            <Slide class="text-text hover:text-primario cursor-pointer" v-for="pro in this.process" :key="pro.id">
                <p class="carousel__slide" @click="slideTo(pro.id-1)">{{ pro.title }}</p>
            </Slide>     
        </Carousel>

        <Carousel class="w-full"  :wrap-around="true" :transition="1000"  :breakpoints="this.breakpoints2" :pauseAutoplayOnHover="true" v-model="this.currentSlideQuestion" :autoplay="5000">
            <Slide v-for="question in this.info" :key="question.id" class="decoration text-text">
                <div v-if="this.active"  class="flex flex-col items-start w-full lg:pr-10 lg:pl-0 px-5 rounded-xl cursor-pointer">
                    <img @click="slideGo(question.id)" :src="question.img" alt="" class="h-60 rounded-xl object-cover w-full ">
                    <div class="mt-10 px-4 py-2 rounded-full bg-primario bg-opacity-20">
                        <p class="text-primario text-sm font-light">{{question.action}}</p>
                    </div>
                    <div class="mt-5 flex flex-col items-start">
                        <p class="text-3xl font-bold one ">{{question.title}}</p>
                        <p class="text-left text-text font-light text-base mt-2 three">{{question.text}}</p>
                    </div>
                    <button @click="modalInfo(question.id)" class="bg-primario rounded-full px-5 py-3 text-white text-base mt-10 transition-all duration-300 transform hover:scale-105 hover:translate-x-1 hover:-translate-y-1">
                        Learn more
                    </button>
                </div>

            <div v-else class="flex flex-col items-start w-full lg:pr-10 lg:pl-0 px-5 rounded-xl cursor-pointer animate-pulse">
                <div class="h-60 rounded-xl object-cover w-full bg-gray-500 bg-opacity-20"></div>
                <div class="mt-10 px-4 py-2 rounded-full bg-gray-500 bg-opacity-20">
                    <p class="text-primario text-sm font-light text-opacity-0 ">Work permit</p>
                </div>
                <div class="mt-5 flex flex-col items-start w-full">
                    <div class="bg-gray-500 bg-opacity-20 rounded-full h-4 w-full my-2"></div>
                    <div class="bg-gray-500 bg-opacity-20 rounded-full h-4 w-full my-2"></div>
                    <div class="bg-gray-500 bg-opacity-20 rounded-full h-4 w-full my-2"></div>
                    <div class="bg-gray-500 bg-opacity-20 rounded-full h-4 w-full my-2"></div>
                </div>
                <button class="bg-gray-500 bg-opacity-20 rounded-full px-5 py-3 mt-10 ">
                    <p class="text-opacity-0 text-gray-50">Learn more</p>
                </button>
            </div>
            </Slide>
        </Carousel>

        <div :class="this.openModal" class=" h-screen w-screen bg-gray-300 bg-opacity-50 top-0 left-0 z-50 p-5 flex justify-center items-center">
            <div class="bg-white max-w-2xl w-full h-full rounded-3xl overflow-y-auto">
                <div class="relative w-full">
                    <div class="absolute top-0 left-0 p-5 flex justify-between items-center w-full cursor-pointer">
                    <div @click="this.openModal = 'hidden', this.currentQuestion = {} " class="p-3 rounded-full bg-white text-primario text-xl flex justify-center items-center shadow-lg hover:bg-red-500 hover:text-white transition-all duration-300">
                    <i class="fi fi-rr-cross-circle flex justify-center items-center"></i>
                    </div>
                    <div class="text-primario bg-white bg-opacity-90 px-5 py-2 rounded-full shadow-lg">
                        <p>{{this.currentQuestion.action}}</p>
                    </div>
                    <div @click="this.like = !this.like" class="p-3 rounded-full bg-white text-primario text-xl flex justify-center items-center shadow-lg hover:bg-primario hover:text-white transition-all duration-300">
                        <i v-if="this.like" class="fi fi-rr-social-network flex justify-center items-center"></i>
                        <i v-else class="fi fi-sr-thumbs-up flex justify-center items-center"></i>
                    </div>
                </div>
                <img :src="currentQuestion.img" alt="" class="object-cover h-80 w-full">
                </div>
                <div class="pt-10 px-10">
                    <div class="grid griddd items-center">
                        <h2 class="text-text text-2xl font-bold">{{this.currentQuestion.title}}</h2>
                        <button class=" px-5 py-3 w-max bg-primario transform transition-all duration-300 text-white rounded-full">Get started now</button>
                    </div>
                    
                    <p class="mt-5 font-light">{{this.currentQuestion.text}}</p>
                    <p class="mt-5 font-light">{{this.currentQuestion.moreText}}</p>
                    <p class="mt-5 font-light">{{this.currentQuestion.moreText}}</p>
                    <p class="mt-5 font-light">{{this.currentQuestion.moreText}}</p>
                    <p class="mt-5 font-light">{{this.currentQuestion.moreText}}</p>
                    <p class="mt-5 font-light">{{this.currentQuestion.moreText}}</p>
                    <p class="mt-5 font-light">{{this.currentQuestion.moreText}}</p>
                    <p class="mt-5 font-light">{{this.currentQuestion.moreText}}</p>
                    <p class="mt-5 font-light">{{this.currentQuestion.moreText}}</p>
                    <div class="my-10 flex gap-5 items-center">
                        <button class="px-5 py-3 w-full bg-white transform transition-all duration-300 text-primario rounded-full border border-primario hover:bg-primario hover:shadow-lg hover:text-white">Get started now</button>
                        <div class="p-3 bg-white shadow-lg rounded-full text-red-500">
                            <i class="fi fi-rr-heart flex justify-center items-center text-xl"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
import { supabase } from '../../supabase/init'
import { Carousel, Slide, Navigation  } from 'vue3-carousel'
export default {
    name: 'Gallery',
    components: {
        Carousel,
        Slide,
        Navigation
    },
    data() {
        return {
            currentSlide: 0,
            currentSlideQuestion: 0,
            breakpoints: {
            // 700px and up
            0: {
                itemsToShow: 1.4,
                snapAlign: 'start',
            },
            // 1024 and up
            1024: {
                itemsToShow: 3,
                snapAlign: 'center',
            },
            },
            breakpoints2: {
            // 700px and up
            700: {
                itemsToShow: 3,
                snapAlign: 'center',
            },
            // 1024 and up
            1024: {
                itemsToShow: 2.2,
                snapAlign: 'start',
            },
            },
            process:[],
            active: false,
            like: true,
            time: 3000,
            openModal: "hidden",
            currentQuestion: {},
            info: [],
        }
    },

    async created() {
        const initial = 1
        await this.getTitle()
        await this.getInfo(initial)
        
    },

    methods: {
        slideTo(current) {
            this.currentSlide = current
            this.id = this.currentSlide+1
            this.getInfo(this.id)
        },

        slideGo(current) {
            this.currentSlideQuestion = current + 1
            console.log(current, this.currentSlideQuestion);
        },

        modalInfo(id){
            this.openModal = "fixed"
            this.info.forEach(question => {
                if(question.id === id){
                    this.currentQuestion = question
                    console.log(this.currentQuestion);
                }
            });
        },
        async getTitle(){
            const { data, error } = await supabase
            .from('processes')
            .select()
            this.process = data
        },

        async getInfo(id){
            const { data, error } = await supabase
            .from('questions_web')
            .select()
            .eq('process_id', id)
            if(data.length != 0){
                this.active = true
                this.info = data
            } else {
                this.active = false
            }
            
            console.log(id, data, error);
        }
    }
}
</script>
<style scoped>
.gridd{
    grid-template-columns: 45% 55%;
}
.griddd{
    grid-template-columns: 1fr auto;
}
.decoration{
    text-decoration: none !important;
}
.carousel__slide--sliding {
    transition: 0.5s;
}
.carousel__slide--active {
    @apply text-lg;
    @apply font-medium;
    text-decoration: underline;
    @apply text-primario;
}
.carousel__slide img {
    @apply shadow-none;
    @apply transition-all;
    @apply duration-500
}

.carousel__slide--active img {
    @apply shadow-xl
}
</style>

<style>
.three{
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    display: -webkit-box;
    overflow: hidden;
}
.two{
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    display: -webkit-box;
    overflow: hidden;
}

.one{
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    display: -webkit-box;
    overflow: hidden;
}</style>