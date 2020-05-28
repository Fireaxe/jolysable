<template>
  <div id="banner" class="banner">
    <div class="row">
      <div class="banner-container">
        <div class="banner-text">
          <h1>{{ $t("page.homepage.banner.title") }}</h1>
          <p>{{ $t("page.homepage.banner.location") }}</p>
        </div>
      </div>
    </div>

    <div id="description"  class="row">
      <div class="row description">
        <div class="col-md-12 col-lg-4 description">
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
  </div>
</template>

<script>
export default {
  name: "Banner"
};
</script>
