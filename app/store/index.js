import Vuex from 'vuex'

export default () =>
  new Vuex.Store({
    state: {
      projects: []
    },
    getters: {
      projects: state => state.projects
    },
    mutations: {
      setProjects: (state, { projects }) => {
        state.projects = projects
      }
    },
    actions: {
      async fetchProjects ({ commit }) {
        try {
          const res = await this.$axios.$get('/projects')
          commit('setProjects', { projects: res.projects })
        } catch (e) {
          console.error(e)
        }
      },
      async getProjects ({ getters, dispatch }) {
        if (getters.projects.length === 0) {
          await dispatch('fetchProjects')
        }
        return getters.projects
      }
    }
  })
