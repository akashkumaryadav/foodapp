export const state = () => ({
  fooddata: []
});

export const mutations = {
  updateFoodData(state, data) {
    state.fooddata = data;
  }
};

export const actions = {
  async getFoodData({ state, commit }, payload) {
    // if fooddata is populated no need to call the api
    if (state.fooddata.length) return;
    try {
      const data = await fetch(
        "https://dva9vm8f1h.execute-api.us-east-2.amazonaws.com/production/restaurants",
        {
          headers: {
            "Content-Type": "application/json",
            "x-api-key": process.env.AWS_API_KEY
          }
        }
      )
        .then(response => response.json())
        .then(data => commit("updateFoodData", data));
    } catch (error) {
      console.log(error);
    }
  }
};
