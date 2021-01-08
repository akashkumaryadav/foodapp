<template>
  <main class="container">
    <div id="banner">
      <app-header />
    </div>
    <app-restaurantinfo :datasource="fooddata" />
  </main>
</template>

<script>
import AppHeader from "../components/AppHeader.vue";
import AppRestaurantinfo from "../components/AppRestaurantinfo.vue";
import { gsap } from "gsap";
import { mapState } from "vuex";
export default {
  components: { AppHeader, AppRestaurantinfo },
  mounted: function() {
    gsap.fromTo("#banner", { opacity: 0.5 }, { opacity: 1, duration: 3 });
  },
  computed: {
    ...mapState(["fooddata"])
  }
};
</script>

<style></style>
