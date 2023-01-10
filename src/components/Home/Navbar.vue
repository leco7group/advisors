<template>
    <div>
        <div class=" justify-between max-w-7xl flex lg:pt-10 pt-5 px-5 pb-5 mx-auto items-center">
        <img src="https://res.cloudinary.com/dyv3z8tnm/image/upload/v1669124456/Advisors/advirsor-logo_iuessd.svg" alt="Logo" class="lg:h-10 h-8">
        <div class="lg:flex hidden gap-10 text-text cursor-pointer">
            
            <router-link :to="{hash:'#process'}"  class="transform focus:-translate-y-1 focus:underline focus:text-primario transition-all duration-500">Processes</router-link>
            <div>
                <button @click="this.services = !this.services" class="transform hover:text-primario transition-all duration-500 relative">Services</button>
                <div v-if="this.services" class="absolute bg-white shadow-lg p-5 rounded-lg z-20">
                    <div class="flex flex-col gap-3 text-text font-light ">
                        <a href="https://google.com" target="_blank" class="lista flex justify-between items-center gap-3 w-full">
                            <div class="flex justify-center items-center p-3 bg-text bg-opacity-10 rounded-full">
                                    <i class="fi fi-rr-briefcase flex justify-center items-centar"></i>
                            </div>
                            <div class="flex flex-col items-start w-full justify-center">
                                <p>Jobs</p>
                                <p class="one max-w-xs text-xs">Find jobs in Malta</p>
                            </div>
                            <i class="fi fi-rr-arrow-small-right flex justify-center items-center"></i>
                        </a>
                        <div class="lista flex justify-between items-center gap-3 w-full">
                            <div class="flex justify-center items-center p-3 bg-text bg-opacity-10 rounded-full">
                                    <i class="fi fi-rr-broom flex justify-center items-centar"></i>
                            </div>
                            <div class="flex flex-col items-start w-full justify-center">
                                <p>Cleaning</p>
                                <p class="one max-w-xs text-xs">House, office and car services</p>
                            </div>
                            <i class="fi fi-rr-arrow-small-right flex justify-center items-center"></i>
                        </div>
                        <div class="lista flex justify-between items-center gap-3 w-full">
                            <div class="flex justify-center items-center p-3 bg-text bg-opacity-10 rounded-full">
                                    <i class="fi fi-rr-bed flex justify-center items-centar"></i>
                            </div>
                            <div class="flex flex-col items-start w-full justify-center">
                                <p>Accommodation</p>
                                <p class="one max-w-xs text-xs">Shorts and lang term</p>
                            </div>
                            <i class="fi fi-rr-arrow-small-right flex justify-center items-center"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <button @click="this.events = !this.events" class="transform hover:text-primario transition-all duration-500 relative">Events</button>
                <div @mouseleave="this.events = false" v-if="this.events" class="absolute bg-white shadow-lg p-5 rounded-lg">
                    <div class="flex flex-col gap-2 text-text">
                        <a href="https://google.com" target="_blank" class="lista flex justify-between items-center gap-3 w-full">
                            <div class="flex justify-center items-center p-3 bg-text bg-opacity-10 rounded-full">
                                    <i class="fi fi-rr-users-alt flex justify-center items-centar"></i>
                            </div>
                            <div class="flex flex-col items-start w-full justify-center">
                                <p>WorkShops</p>
                            </div>
                            <i class="fi fi-rr-arrow-small-right flex justify-center items-center"></i>
                        </a>
                    </div>
                </div>
            </div>
            <router-link :to="{hash:'#faq'}" class="transform focus:-translate-y-1 focus:underline focus:text-primario transition-all duration-500">FAQ’S</router-link>
            <button class="transform focus:-translate-y-1 focus:underline focus:text-primario transition-all duration-500">Contact</button>
        </div>
        <div class="lg:flex gap-2 hidden">
            <button class="px-8 py-2 bg-text rounded-full text-white">Login</button>
            <button class="px-8 py-2 rounded-full border border-text text-text">Register</button>
        </div>
        <i @click="collapse" class="fi fi-rr-menu-burger text-primario flex justify-center items-center lg:hidden text-2xl"></i>
        </div>
        <div :class="this.hamburger" class="fixed shadow-xl top-0 right-0 h-screen transform transition-all duration-300 flex-col lg:hidden bg-white rounded-l-3xl z-50">
            <div  :class="this.text" class="flex top-0 items-center justify-between">
                <i @click="collapse"  class="fi fi-rr-arrow-right justify-center items-center pr-5 py-10 text-2xl text-primario"></i>
            </div>
            <div :class="this.text" class="flex-col gap-5 text-text">
                <div class="transform focus:-translate-y-1 focus:underline focus:text-primario transition-all duration-500"><i class="fi fi-rr-home"></i><p>Home</p></div>
                <router-link :to="{hash:'#about'}"  class="transform focus:-translate-y-1 focus:underline focus:text-primario transition-all duration-500">About</router-link>
                <div class="transform focus:-translate-y-1 focus:underline focus:text-primario transition-all duration-500">Processes</div>
                <div class="transform focus:-translate-y-1 focus:underline focus:text-primario transition-all duration-500">Contact</div>
                <div class="transform focus:-translate-y-1 focus:underline focus:text-primario transition-all duration-500">FAQ’S</div>
            </div>
            <div :class="this.text" class="flex gap-2">
                <button class="px-8 py-2 bg-text rounded-full text-white">Login</button>
                <button class="px-8 py-2 rounded-full border border-text text-text">Register</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "Navbar",
    data() {
        return {
            events: false,
            services: false,
            toggle: false,
            hamburger: "w-0",
            text: "hidden"
        }
    },
    methods: {
        collapse(){
            this.toggle = !this.toggle
            if(this.toggle){
                this.hamburger = "w-10/12 px-10 "
                this.text = "flex"
            } else{
                this.hamburger = "w-0 p-0"
                this.text = "sr-only"
            }
        }
    }
}
</script>
<style scoped>

</style>