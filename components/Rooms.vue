<template>
  <div
    id="rooms"
    class="rooms"
  >
    {{ info }}
    <div class="row">
      <div class="col-md-12 offset-lg-1 col-lg-5">
        <h1 class="page-title">
          {{ $t('page.rooms.list.title') }} ()
        </h1>
      </div>
    </div>

    <div class="row room-block">
      <div class="offset-lg-1 col-lg-3 p-0">
        <carousel>
          <carousel-slide>
            <img
              src="https://loremflickr.com/640/360/dog"
              alt="test"
            >
          </carousel-slide>
          <carousel-slide>
            <img
              src="https://loremflickr.com/640/360/sea"
              alt="test"
            >
          </carousel-slide>
          <carousel-slide>
            <img
              src="https://loremflickr.com/640/360/girl"
              alt="test"
            >
          </carousel-slide>
        </carousel>
      </div>

      <div class="col-md-12 col-lg-6">
        <div class="room-summary">
          <h3>Chambre double avec salle de bain commune</h3>

          <div class="row m-0">
            <div class="col-md-12 col-lg-6 p-0">
              <h4>{{ $t('page.rooms.spec') }}</h4>

              <div class="room-description">
                Superficie 13 m²
                <br>
                Possibilité de studio familial avec la chambre d'en face à 65€.
              </div>
            </div>
            <div class="col-md-12 offset-lg-1 col-lg-5 p-0">
              <h4>{{ $t('page.rooms.equipment') }}</h4>

              <div class="room-equipment">
                Climatisation
                <br>
                Télévision écran plat
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-12 col-lg-2 p-0">
        <h3 class="room-price">
          60€/{{ $t('page.rooms.night') }}
        </h3>
      </div>
    </div>
  </div>
</template>

<script>
import Carousel from './carousel/Carousel'
import CarouselSlide from './carousel/CarouselSlide'

export default {
  name: "Rooms",
  components: {
    Carousel,
    CarouselSlide
  },
  data () {
    return {
      info : null
    }
  },
  mounted () {
    this.axios
      .get('http://jolysable-drupal/rooms?_format=hal_json')
      .then(response => (this.info = response))
  }
}
</script>
