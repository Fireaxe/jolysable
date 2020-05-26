<template>
  <div id="fishing" class="fishing">
    <div class="row">
      <div class="col-md-12 offset-lg-1 col-lg-5">
        <h1 class="page-title large">
          {{ $t("page.fishing.page") }}
        </h1>
      </div>
    </div>

    <div class="row fishing-block">
      <div class="col-md-12 col-lg-6">
        <p>
          {{ $t("page.fishing.description.text") }}
          <br />{{ $t("page.fishing.description.text2") }}
        </p>

        <p>
          {{ $t("page.fishing.description.text3") }}
          <br />{{ $t("page.fishing.description.text4") }}
        </p>

        <h2>{{ $t("page.fishing.price.label") }}</h2>
        <p>
          {{ $t("page.fishing.price.text") }}
          <br />{{ $t("page.fishing.price.text2") }}
        </p>
      </div>
      <div class="col-md-12 col-lg-5">
        <img width="100%" src="../assets/images/etang.png" alt="etang" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Fishing"
};
</script>
