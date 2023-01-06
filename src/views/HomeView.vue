<template>
  <div>
    <router-link :to="{hash:'#process'}"  class=" lg:fixed bottom-0  left-0 lg:px-8 px-2 shadow-lg py-3 bg-orange-300 text-text z-50 flex items-center justify-evenly lg:rounded-tr-3xl">
      <i class="fi fi-rr-world flex items-center justify-center text-2xl mr-3"></i>
      <div class="flex flex-col text-center lg:text-left">
        <p class=" text-lg leading-none underline lg:font-light">Start your process</p>
        <p class="text-sm font-light not-sr-only lg:sr-only">Don't wait any longer for your dreams</p>
      </div>
      </router-link>
    <Navbar></Navbar>
    <IntroHome></IntroHome>
    <About></About>
    <Process></Process>
    <Faq></Faq>
    <Footer></Footer>
    
  </div>
</template>

<script>
import Navbar from '@/components/Home/Navbar.vue';
import IntroHome from '@/components/Home/IntroHome.vue';
import About from '@/components/Home/About.vue';
import Process from '@/components/Home/Process.vue';
import Faq from '@/components/Home/Faq.vue';
import Footer from '@/components/Home/Footer.vue';
export default {
components:{
  IntroHome,
  Footer,
  Navbar,
  About,
  Process,
  Faq
}
}
</script>

<style scoped>
.gridd{
  grid-template-rows: 1fr auto;

}
</style>




