export const SET_PATIENTS = (state, data) => {
  state.patients = data.results
  state.pagination = data.info
}
