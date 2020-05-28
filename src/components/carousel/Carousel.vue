<template>
  <swiper ref="carousel" :options="carouselOptions">
    <slot />
    <div class="swiper-pagination swiper-pagination-white" slot="pagination"></div>
    <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
    <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
  </swiper>
</template>

<script>
import { Swiper, directive } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

export default {
  name: "Carousel",
  components: {
    Swiper
  },
  directives: {
    swiper: directive
  },
  data() {
    return {
      carouselOptions: {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows : true
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    };
  },
  computed: {
    swiper() {
      return this.$refs.carousel.$swiper;
    }
  }
};
</script>
