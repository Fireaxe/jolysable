<template>
  <div class="carousel">
    <div class="carousel-inner">
      <slot />
    </div>

    <a class="carousel-control-prev" @click.prevent="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true" />
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" @click.prevent="next">
      <span class="carousel-control-next-icon" aria-hidden="true" />
      <span class="sr-only">Next</span>
    </a>
  </div>
</template>

<script>
export default {
  name: "Carousel",
  data() {
    return {
      index: 0,
      slides: [],
      direction: null
    };
  },
  computed: {
    slidesCount() {
      return this.slides.length;
    }
  },
  mounted() {
    this.slides = this.$children;
    this.slides.forEach((slide, i) => {
      slide.index = i;
    });
  },
  methods: {
    next() {
      this.index++;
      this.direction = "right";

      if (this.index >= this.slidesCount) {
        this.index = 0;
      }
    },
    prev() {
      this.index--;
      this.direction = "left";

      if (this.index < 0) {
        this.index = this.slidesCount - 1;
      }
    }
  }
};
</script>
