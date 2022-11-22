<template>
  <div>
    <Navbar></Navbar>
    <div class="grid gridd h-screen w-full mt-5">
    <IntroHome></IntroHome>
    <Footer></Footer>
  </div>
  </div>
</template>

<script>
import Navbar from '@/components/Home/Navbar.vue';
import IntroHome from '@/components/Home/IntroHome.vue';
import Footer from '@/components/Home/Footer.vue';
export default {
components:{
  IntroHome,
  Footer,
  Navbar
}
}
</script>

<style scoped>
.gridd{
  grid-template-rows: 1fr auto;

}
</style>




