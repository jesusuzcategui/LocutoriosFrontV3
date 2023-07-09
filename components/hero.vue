<script>
import { marked } from 'marked';
import contentful from '~/plugins/contenful';
const client = contentful()

export default {
  props: ['image_desktop', 'image_mobile', 'position', 'vertical', 'navbar'],
  mounted() {
    let vm = this;
    client.getEntries({ content_type: 'banners' }).then(result => {
      vm.sliders = result.items;
      vm.loaded = true;
    });
  },
  methods: {
    parseMd(str) {
      return marked.parse(str);
    }
  },
  data() {
    return {
      loaded: false,
      sliders: null,
      page: null,
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

<style scoped>
  .swiper {
    height: 100%;
  }
</style>

<template>
  <!--<div class="relative overflow-hidden pb-[65%] md:pb-[52%] h-[calc(100vh-80px)] 2xl:pb-[40%] 2xl:h-[calc(100vh-104px)]">
    <img class="w-full h-full hidden md:block absolute left-0 top-0 object-cover" :src="image_desktop" loading="lazy" />
    <img class="w-full h-full md:hidden block absolute left-0 top-0 object-cover" :src="image_mobile" loading="lazy" />
    <div class="absolute w-full h-full z-10 left-0 top-0 flex flex-col" :class="dynamicClass">
      <slot></slot>
    </div>
  </div>-->
  <div v-if="loaded === false" role="status">
    <svg aria-hidden="true" class="inline w-10 h-10 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
      viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
        fill="currentColor" />
      <path
        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
        fill="currentFill" />
    </svg>
    <span class="sr-only">Loading...</span>
  </div>

  <div class="relative h-[100vh] md:h-[calc(100vh-80px)] 2xl:h-[calc(100vh-104px)]">
    <Swiper v-if="(loaded === true) && sliders && sliders.length > 0" :slides-per-view="1">
      <SwiperSlide v-for="(slide, index) in sliders">
        <div class="relative overflow-hidden pb-[65%] md:pb-[52%] 2xl:pb-[40%] h-[100%]">
          <img class="w-full h-full hidden md:block absolute left-0 top-0 object-cover"
            :src="slide.fields['bannerDesktop']['fields']['file']['url']" loading="eager" />
          <img class="w-full h-full md:hidden block absolute left-0 top-0 object-cover"
            :src="slide.fields['bannerMobile']['fields']['file']['url']" loading="eager" />
          <div class="absolute w-full h-full z-10 left-0 top-0 flex flex-col" :class="dynamicClass">
            <div class="px-3 container mx-auto">
              <div v-if="slide.fields.content" v-html="parseMd(slide.fields.content)"
                class="text-white font-fashion [&>h1]:text-[24px] md:[&>h1]:text-[48px] [&>h2]:text-[16px] md:[&>h2]:text-[32px]">
              </div>
              <NuxtLink v-if="slide.fields.url" :to="slide.fields.url"
                class="uppercase text-white bg-primary hover:bg-light-primary p-3 rounded-[8px] font-fashion mt-5 inline-block text-center">
                Comprar Ahora</NuxtLink>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>

    <Navbar v-if="navbar === true" :is-transparent="true" />
  </div>
</template>