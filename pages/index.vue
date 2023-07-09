<template>
  <Hero
    vertical="center"
    :navbar="true">
  </Hero>
  <h1 class="font-calibri text-3xl font-bold underline">
    Hello world!
  </h1>
</template>

<script setup>
definePageMeta({
  pageTransition: {
    name: 'bounce',
    mode: 'out-in' // default
  }
})
</script>
