<script setup>
  import { ref} from 'vue'
  import QcmOneAnsw from '@/components/questions/QcmOneAnsw.vue';
  import QcmMultAnsw from '@/components/questions/QcmMultAnsw.vue';
  import { useGameStore } from '@/stores/game';

  const gameStore = useGameStore();

  const props = defineProps(['ident'])

  //console.log(props.question)
  const correspondance = {
    "form-multiple" : QcmMultAnsw,
    "form-unique" : QcmOneAnsw
  }
  const activeComponent = ref(correspondance[gameStore.allDatasApi[props.ident].qtype])

  console.log(gameStore.allJoueurs)

//<QcmOneAnsw class="f-u" v-if="gameStore.allDatasApi[props.ident].qtype === 'form-unique'" :question="gameStore.allDatasApi[props.ident]" />
//<div v-else>oh no</div>
</script>

<template>
  <li class="box">Case {{gameStore.allDatasApi[props.ident].number}}
    <component v-show="" :is="activeComponent" :question="gameStore.allDatasApi[props.ident]"></component>
  </li>
</template>

<style scoped>
  /*.f-u{
    position: absolute;
  }*/
</style>