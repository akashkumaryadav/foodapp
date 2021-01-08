<template>
  <main class="grid-container ">
    <div
      class="card"
      :style="`background:url(/${extractFoodItem.img}) no-repeat center center`"
    ></div>
    <div class="details">
      <h1>{{ extractFoodItem.item }}</h1>
      <input
        type="number"
        name="quantity"
        id="quantity"
        v-model="quantity"
        min="1"
        max="20"
      />
      <button>Add To Cart - ${{ extractFoodItem.price }}</button>
    </div>
    <div class="addons">
      <h2>Add Ons</h2>

      <ul id="addonslabel">
        <li v-for="addon in extractFoodItem.addOns" :key="addon">
          <input
            type="checkbox"
            :id="addon"
            :value="addon"
            v-model="selectedAddons"
          />
          {{ addon }}
        </li>
      </ul>
    </div>
    <div class="description">
      <h1>Descriptions</h1>
      <p>{{ extractFoodItem.description }}</p>
    </div>
  </main>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "iteminfo",
  data() {
    return {
      id: this.$route.params.id,
      quantity: 1,
      selectedAddons: []
    };
  },
  computed: {
    ...mapState(["fooddata"]),
    extractFoodItem() {
      for (let i = 0; i < this.fooddata.length; i++) {
        for (let j = 0; j < this.fooddata[i].menu.length; j++) {
          if (this.fooddata[i].menu[j].id === this.id) {
            return this.fooddata[i].menu[j];
          }
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.grid-container {
  width: 60vw;
  margin: auto;
  height: 88.2vh;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 29px 60px;
  grid-template-areas:
    "card card details details"
    "card card addons addons"
    "description description . .";
}

.card {
  grid-area: card;
  width: 100%;
  height: 80%;
  margin: auto;
}

.description {
  grid-area: description;
  padding: 20px;
  > * {
    margin-top: 5%;
  }
}

.details {
  margin-top: 12%;
  grid-area: details;
  input {
    margin: 5% 1%;
  }
}

.addons {
  grid-area: addons;
  border: 1px solid rgba(128, 128, 128, 0.2);
  h2 {
    transform: translate(25px, -15px);
    color: rgba($color: #6c6c6d, $alpha: 1);
  }
  ul {
    padding: 40px;
  }
  li {
    list-style: none;
  }
}
</style>
