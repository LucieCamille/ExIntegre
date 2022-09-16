<script setup>
  import { ref } from 'vue'

  const props = defineProps(['question'])
  //definition de emit
  const emits = defineEmits(["clickValidate"])

  //console.log(props.question.response)
  const validAnswers = props.question.response.validAnswers
  //console.log(validAnswers)

  //pousser les réponse sélectionnée dans un array
  const checkedAnswers = ref([])

  //émettre au parent si validé ou non
  const alertParent = (value) => emits('clickValidate', value)
  
  const handleClickValidate = () => {
    //console.log(checkedAnswers.value)
    //vérifier si les réponse sélectionnées sont identiques à validAnswer
    const isValid = JSON.stringify(checkedAnswers.value.sort()) === JSON.stringify(validAnswers.sort())
    //console.log(isValid)

    //appeler fonction emit
    alertParent(isValid)
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