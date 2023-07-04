<script>
export default {
  props: ['image_desktop', 'image_mobile', 'position', 'vertical', 'navbar'],
  data(){
    return {
      dynamicClass: {
        'items-start': this.$props.position == 'left',
        'items-center': this.$props.position == 'center',
        'items-end': this.$props.position == 'right',
        'justify-start': this.$props.vertical == 'left',
        'justify-center': this.$props.vertical == 'center',
        'justify-end': this.$props.vertical == 'right'
      }
    }
  }
}
</script>

<template>
  <div class="relative overflow-hidden pb-[65%] md:pb-[52%] h-[calc(100vh-80px)] 2xl:pb-[40%] 2xl:h-[calc(100vh-104px)]">
    <img class="w-full h-full hidden md:block absolute left-0 top-0 object-cover" :src="image_desktop" loading="lazy" />
    <img class="w-full h-full md:hidden block absolute left-0 top-0 object-cover" :src="image_mobile" loading="lazy" />
    <div class="absolute w-full h-full z-10 left-0 top-0 flex flex-col" :class="dynamicClass">
      <Navbar v-if="navbar === true" :is-transparent="true" />
      <slot></slot>
    </div>
  </div>
</template>