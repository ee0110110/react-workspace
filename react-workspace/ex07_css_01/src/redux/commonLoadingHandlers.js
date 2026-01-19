export const createLoadingReducers = (builder, thunk) => {
    builder
      .addCase(thunk.pending, (state) => {
          state.loading = true;
          state.error = null;
      })
      .addCase(thunk.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
      });
};