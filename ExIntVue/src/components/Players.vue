<script setup>
  import { useGameStore } from '../stores/game';
  const gameStore = useGameStore();

  const props = defineProps(['ident'])
  const theJoueur = gameStore.oneJoueur(props.ident)

</script>

<template>
  <h3> {{theJoueur}} </h3>
</template>
