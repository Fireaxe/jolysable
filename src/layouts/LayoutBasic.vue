<template>
  <div>
    <navbar />

    <div class="container-fluid">
      <section class="main-section">
        <slot />
      </section>
    </div>

    <foot />
  </div>
</template>

<script>
import Navbar from "../components/NavBar.vue";
import Foot from "../components/Foot.vue";

export default {
  name: "LayoutBasic",
  components: {
    Navbar,
    Foot
  }
};
</script>
