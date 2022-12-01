<template>
  <div class="">
    <div class="w-full relative bottom-0">
      <svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
      <defs>
      <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
      </defs>
      <g class="parallax">
      <use xlink:href="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
      <use xlink:href="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
      <use xlink:href="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
      <use xlink:href="#gentle-wave" x="48" y="7" fill="#fff" />
      </g>
      </svg>
  </div>

  <div class="p-5 bg-white text-text">
    <div class="flex flex-col lg:flex-row justify-between text-texto items-end text-sm gap-5 lg:gap-0 max-w-7xl mx-auto">

    <div class="flex justify-center items-center gap-5  mx-auto lg:mx-0">
        <p>Follow us</p>
        <a href="https://www.google.com" target="_blank"><i     class="fi fi-brands-facebook flex justify-center items-center text-2xl"></i></a>
        <a href="https://www.google.com" target="_blank"><i class="fi fi-brands-instagram flex justify-center items-center text-2xl"></i></a>
    </div>

      <a href="#" target="_blank" class="flex leading-none text-center mx-auto lg:mx-0"> © All rights reserved LECO7 GROUP {{this.date}}</a>

      <a href="#" target="_blank" class="flex lg:flex-col lg:items-end items-center justify-center  mx-auto lg:mx-0 gap-3 lg:gap-0">
          <p class="w-max font-light lg:mb-1">A development of:</p>
          <img src="https://res.cloudinary.com/dyv3z8tnm/image/upload/v1669131998/Advisors/group-logo-01_emyrow.svg" alt="" class="h-3 opacity-80">
      </a>
    </div>
  </div>
  </div>
</template>
<script>
export default {
  name: "Footer",
  data() {
        const today = new Date();
        const year = today.getFullYear();
        return {
            date: year
        }
    },
}
</script>
<style scoped>

.waves {
  position:relative;
  width: 100%;
  height:15vh;
  margin-bottom:-7px; /*Fix for safari gap*/
  min-height:100px;
  max-height:150px;
}

/* Animation */

.parallax > use {
  animation: move-forever 25s cubic-bezier(.55,.5,.45,.5)     infinite;
}
.parallax > use:nth-child(1) {
  animation-delay: -2s;
  animation-duration: 7s;
}
.parallax > use:nth-child(2) {
  animation-delay: -3s;
  animation-duration: 10s;
}
.parallax > use:nth-child(3) {
  animation-delay: -4s;
  animation-duration: 13s;
}
.parallax > use:nth-child(4) {
  animation-delay: -5s;
  animation-duration: 20s;
}
@keyframes move-forever {
  0% {
   transform: translate3d(-90px,0,0);
  }
  100% { 
    transform: translate3d(85px,0,0);
  }
}
/*Shrinking for mobile*/
@media (max-width: 768px) {
  .waves {
    height:40px;
    min-height:40px;
  }
}
</style>