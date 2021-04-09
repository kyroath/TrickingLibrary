const initState = () => ({
  tricks: [],
});

export const state = initState;

export const mutations = {
  setTrick(state, { tricks }) {
    state.tricks = tricks;
  },
  reset(state) {
    Object.assign(state, initState());
  },
};

export const actions = {
  async fetchTricks({ commit }) {
    const tricks = await this.$axios.$get("/api/tricks");
    commit("setTrick", { tricks });
  },
};
