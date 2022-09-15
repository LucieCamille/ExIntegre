<script setup>
  import { ref } from 'vue'

  const props = defineProps(['question'])

  //console.log(props.question.response)
  const validAnswers = props.question.response.validAnswers
  //console.log(validAnswers)

  //pousser les réponse sélectionnée dans un array
  const checkedAnswers = ref([])
  
  const handleClickValidate = () => {
    //console.log(checkedAnswers.value)
    //vérifier si les réponse sélectionnées sont identiques à validAnswer
    const isValid = JSON.stringify(checkedAnswers.value) === JSON.stringify(validAnswers)
    //console.log(isValid)

    //si oui: return true et ajouter +1 au player isPlaying true (emit)
    //si non: return false

    //dans les deux cas: marquer la case comme visited + passer au joueur suivant (boucler sur les joueurs et changer isPlaying du joueur suivant)

  }

</script>

<template>
<form class="form">
  <legend> {{props.question.question}} </legend>
  <label v-for="(answ, index) in props.question.response.answers" :key="index" for=""><input type="checkbox" :value="answ" v-model="checkedAnswers" /> {{answ}} </label>
  <p> {{checkedAnswers}} </p>
  <button class="form_btn" @click.prevent="handleClickValidate">Validate</button>
</form>
</template>


<style scoped>

</style>