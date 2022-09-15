import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useGameStore = defineStore( {
  id: 'game',
  state: ()  => ({
    joueurs: ref([
      /*{
        name: "",
        score: 0,
        position: -1,
        isPlaying: false
      }*/
      {
        name: "Luce",
        score: 0,
        position: 1,
        isPlaying: false
      },
      {
        name: "Math",
        score: 0,
        position: 2,
        isPlaying: true
      }
   ]),
    datasApi: ref([]),
    diceResult: 0,
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
    },
    getDiceResult: (state) => {
      return state.diceResult
    }
  },
  actions: {
    //add members or a member
    addMembers(members) {
      this.joueurs = [...members]
    },
    addAMembers(member) {
      this.joueurs.push(member)
    },
    //change position of a player:
    changePosition(player, position) {
      this.joueurs[player].position = position;
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
    },
    //dice
    rollDice() {
      this.diceResult = Math.floor(Math.random() * 6) + 1;
      console.log(this.diceResult)
    }
  }
})