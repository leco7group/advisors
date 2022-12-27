<template>
    <div id="about" class="max-w-7xl p-5 mt-5 mx-auto w-full">  
        <div class="grid lg:grid-cols-2 grid-cols-1 items-center gap-5 pb-5 pt-0">
            <div class="text-text">
                    <p class="text-4xl font-bold leading-none lg:text-left text-center">That is the way to the target</p>
                    <p class="font-light mt-3 lg:text-left text-center">Try a variety of benefits when using our services.</p>
                </div>
            <div>
                <Carousel class="cursor-pointer select-none" :autoplay="4000" :wrap-around="true">
                    <Slide v-for="step in this.steps" :key="step.step">
                    <div class="flex flex-col lg:flex-row items-center gap-8">
                        <div class="flex items-center justify-evenly w-full">
                            <img :src="step.icon" alt="Icon" class="h-32">
                            <div class="text-text">
                                <p class="text-2xl font-light">Step</p>
                                <p class="text-7xl font-bold">{{step.step}}</p>
                            </div>
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
        grid-template-columns: auto 1fr;
    }
</style>