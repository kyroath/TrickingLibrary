const initState = () => ({
  uploadPromise: null,
  active: false,
  step: 1,
  type: "",
});

export const state = initState;

export const mutations = {
  toggleActivity(state) {
    state.active = !state.active;
    if (!state.active) {
      Object.assign(state, initState());
    }
  },
  setType(state, { type }) {
    state.type = type;
    state.step++;
  },
  setUploadPromise(state, { uploadPromise }) {
    state.uploadPromise = uploadPromise;
    state.step++;
  },
  reset(state) {
    Object.assign(state, initState());
  },
};

export const actions = {
  startVideoUpload({ commit, dispatch }, { form }) {
    const uploadPromise = this.$axios.$post("/api/videos", form);

    commit("setUploadPromise", { uploadPromise });
  },

  async createTrick({ commit, dispatch }, { trick }) {
    await this.$axios.post("/api/tricks", trick);
    await dispatch("tricks/fetchTricks", {}, { root: true });
  },
};
