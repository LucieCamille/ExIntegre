<script setup>
  //import { ref} from 'vue'
  import QcmOneAnsw from '@/components/questions/QcmOneAnsw.vue';
  import QcmMultAnsw from '@/components/questions/QcmMultAnsw.vue';
  import DragDropOrder from '@/components/questions/DragDropOrderAnsw.vue';
  import { useGameStore } from '@/stores/game';

  const gameStore = useGameStore();

  const props = defineProps(['ident', 'player'])

  //onsole.log(props.player[0])

  //console.log(props.question)
  const correspondance = {
    "form-multiple" : QcmMultAnsw,
    "form-unique" : QcmOneAnsw,
    "ordre" : DragDropOrder
  }
  const activeComponent = correspondance[gameStore.allDatasApi[props.ident].qtype]

//dans le v-show: props.player[0].position === gameStore.allDatasApi[props.ident].number
</script>

<template>
  <li class="box">Case {{gameStore.allDatasApi[props.ident].number}}
    <ul class="box_playerList">
      <li class="box_player" v-for="(el, index) in gameStore.allJoueurs" :key="index" v-show="el.position === gameStore.allDatasApi[props.ident].number"> {{el.name}} </li>
    </ul>
    <component class="box_question" :is="activeComponent" :question="gameStore.allDatasApi[props.ident]"></component>
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