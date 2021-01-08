<template>
  <section class="restaurantinfo" id="restaurants">
    <div v-for="store in datasource" :key="store.id">
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
            <nuxt-link :to="`/items/${item.id}`">
              <button class="ghost">View Item</button></nuxt-link
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    datasource: {
      type: Array
    }
  }
};
</script>

<style lang="scss" scoped></style>
