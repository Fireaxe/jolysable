<template>
  <swiper-slide>
    <slot />
  </swiper-slide>
</template>

<script>
import { SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

export default {
  name: "CarouselSlide",
  components: {
    SwiperSlide
  }
};
</script>
