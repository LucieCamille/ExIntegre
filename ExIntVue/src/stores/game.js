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
        isPlaying: true
      }*/
      {
        name: "Luce",
        score: 0,
        position: 0,
        isPlaying: false
      },
      {
        name: "Math",
        score: 0,
        position: 1,
        isPlaying: true
      }
   ]),
    datasApi: ref([]),
    diceResult: ref(0),
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
    changePosition(pIndex, position) {
      this.joueurs[pIndex].position = position;
    },
    //add a score point to a player:
    setScore(pIndex) {
      this.joueurs[pIndex].score++
    },
    //change player turn with isPlaying = true ()
    setIsPlaying(cpi, ncpi){
      if(cpi < this.joueurs.length -1) {
        this.joueurs[ncpi].isPlaying = true;
        this.joueurs[cpi].isPlaying = false;
      } else {
        this.joueurs[0].isPlaying = true;
        this.joueurs[cpi].isPlaying = false;
      }
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
    //changer used en true
    setUsed(bIndex) {
      this.datasApi[bIndex].used = true;
    },
    //dice
    rollDice() {
      this.diceResult = Math.floor(Math.random() * 6) + 1;
      //console.log(this.diceResult)
    }
  }
})