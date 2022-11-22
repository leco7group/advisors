<template>
    <div>
        <div class=" justify-between max-w-7xl flex lg:pt-10 pt-5 px-5 pb-5 mx-auto items-center">
        <img src="https://res.cloudinary.com/dyv3z8tnm/image/upload/v1669124456/Advisors/advirsor-logo_iuessd.svg" alt="Logo" class="h-10">
        <div class="lg:flex hidden gap-10 text-text cursor-pointer">
            <button class="transform focus:-translate-y-1 focus:underline focus:text-primario transition-all duration-500">Home</button>
            <button class="transform focus:-translate-y-1 focus:underline focus:text-primario transition-all duration-500">About</button>
            <button class="transform focus:-translate-y-1 focus:underline focus:text-primario transition-all duration-500">Processes</button>
            <button class="transform focus:-translate-y-1 focus:underline focus:text-primario transition-all duration-500">Contact</button>
            <button class="transform focus:-translate-y-1 focus:underline focus:text-primario transition-all duration-500">FAQ’S</button>
        </div>
        <div class="lg:flex gap-2 hidden">
            <button class="px-8 py-2 bg-text rounded-full text-white">Login</button>
            <button class="px-8 py-2 rounded-full border border-text text-text">Register</button>
        </div>
        <i class="fi fi-rr-menu-burger text-primario flex justify-center items-center lg:hidden text-2xl"></i>
        </div>
        <div class="hidden flex-col lg:hidden bg-white">
            <div class="flex flex-col gap-5 text-text cursor-pointer">
            <button class="transform focus:-translate-y-1 focus:underline focus:text-primario transition-all duration-500">Home</button>
            <button class="transform focus:-translate-y-1 focus:underline focus:text-primario transition-all duration-500">About</button>
            <button class="transform focus:-translate-y-1 focus:underline focus:text-primario transition-all duration-500">Processes</button>
            <button class="transform focus:-translate-y-1 focus:underline focus:text-primario transition-all duration-500">Contact</button>
            <button class="transform focus:-translate-y-1 focus:underline focus:text-primario transition-all duration-500">FAQ’S</button>
            </div>
            <div class="flex gap-2">
                <button class="px-8 py-2 bg-text rounded-full text-white">Login</button>
                <button class="px-8 py-2 rounded-full border border-text text-text">Register</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "Navbar"
}
</script>
<style scoped>
    
</style>