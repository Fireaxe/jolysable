<template>
  <div id="contact" class="contact">
    <div class="row">
      <div class="col-md-12 offset-lg-1 col-lg-5">
        <h1 class="page-title">
          {{ $t("page.contact.page") }}
        </h1>
      </div>
    </div>

    <div class="row contact-block">
      <div class="col-md-12 offset-lg-1 col-lg-5">
        <h4>{{ $t("page.contact.description.contact") }}</h4>

        <div class="row">
          <div class="col-md-12 col-lg-6 p-0">
            <div class="icon-info">
              <div class="image">
                <img
                  width="24"
                  height="24"
                  src="../assets/images/phone_receiver.svg"
                  alt="phone"
                />
              </div>
              <ul>
                <li>06.50.34.13.43</li>
                <li>06.62.66.87.17</li>
              </ul>
            </div>
          </div>
          <div class="col-md-12 col-lg-6 p-0">
            <div class="icon-info">
              <div class="image">
                <img
                  width="32"
                  height="32"
                  src="../assets/images/email.svg"
                  alt="email"
                />
              </div>
              <p>
                stein.claire24@gmail.com
              </p>
            </div>
          </div>
        </div>

        <!--        <div class="col-md-12 col-lg-12 p-0">-->
        <!--          <h4 class="form-label">-->
        <!--            {{ $t('page.contact.form.label') }}-->
        <!--          </h4>-->

        <!--                              {{ form_start(form) }}-->
        <!--                              {{ form_widget(form.name) }}-->

        <!--                              {{ form_errors(form.email) }}-->
        <!--                              {{ form_widget(form.email) }}-->

        <!--                              {{ form_widget(form.phone) }}-->
        <!--                              {{ form_widget(form.subject) }}-->
        <!--                              {{ form_widget(form.message) }}-->

        <!--                              <button class="btn btn-primary">-->
        <!--                                  {{ $t('send') }}-->
        <!--                              </button>-->
        <!--                              {{ form_end(form) }}-->
        <!--        </div>-->
      </div>
      <div class="col-md-12 col-lg-6 address">
        <h4>{{ $t("page.contact.description.address") }}</h4>

        <ul>
          <li>Lieu dit : Jolysable</li>
          <li>14 rue des fontaines</li>
          <li>17800 Pons</li>
          <li>{{ $t("page.contact.description.behind") }}</li>
        </ul>

        <!--        <div id="map" />-->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact"
};
</script>
