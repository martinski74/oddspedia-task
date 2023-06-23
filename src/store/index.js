import { createStore } from 'vuex'
import axios from 'axios';

export default createStore({
  state: {
    teams: [],
    selectedTeams: []
  },
  getters: {
  },
  mutations: {
    SELECT_TEAM(state, team) {
      if (!state.selectedTeams.includes(team)) {
        state.selectedTeams.push(team);
      } else {
        const index = state.selectedTeams.indexOf(team)
        state.selectedTeams.splice(index, 1)
      }
    },
    GET_TEAMS: (state, teams) => state.teams = teams
  },
  actions: {
    followTeam({ commit }, team) {
      commit('SELECT_TEAM', team)
    },

    async getTeams({ commit }) {
      const res = await axios.get('https://run.mocky.io/v3/ef80523b-0474-4104-8fe6-fe92f8360b28')

      commit('GET_TEAMS', res.data)
      return res;
    }
  }
})
