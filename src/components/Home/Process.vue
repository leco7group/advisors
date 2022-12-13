<template>
    <div class="max-w-7xl mx-auto py-5 mt-5 ">
        <Carousel
            :wrap-around="true"
            :breakpoints="this.breakpoints"
            v-model="this.currentSlide"
            ref="carousel"
            class="mb-10 w-11/12 mx-auto text-text font-light"
            :transition="1000"
            :autoplay="this.time"
        >
            <Slide class="text-text hover:text-primario cursor-pointer" v-for="question in this.questions" :key="question.id">
                <p class="carousel__slide" @click="slideTo(question.id -1)">{{ question.tittle }}</p>
            </Slide>     
        </Carousel>

        <Carousel @mouseover="hoverTime" @mouseout="outTime" class="w-full" id="gallery" :wrap-around="true" :transition="1000"  :breakpoints="this.breakpoints2" @change="log(this.currentSlide)" v-model="this.currentSlide">
            <Slide v-for="question in this.questions" :key="question.id" class="decoration text-text">
                <div @click="slideTo(question.id -1)"  class="flex flex-col items-start w-full lg:pr-10 lg:pl-0 px-5 rounded-xl cursor-pointer">
                    <img :src="question.img" alt="" class="h-60 rounded-xl object-cover w-full ">
                    <div class="mt-10 px-4 py-2 rounded-full bg-primario bg-opacity-20">
                        <p class="text-primario text-sm font-light">{{question.action}}</p>
                    </div>
                    <div class="mt-5 flex flex-col items-start">
                        <p class="text-3xl font-bold one ">{{question.tittle}}</p>
                        <p class="text-left text-text font-light text-base mt-2 three">{{question.text}}</p>
                    </div>
                    <button @click="modalInfo(question.id)" class="bg-primario rounded-full px-5 py-3 text-white text-base mt-10 transition-all duration-300 transform hover:scale-105 hover:translate-x-1 hover:-translate-y-1">
                        Learn more
                    </button>
                </div>
            </Slide>
        </Carousel>

    </div>
</template>
<script>

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
            questions: [
                {
                    id: 1,
                    tittle: "Malta Work Visa and Permit",
                    text:"Malta is a small but very exciting and modern country. So if you want to work in Malta to experience what Malta has to offer, you must know how the application process for a Maltese work visa goes and which criteria you need to meet. ",
                    moreText: "You may be asked to submit additional documents, depending on your specific situation or the country from which you apply. Make sure you submit all the required documents with the application form. Any missing document can result in your visa rejection.",
                    action: "Work Permit",
                    img: "https://res.cloudinary.com/dyv3z8tnm/image/upload/v1670683497/Advisors/wepik-photo-mode-20221110-15439_1_hrfbqc.png"
                },
                {
                    id: 2,
                    tittle: "Malta Work Visa Requirements",
                    text:"You may be asked to submit additional documents, depending on your specific situation or the country from which you apply. Make sure you submit all the required documents with the application form. Any missing document can result in your visa rejection.",
                    moreText: "You may be asked to submit additional documents, depending on your specific situation or the country from which you apply. Make sure you submit all the required documents with the application form. Any missing document can result in your visa rejection.",
                    action: "Visa Student",
                    img: "https://img.freepik.com/free-photo/closeup-hands-passing-contract-unrecognizable-businessman_1098-19612.jpg?w=2000&t=st=1670941602~exp=1670942202~hmac=de92809e4ac7471ce5e858e0c18a1693813ce877abbeb1bc058e1ddba4d13a0a"
                },
                {
                    id: 3,
                    tittle: "Key Employee Initiative",
                    text:"Relevant skills and work experience for the qualified job. An annual salary of at least €30,000. Document copies of your previous work experiences over the last three years.",
                    moreText: "Relevant skills and work experience for the qualified job. An annual salary of at least €30,000. Document copies of your previous work experiences over the last three years.",
                    action: "Work Permit",
                    img: "https://img.freepik.com/free-photo/closeup-business-woman-making-notes-document_1262-16051.jpg?w=2000&t=st=1670941962~exp=1670942562~hmac=80525f94e2dfbb7e67ac6c5d1ebe0e3ed431e55e80193438fc5f74c736c02819"
                }
            ],
            breakpoints: {
            // 700px and up
            0: {
                itemsToShow: 1.4,
                snapAlign: 'start',
            },
            // 1024 and up
            1024: {
                itemsToShow: 4,
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
            time: 3000
        }
    },

    methods: {
        slideTo(current) {
            this.currentSlide = current
        },

        hoverTime(){
            this.time = 0
        },
        outTime(){
            this.time = 3000
        }
    }
}
</script>
<style scoped>
.gridd{
    grid-template-columns: 45% 55%;
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