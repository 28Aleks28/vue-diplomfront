<template>  
  <Slider />

  <HomeCatalog />
  
  <Actionarea />  
</template>

<script>
  import Slider from "../components/banners/Slider.vue";
  import HomeCatalog from "../components/products/HomeCatalog.vue";
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
