<template>
  <transition
    :name="transition"
  >
    <div
      v-show="visible"
      class="carousel-item active"
    >
      <slot />
    </div>
  </transition>
</template>

<script>
export default {
  name: "CarouselSlide",
  data () {
    return {
      index: 0,
    }
  },
  computed: {
    transition () {
      if (this.$parent.direction !== null) {
        return 'slide-' + this.$parent.direction
      }

      return null
    },
    visible () {
      return this.index === this.$parent.index
    }
  }
}
</script>
