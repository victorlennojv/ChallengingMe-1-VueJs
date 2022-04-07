import http from '~/plugins/axios'

export async function findPatients({ commit }) {
  const { data } = await http.get(
    `https://randomuser.me/api/?results=20&seed=7bc4601e814841be` // Still not  dynamic but only for testing and developing.
  )

  commit('SET_PATIENTS', data)
}
