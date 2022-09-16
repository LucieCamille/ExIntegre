<script setup>
  //import { ref} from 'vue'
  import QcmOneAnsw from '@/components/questions/QcmOneAnsw.vue';
  import QcmMultAnsw from '@/components/questions/QcmMultAnsw.vue';
  import DragDropOrder from '@/components/questions/DragDropOrderAnsw.vue';
  import DragDropSort from '@/components/questions/DragDropSortAnsw.vue';
  import Challenge from '@/components/questions/Challenge.vue';
  import LinkAnsw from '@/components/questions/LinkAnsw.vue';
  import { useGameStore } from '@/stores/game';

  const gameStore = useGameStore();
  const playersArray = gameStore.allJoueurs;
  const dataApiArray = gameStore.allDatasApi;

  const props = defineProps(['ident', 'cPlayer', 'iPlayer'])

  //console.log(props.ident + " " + props.cPlayer + " " + props.iPlayer)

  //console.log(props.question)
  const correspondance = {
    "form-multiple" : QcmMultAnsw,
    "form-unique" : QcmOneAnsw,
    "ordre" : DragDropOrder,
    "classement" : DragDropSort,
    "challenge" : Challenge,
    "liaison" : LinkAnsw

  }
  const activeComponent = correspondance[gameStore.allDatasApi[props.ident].qtype]

  //console.log(gameStore.allDatasApi)

  //Resultat du emit depuis la question avec un boolean
  const parentOfQuestion = (value) => {
    console.log(value)
    //marquer case comme used avec une action:
    gameStore.setUsed(props.ident)

    //si oui: return true et ajouter +1 au player isPlaying true (emit)
    if(value) {
      alert("C'est gagné!")
      gameStore.setScore(props.iPlayer)
      console.log(props.cPlayer)
    } else {
      //si non: return false
      alert("C'est raté!")
    }

    //passer au joueur suivant (boucler sur les joueurs et changer isPlaying du joueur suivant)
    gameStore.setIsPlaying(props.iPlayer, props.iPlayer+1)
  }

</script>

<template>
  <li class="box">Case {{dataApiArray[props.ident].number}}
    <p v-if="dataApiArray[props.ident].used === true">Used</p>
    <ul class="box_playerList">
      <li class="box_player" v-for="(el, index) in playersArray" :key="index" v-show="el.position === dataApiArray[props.ident].number"> {{el.name}} </li>
    </ul>
    <component v-if="props.cPlayer.position === dataApiArray[props.ident].number" class="box_question" :is="activeComponent" :question="dataApiArray[props.ident]" @clickValidate="parentOfQuestion"></component>
  </li>
</template>

<style scoped>
  .box_question {
    padding: 1rem;
    /*position: absolute;
    top: 0;
    left: -10vw;
    width: 30rem;
    height: 20rem;
    z-index: 99;*/
    background-color: hsl(160, 100%, 37%);
    border-radius: 1rem;
  }

  .box_playerList {
    padding: 0;
    margin: 0;
  }

  .box_player {
    list-style-type: none;
  }
</style>