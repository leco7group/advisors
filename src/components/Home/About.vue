<template>
    <div id="about" class="max-w-7xl p-5 mt-10 mx-auto w-full">
        <div class="flex w-full justify-between text-text mx-auto px-10">
            <div class="flex items-center gap-3">
                <p class="text-7xl font-bold">10</p>
                <p class="font-light text-lg">Years of experience</p>
            </div>
            <div class=" border-r-2 rounded-full border-primario mx-10"></div>
            <div class="flex items-center gap-3">
                <p class="text-7xl font-bold">1K+</p>
                <p class="font-light text-lg">Persons advised</p>
            </div>
            <div class=" border-r-2 rounded-full border-primario mx-10"></div>
            <div class="flex items-center gap-3">
                <p class="text-7xl font-bold">100%</p>
                <p class="font-light text-lg">Efficiency in the processes carried out</p>
            </div>
        </div>
        <div class="grid grid-cols-2 items-center gap-5 py-5 mt-10">
            <div class="text-text">
                    <p class="text-4xl font-bold leading-none">That is the way to the target</p>
                    <p class="font-light mt-3">Try a variety of benefits when using our services.</p>
                </div>
            <div class="">
                <Carousel class="cursor-pointer select-none" :autoplay="4000" :wrap-around="true">
                    <Slide v-for="step in this.steps" :key="step.step">
                    <div class="flex items-center gap-8">
                        <img :src="step.icon" alt="Icon" class="h-32">
                        <div class="text-text">
                            <p class="text-2xl font-light">Step</p>
                            <p class="text-7xl font-bold">{{step.step}}</p>
                        </div>
                        <p class=" font-bold text-2xl text-text">{{step.tittle}}</p>
                    </div>
                    </Slide>
                </Carousel>
            </div>
        </div>
    </div>
</template>
<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide} from 'vue3-carousel'
export default {
    name: "About",
    components: {
    Carousel,
    Slide
},
    data() {
        return {
            steps: [
                {
                    step: 1,
                    icon: "https://res.cloudinary.com/dyv3z8tnm/image/upload/v1670582488/Advisors/raise-hand_uxanhq.png",
                    tittle: "We will ask you what is your intention"
                },
                {
                    step: 2,
                    icon: "https://res.cloudinary.com/dyv3z8tnm/image/upload/v1670582811/Advisors/registered_gmswxd.png",
                    tittle: "Your registration gives you access to the future"
                },
                {
                    step: 3,
                    icon: "https://res.cloudinary.com/dyv3z8tnm/image/upload/v1670582908/Advisors/subscription_pa5hhy.png",
                    tittle: "Select the consultancy according to your needs"
                }
            ]
        }
    },
}
</script>
<style scoped>
    .gridd{
        grid-template-columns: auto 1fr;
    }
</style>