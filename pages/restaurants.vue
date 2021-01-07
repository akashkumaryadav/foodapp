<template>
  <main class="container restaurant">
    <h1 style="text-align:center">Restaurants</h1>
    <app-restaurantinfo />
  </main>
</template>

<script>
import AppRestaurantinfo from "../components/AppRestaurantinfo.vue";
export default {
  name: "restaurant",
  components: { AppRestaurantinfo }
};
</script>

<style lang="scss" scoped></style>
