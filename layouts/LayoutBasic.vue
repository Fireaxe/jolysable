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
import Navbar from '../components/Navbar'
import Foot from '../components/Foot'

export default {
  name: 'LayoutBasic',
  components: {
    Navbar,
    Foot,
  }
}
</script>
