<template>
    <div class="max-w-7xl grid grid-cols-1 lg:grid-cols-2 m-auto w-full h-full p-5">
        <div class="text-text flex flex-col justify-center items-start lg:order-1 order-2 mt-5 lg:mt-0">
            <p class="lg:text-7xl text-3xl text-center lg:text-left font-extralight">We assist your processes</p>
            <p class="lg:text-9xl text-7xl lg:text-left text-center mx-auto lg:mx-0 font-bold">In Malta</p>
            <img src="https://res.cloudinary.com/dyv3z8tnm/image/upload/v1669142761/Advisors/mancha-01_lfdicq.svg" alt="mancha" class=" h-10 mr-auto leading-none -mt-1">
            <p class="mt-5 leading-5 text-lg font-light text-center lg:text-left w-10/12">Leco7 advisor, requirements and application process for visas and permits.</p>
            <router-link :to="{hash:'#process'}" class="bg-primario text-white rounded-full text-lg font-light px-10 mt-5 py-3 mx-auto lg:mx-0">Get started</router-link>
            <input type="date" v-model="this.date" @change="fecha">
            <input type="time" v-model="this.time" @change="fecha">
        </div>
        <div class="flex justify-center items-center lg:order-2 order-1 relative">
            <img src="https://res.cloudinary.com/dyv3z8tnm/image/upload/v1672237061/Advisors/portada-copia-_1__speuk6.webp" alt="phone" class="hh z-10">
            <div class="h-3/6 w-full bg-primario bg-opacity-10 absolute bottom-0 z-0 rounded-3xl"></div>
        </div>
    </div>
</template>
<script>
export default {
    name: "Intro",
    data() {
        return {
            date: undefined,
            time: undefined,
        }
    },
    methods: {
        fecha(){
            console.log(this.date, this.time);
        }
    },

}
</script>
<style scoped>
    .hh{
        height: 580px;
        -webkit-filter: drop-shadow(10px 10px 10px rgb(218, 218, 218));
        filter: drop-shadow(10px 10px 10px rgba(102, 102, 102, 0.377));
    }
    @media (max-width: 600px) {
        .hh{
            height: 100%;
            max-height: 380px;
        }
    }
</style>