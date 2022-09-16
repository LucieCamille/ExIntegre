<script setup>
  import { ref, computed } from 'vue'
  import { useGameStore } from '../stores/game';
  import Box from '@/components/Box.vue';
  import Dice from '@/components/Dice.vue';

   
  const gameStore = useGameStore();

  //computed = actualisé si un de ses éléments est modifié
  let currentPlayer = computed(() => {return gameStore.allJoueurs.find(player => player.isPlaying === true)})
  let currentPlayerIndex = computed(() => {return gameStore.allJoueurs.findIndex(player => player.isPlaying === true)})
  let currentPlayerPosition = ref(0)

  //console.log(gameStore.allJoueurs)
  //console.log(gameStore.getDiceResult)
  
  //fonction pour changer la position du joueur quand le dé est cliqué
  const changeCurrentPlayerPosition = () => {
    //récupérer toutes les données du player isPlaying=true + sa position
    currentPlayer = gameStore.allJoueurs.find(player => player.isPlaying === true)
    currentPlayerIndex = gameStore.allJoueurs.findIndex(player => player.isPlaying === true)
    currentPlayerPosition = currentPlayer.position
    //console.log(currentPlayer)
    //récupérer données du dé
    const newDiceResult = gameStore.getDiceResult
    //calculer la nouvelle position du joueur
    const newPosition = currentPlayerPosition + newDiceResult
    //trouver l'index de la box dont nb correspond à newPosition
    const newBoxNb  = gameStore.allDatasApi.findIndex(boxActive => boxActive.number === newPosition)
    console.log(newBoxNb)

    //passer cette valeur à player via une action pour changer sa position
    gameStore.changePosition(currentPlayerIndex, newPosition)
    
    //si la nouvelle box est used ---CASSE TOUT MON CODE---
    // if(gameStore.allDatasApi[newBoxNb].used === false){
    //   //passer cette valeur à player via une action pour changer sa position
    //   gameStore.changePosition(currentPlayerIndex, newPosition)
    //   console.log("dé et joueur: " + newPosition)
    //   console.log(gameStore.oneJoueur(currentPlayerIndex))
    // } else {
    //   if(gameStore.allDatasApi[newBoxNb+1].used === false) {
    //     //passer cette valeur à player via une action
    //     gameStore.changePosition(currentPlayerIndex, newPosition)
    //   } else {
    //     if(gameStore.allDatasApi[newBoxNb-1].used === false) {
    //       //passer cette valeur à player via une action
    //       gameStore.changePosition(currentPlayerIndex, newPosition)
    //     } else {
    //       //passer son tour et donc changer de joueur:
    //       gameStore.setIsPlaying(currentPlayerIndex, currentPlayerIndex+1)
    //     }
    //   }
    // }
    
  } 

  /* Si la box de la position du player + dé a used === false
  if(box.used[position + dé] === false){
    passer used en true via une action (setter)
    via autre action : player.position = position +dé
    show la question
  } else {
    si c'est déjà utilisé:
    if(box.used[position + dé +1] === false){
      idem
    } else {
        if(box.used[position + dé +1] === false){
          idem
        } else {
          nothing
          }
        }
    }
  */



  
</script>

<template>
  <h2>Board</h2>
  <ul class="boxContainer">
    <li class="box">Départ</li>
    <Box v-for="(box, index) in gameStore.allDatasApi" :key="index" :ident="index" :cPlayer="currentPlayer" :iPlayer="currentPlayerIndex" class="box"></Box>
    <li class="box">Arrivée</li>
  </ul>
  <Dice @clickDice="changeCurrentPlayerPosition" />
</template>

<style>
.boxContainer {
  display: flex;
  flex-wrap: wrap;
  align-content: start;
}

.box {
  /*width: 5rem;
  height: 5rem;*/
  margin: .2rem;
  padding: .5rem;
  color: var(--color-texte);
  border: 1px solid var(--color-border);
  border-radius: .5rem;
  list-style-type: none;
}
</style>