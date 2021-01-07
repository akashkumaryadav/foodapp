<template>
  <section class="restaurantinfo" id="restaurants">
    <div v-for="store in fooddata" :key="store.id">
      <h2>{{ store.name }}</h2>
      <p>DeliveryTime :{{ store.deliveryTime }}</p>
      <p>Rating :{{ store.rating }}</p>
      <p v-if="store.freeDelivery" class="label"><span>Free Delivery</span></p>
      <div class="row">
        <div
          class="items"
          v-for="item in store.menu"
          :key="item.id"
          :style="`background:url(${item.img}) no-repeat center center`"
        >
          <div class="iteminfo">
            <div>
              <h4>{{ item.item }}</h4>
              <p>Price : ${{ item.price.toFixed(2) }}</p>
            </div>
            <button class="ghost">View item</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["fooddata"])
  }
};
</script>

<style lang="scss" scoped></style>
