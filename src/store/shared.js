export default {
  state: {
    loading: false,
    error: null,
  },

  mutations: {
    setError(state, payload) {
      state.error = payload;
    },
    
    setLoading(state, payload) {
      state.loading = payload;
    },
    
    clearError(state) {
      state.error = null;
    },
  },

  getters: {
    error: (state) => state.error,
    loading: (state) => state.loading,
  },
};
