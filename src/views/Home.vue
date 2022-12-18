<template>  
  <Slider />
  
  <Actionarea />

  <HomeCatalog />
</template>

<script>
  import Slider from "../components/banners/Slider.vue";
  import HomeCatalog from "../components/Products/HomeCatalog.vue";
  import Actionarea from "../components/banners/Actionarea.vue";

  export default {
    name: 'Home',
       
    components: {
      Slider,
      HomeCatalog,
      Actionarea
    },
    
  }
</script>

<style>

</style>
