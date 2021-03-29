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
    const tricks = await this.$axios.$get("http://localhost:5000/api/tricks");
    commit("setTrick", { tricks });
  },

  async createTrick({ commit, dispatch }, { trick }) {
    await this.$axios.post("http://localhost:5000/api/tricks", trick);
    await dispatch("fetchTricks");
  },
};
