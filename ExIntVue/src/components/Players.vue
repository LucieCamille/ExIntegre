<script setup>
  import { useGameStore } from '../stores/game';
  const gameStore = useGameStore();

  const props = defineProps(['ident'])
  const theJoueur = gameStore.oneJoueur(props.ident)

  const emits = defineEmits(["clickJoueur"])

  const alertParent = () => emits('clickJoueur', props.ident)
  

</script>

<template>
  <h3> {{theJoueur.name}} </h3>
  <a href="#" @click.prevent="alertParent">Click me</a>
</template>
