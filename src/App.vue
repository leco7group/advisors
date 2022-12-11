<template>
    <div class="bg-blue-100 h-screen w-screen fixed top-0 right-0 fondo  ">
      <img src="https://res.cloudinary.com/dyv3z8tnm/image/upload/v1669129617/Advisors/Malta-2109x1406_s54qvm.webp" alt="" class="object-cover h-full w-full opacity-10 filter grayscale">
    </div>
    <router-view/>
</template>

<style>


html{
    scroll-behavior: smooth;
  }

  
* {
margin: 0;
padding: 0;
box-sizing: border-box;
font-family: 'Poppins', sans-serif;
}
</style>

<style scoped>

.color{
  background: #F4FEFF;
}

.fondo{
  z-index: -100;
}
</style>
