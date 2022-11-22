<template>
    <div class=" justify-between max-w-7xl flex pt-10 px-5 pb-5 mx-auto items-center">
        <img src="https://res.cloudinary.com/dyv3z8tnm/image/upload/v1669124456/Advisors/advirsor-logo_iuessd.svg" alt="Logo" class="h-10">
        <div class="flex gap-5 text-text cursor-pointer">
            <button class="transform focus:-translate-y-2 focus:underline focus:text-primario transition-all duration-500">Home</button>
            <button>About</button>
            <button>Processes</button>
            <button>Contact</button>
            <button>FAQ’S</button>
        </div>
        <div class="flex gap-5">
            <button class="px-8 py-2 bg-text rounded-full text-white">Login</button>
            <button class="px-8 py-2 rounded-full border border-text text-text">Register</button>
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