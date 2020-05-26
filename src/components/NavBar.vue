<template>
  <nav class="navbar navbar-expand-lg navbar-light fixed-top">
    <a class="navbar-brand" href="#">{{ $t("app.title") }}</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon" />
    </button>
    <div id="navbarNavAltMarkup" class="collapse navbar-collapse">
      <div class="navbar-nav">
        <router-link to="#banner" class="nav-item nav-link">
          {{ $t("page.homepage.title") }}
        </router-link>
        <router-link to="#rooms" class="nav-item nav-link">
          {{ $t("page.rooms.title") }}
        </router-link>
        <router-link to="#fishing" class="nav-item nav-link">
          {{ $t("page.fishing.title") }}
        </router-link>
        <router-link to="#contact" class="nav-item nav-link">
          {{ $t("page.contact.title") }}
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar"
};
</script>
