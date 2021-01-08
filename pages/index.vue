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
  mounted: function() {},
  computed: {
    ...mapState(["fooddata"])
  }
};
</script>

<style></style>
