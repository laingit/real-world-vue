import IdroService from '@/services/IdroService.js'

export const namespaced = true

export const state = {
  idrometri: [],
  fase: 'all'
}

export const mutations = {
  SET_ALL_IDROMETRI(state, data) {
    state.idrometri = data.data
  }
}

export const actions = {
  fetchIdrometri({ commit, dispatch }) {
    IdroService.getIdroAll()
      .then(response => {
        commit('SET_ALL_IDROMETRI', response.data)
      })
      .catch(error => {
        const notification = {
          type: 'error',
          message: 'There was a problem fetching events: ' + error.message
        }
        dispatch('notification/add', notification, { root: true })
      })
  }
}
