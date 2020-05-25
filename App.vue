<template>
  <transition
    name="fade"
    mode="out-in"
  >
    <router-view :key="$route.fullPath" />
  </transition>
</template>

<script>
export default {
}
</script>
