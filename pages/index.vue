<template>
  <Hero 
    image_desktop="/img/background-home.jpg.jpg"
    image_mobile="/img/background-home.jpg.jpg"
    position="left"
    vertical="center"
    :navbar="true">
    <div class="container mx-auto">
      <h2 class="text-white text-[48px] font-fashion">LLAMA DE <br/> FORMA FACIL</h2>
      <h3 class="text-white text-[32px] font-fashion">A CUALQUIER PARTE DEL MUNDO</h3>
      <NuxtLink to="#" class="uppercase text-white bg-primary hover:bg-light-primary p-3 rounded-[8px] font-fashion mt-5 inline-block text-center">Comprar Ahora</NuxtLink> 
    </div>
  </Hero>
  <h1 class="font-calibri text-3xl font-bold underline">
    Hello world!
  </h1>
</template>

<script>
  import navbar from '~/components/navbar.vue';
  export default {
  }
</script>
