<template>
  <section id="banner" class="banner">
    <transition name="fade" mode="out-in">
      <div v-if="isLoading" class="banner__loader">
        <img src="../assets/images/spinner.svg" alt="spinner" />
      </div>
      <div v-else-if="!hasCarousels" class="banner__loader">
        <p>No Images...</p>
      </div>
      <div v-else class="banner__container">
        <carousel class="banner__carousel">
          <carousel-slide v-for="image in homepageCarousel.images" :key="image">
            <img :src="image" alt="carousel-image" width="100%" />
          </carousel-slide>
        </carousel>
        <div class="banner__text">
          <h1>{{ $t("page.homepage.banner.title") }}</h1>
          <p>{{ $t("page.homepage.banner.location") }}</p>
        </div>
      </div>
    </transition>

    <div id="description">
      <div class="row description">
        <div class="col-md-12 col-lg-4">
          <div class="description-label">
            <h2>
              {{ $t("page.homepage.description.label") }}
            </h2>
          </div>
        </div>
        <div class="col-md-12 col-lg-8 description-text">
          <p>{{ $t("page.homepage.description.text") }}</p>
          <p>{{ $t("page.homepage.description.text2") }}</p>
          <p>{{ $t("page.homepage.description.text3") }}</p>
          <p>{{ $t("page.homepage.description.text4") }}</p>
          <p>{{ $t("page.homepage.description.text5") }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Carousel from "./carousel/Carousel.vue";
import CarouselSlide from "./carousel/CarouselSlide.vue";

export default {
  name: "Banner",
  components: {
    Carousel,
    CarouselSlide
  },
  computed: {
    isLoading() {
      return this.$store.getters["carousel/isLoading"];
    },
    count() {
      return this.$store.getters["carousel/count"];
    },
    hasCarousels() {
      return this.$store.getters["carousel/hasCarousels"];
    },
    homepageCarousel() {
      const carousels = this.$store.getters["carousel/carousels"];

      return Object.values(carousels).find(
        carousel => carousel.title === "Homepage"
      );
    }
  },
  created() {
    this.$store.dispatch("carousel/homepage");
  }
};
</script>
