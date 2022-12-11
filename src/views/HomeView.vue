<template>
  <div>
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




