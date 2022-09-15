<script setup>
  import { useGameStore } from '../stores/game';
  import Box from '@/components/Box.vue';
  import Dice from '@/components/Dice.vue';

   
  const gameStore = useGameStore();

  //console.log(gameStore.allJoueurs)
  //récupérer le player isPlaying=true + sa position
  const currentPlayer = gameStore.allJoueurs.filter(player => player.isPlaying === true)
  const currentPlayerIndex = gameStore.allJoueurs.findIndex(player => player.isPlaying === true)
  const currentPlayerPosition = currentPlayer[0].position
  //console.log(currentPlayerIndex)

  //console.log(gameStore.getDiceResult)
  
  //fonction pour changer la position du joueur quand le dé est cliqué (=emit)!
  const changeCurrentPlayerPosition = () => {
    //récupérer données du dé
    const newDiceResult = gameStore.getDiceResult
    const newPosition = currentPlayerPosition + newDiceResult
    console.log("dé et joueur: " + newPosition)
    console.log(gameStore.oneJoueur(currentPlayerIndex))
    
    //passer cette valeur à player via une action
    gameStore.changePosition(currentPlayerIndex, newPosition)
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
    <Box v-for="(box, index) in gameStore.allDatasApi" :key="index" :ident="index" :player="currentPlayer" class="box"></Box>
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