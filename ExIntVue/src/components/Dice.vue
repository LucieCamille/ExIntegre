<script setup>
  import { useGameStore } from '../stores/game';

  const gameStore = useGameStore();

  const emits = defineEmits(["clickDice"])
  const alertParent = () => emits('clickDice')

  const handleClickDice = () => {
    //lancer la fonction de roll the dice
    gameStore.rollDice()
    alertParent()
  }

</script>

<template>
  <div class="dice">
    <button class="dice_btn" @click.prevent="handleClickDice">Roll the dice</button>
    <p class="dice_result"> {{gameStore.getDiceResult}} </p>
  </div>
</template>

<style scoped>
  .dice {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .dice_btn {
    padding: .5rem;
    margin-block-end: .5rem;
    border-radius: .5rem;
    border: 2px solid hsla(160, 100%, 37%, 1);
    background-color: transparent;
    color: var(--color-text)
  }

  .dice_btn:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }

  .dice_result {
    font-size: 1.5rem;
  }

</style>