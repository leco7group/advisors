<template>
    <div class="max-w-7xl grid grid-cols-1 lg:grid-cols-2 m-auto w-full h-full p-5 mt-5">
        <div class="text-text flex flex-col justify-center items-start lg:order-1 order-2 mt-5 lg:mt-0">
            <p class="lg:text-7xl text-3xl text-center lg:text-left font-extralight">All the assistance you may need</p>
            <p class="lg:text-9xl text-7xl lg:text-left text-center mx-auto lg:mx-0 font-bold">In Malta</p>
            <img src="https://res.cloudinary.com/dyv3z8tnm/image/upload/v1669142761/Advisors/mancha-01_lfdicq.svg" alt="mancha" class=" h-10 mr-auto leading-none -mt-1">
            <p class="mt-5 leading-5 text-lg font-light text-center lg:text-left">At LECO7 advisors, we provide you with all the advice you need <br class="hidden lg:block"> to achieve every goal you set for your stay in Malta.</p>
            <router-link :to="{hash:'#process'}" class="bg-primario text-white rounded-full text-lg font-light px-10 mt-5 py-3 mx-auto lg:mx-0">Get started</router-link>
        </div>
        <div class="flex justify-center items-center lg:order-2 order-1">
            <img src="https://res.cloudinary.com/dyv3z8tnm/image/upload/v1669144672/Advisors/group-logo-01-01_1_1_1_xo2a1l.png" alt="phone" class="hh">
        </div>
    </div>
</template>
<script>
export default {
    name: "Intro"
}
</script>
<style scoped>
    .hh{
        height: 580px;
    }

    @media (max-width: 600px) {
        .hh{
            height: 100%;
            max-height: 380px;
        }
    }
</style>