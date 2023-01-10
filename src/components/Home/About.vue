<template>
    <div id="about" class="max-w-5xl p-5 mt-5 mx-auto w-full">  
        <div class="grid lg:grid-cols-2 grid-cols-1  items-center gap-5 pb-5 pt-0">
            <div class="text-text w-full flex flex-col">
                    <p class="lg:text-4xl text-3xl font-bold leading-none lg:text-left text-center w-max mx-auto lg:mx-0">How is the process?</p>
                    <p class="font-light mt-2 lg:text-left text-center">Follow these steps</p>
                </div>
            <div>
                <Carousel class="cursor-pointer select-none" :autoplay="4000" :wrap-around="true">
                    <Slide v-for="step in this.steps" :key="step.step">
                    <div class="flex flex-col lg:flex-row items-center gap-10">
                        <div class="flex items-center justify-evenly w-auto">
                            <div class="text-text bg-text bg-opacity-10 rounded-full p-5 px-10">
                                <p class="text-2xl font-light">Step</p>
                                <p class="text-6xl font-bold">{{step.step}}</p>
                            </div>
                        </div>
                        <div class="w-full">
                            <p class=" font-bold text-2xl text-text">{{step.tittle}}</p>
                        </div>
                    </div>
                    </Slide>
                </Carousel>
            </div>
        </div>
    </div>
</template>
<script>
import { supabase } from '../../supabase/init'
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
            steps: []
        }
    },

    created() {
        this.getSteps()
    },

    methods: {
        async getSteps(){
            const { data, error } = await supabase
            .from('steps_web')
            .select()
            this.steps = data
        }
    },
}
</script>
<style scoped>
    .gridd{
        grid-template-columns: 40% 60%;
    }
</style>