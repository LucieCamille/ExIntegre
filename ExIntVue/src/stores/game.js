import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useGameStore = defineStore( {
  id: 'game',
  state: ()  => ({
    joueurs: ref([
      {
        name: "",
        score: 0,
        position: -1,
        isPlaying: false
      }
    ]),
    datasApi: ref([])
  }),
  getters: {
    allJoueurs: (state) => {
      return state.joueurs
    },
    oneJoueur: (state) => {
      return (id) => state.joueurs[id]
    },
    allDatasApi: (state) => {
      return state.datasApi
    }
  },
  actions: {
    addMembers(members) {
      this.joueurs = [...members]
    },
    addAMembers(member) {
      this.joueurs.push(member)
    },
    //fetch
    async getDatasApi() {
      const response = await axios.get('https://killer-cepegra.xyz/cockpit-ingrwf10/api/content/items/questions?sort=%7Bnumber%3A%22asc%22%7D');
      const results = [...response.data]
      results.forEach((element) => {
        element.used = 'false'
      })
      this.datasApi = [...results]
      //console.log(results)
    }
  }
})