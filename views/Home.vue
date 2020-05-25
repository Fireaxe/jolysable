<template>
  <layout-basic>
    <div class="container-fluid">
      <banner />
      <rooms />
      <fishing />
      <contact />
    </div>
  </layout-basic>
</template>

<script>
import LayoutBasic from "../layouts/LayoutBasic"
import Banner from "../components/Banner"
import Rooms from "../components/Rooms"
import Fishing from "../components/Fishing"
import Contact from "../components/Contact"
import "../../sass/views/home.scss"

export default {
  name: "Home",
  components: {
    LayoutBasic,
    Banner,
    Rooms,
    Fishing,
    Contact,
  },
};
</script>
