<template>
    <div class="max-w-7xl mx-auto p-5 mt-10 text-text ">
        <div class="flex flex-col items-center">
            <label for="ask" class="font-extralight text-5xl cursor-pointer">Frequently <span class="font-bold"> askeds questions</span> </label>
            <div class="grid gridd gap-5 w-full max-w-2xl mt-2">
                <p class="text-lg font-light w-max">Have questions? We´re here to help</p>
                <img src="https://res.cloudinary.com/dyv3z8tnm/image/upload/v1669142761/Advisors/mancha-01_lfdicq.svg" alt="">
            </div>
            <div class="w-full max-w-3xl border text-text border-text border-opacity-40 focus:border-primario flex items-center mt-10 rounded-lg  pl-5 h-11">
                <i class="fi fi-rr-search flex justify-center items-center"></i>
                <input @keydown="active" @change="active" v-model="this.ask" type="text" name="ask" id="ask" class=" w-full bg-white bg-opacity-0   border-none text-sm focus:border-opacity-0" placeholder="Example: How to get my visa in the shortest time possible?">
                <button :class="this.search" class="transition-all duration-500 bg-primario px-5 p-2 rounded-r-md text-white h-11">Search</button>
            </div>

            <div class="mt-10 w-full mx-auto max-w-4xl text-text">
                <div v-for="question in this.questions" :key="question.id" class="w-full pt-10">
                    <div class="mb-10 w-full flex justify-between items-center cursor-pointer" @click="question.active = !question.active">
                        <p class="font-semibold pr-5">{{question.tittle}}</p>
                        <i v-if="question.active" class="fi fi-rr-minus flex justify-center items-center text-xl"></i>
                        <i v-else class="fi fi-rr-plus flex justify-center items-center text-xl "></i>
                    </div>
                    <div class="mb-10" v-if="question.active">
                        <p class="three"> {{question.text}}</p>
                    </div>
                    <div class="border border-text border-opacity-20 w-full"></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "Faq",
    data() {
        return {
            search: "opacity-0",
            ask:"",
            questions: [
                {
                    id: 1,
                    tittle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                    text: "1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra risus amet lectus nulla fermentum lectus aenean rhoncus. Sodales id nullam neque at. Leo, ac vel vivamus pulvinar, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra risus amet lectus nulla fermentum lectus aenean rhoncus. Sodales id nullam neque at. Leo, ac vel vivamus pulvinar.",
                    active: true
                },
                {
                    id: 2,
                    tittle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                    text: "2 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra risus amet lectus nulla fermentum lectus aenean rhoncus. Sodales id nullam neque at. Leo, ac vel vivamus pulvinar, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra risus amet lectus nulla fermentum lectus aenean rhoncus. Sodales id nullam neque at. Leo, ac vel vivamus pulvinar.",
                    active: false
                },
                {
                    id: 3,
                    tittle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                    text: "3 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra risus amet lectus nulla fermentum lectus aenean rhoncus. Sodales id nullam neque at. Leo, ac vel vivamus pulvinar, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra risus amet lectus nulla fermentum lectus aenean rhoncus. Sodales id nullam neque at. Leo, ac vel vivamus pulvinar.",
                    active: false
                },
            ]
        }
    },

    methods: {
        active(){
            if(this.ask != ""){
                this.search = "opacity-100"
            } else{
                this.search = "opacity-0"
            }
        }
    },
}
</script>
<style scoped>
    .gridd{
        grid-template-columns: 45% 55%;
    }

    @media (max-width: 1024px) {
        .gridd{
                grid-template-columns: 1fr;
            }
    }

    #ask{
        box-shadow: none;
    }
</style>