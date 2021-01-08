<template>
  <main class="container restaurant">
    <div class="restaurantheading">
      <h1 style="text-align:center">Restaurants</h1>
      <app-select @change="selectedRestaurant = $event" />
    </div>
    <app-restaurantinfo :datasource="filteredRestaurants" />
  </main>
</template>

<script>
import AppRestaurantinfo from "../components/AppRestaurantinfo.vue";
import AppSelect from "../components/AppSelect.vue";
import { mapState } from "vuex";
export default {
  name: "restaurant",
  components: { AppRestaurantinfo, AppSelect },
  data() {
    return {
      selectedRestaurant: ""
    };
  },
  computed: {
    ...mapState(["fooddata"]),
    filteredRestaurants() {
      if (this.selectedRestaurant) {
        let rest = new RegExp(this.selectedRestaurant, "i");
        console.log(this.fooddata.filter(el => el.name.match(rest)));
        return this.fooddata.filter(el => el.name.match(rest));
      }
      return this.fooddata;
    }
  }
};
</script>

<style lang="scss" scoped></style>
