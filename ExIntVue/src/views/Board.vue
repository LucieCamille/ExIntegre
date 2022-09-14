<script setup>
  import { useGameStore } from '../stores/game';
  //import DragDrop from '@/components/questions/DragDropSortAnsw.vue';
  import Box from '@/components/Box.vue';
   
  const gameStore = useGameStore();

  console.log(gameStore.allJoueurs)

  //récupérer le player isPlaying=true + sa position
  //récupérer données du dé
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
    <Box v-for="(box, index) in gameStore.allDatasApi" :key="index" :ident="index" class="box"></Box>
    <li class="box">Arrivée</li>
  </ul>
  <!--<DragDrop />-->
</template>

<style>
.boxContainer {
  display: flex;
  flex-wrap: wrap;
  align-content: start;
  width: 80vw;
  height: 70vw;
}

.box {
  /*width: 4rem;
  height: 4rem;*/
  margin: .2rem;
  color: #fff;
  border: 1px solid #fff;
  list-style-type: none;
}
</style>