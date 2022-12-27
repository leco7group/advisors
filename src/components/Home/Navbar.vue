<template>
    <div>
        <div class=" justify-between max-w-7xl flex lg:pt-10 pt-5 px-5 pb-5 mx-auto items-center">
        <img src="https://res.cloudinary.com/dyv3z8tnm/image/upload/v1669124456/Advisors/advirsor-logo_iuessd.svg" alt="Logo" class="lg:h-10 h-8">
        <div class="lg:flex hidden gap-10 text-text cursor-pointer">
            <button class="transform focus:-translate-y-1 focus:underline focus:text-primario transition-all duration-500">Services</button>
            <router-link :to="{hash:'#process'}"  class="transform focus:-translate-y-1 focus:underline focus:text-primario transition-all duration-500">Processes</router-link>
            <button class="transform focus:-translate-y-1 focus:underline focus:text-primario transition-all duration-500">Jobs</button>
            <button class="transform focus:-translate-y-1 focus:underline focus:text-primario transition-all duration-500">Events</button>
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