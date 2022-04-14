export const SET_PATIENTS = (state, data) => {
  Object.assign(state, {
    patients: data.results,
    pagination: data.info,
  })
}
