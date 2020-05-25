<template>
  <footer class="footer">
    <div class="container">
      <div class="content has-text-centered">
        <p id="tooltip-time">
          <strong>
            <b-tooltip
              :label="buildTime"
              position="is-top"
              type="is-dark"
              target="tooltip-time"
            >
              <timeago
                :datetime="buildTime"
                :title="null"
                :auto-update="5"
              />
            </b-tooltip>
          </strong>
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Foot',

  computed: {
    buildTime () {
      return BUILDTIME
    }
  }
}
</script>
