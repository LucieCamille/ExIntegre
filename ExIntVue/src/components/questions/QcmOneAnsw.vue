<script setup>
  import { ref } from 'vue'
  const props = defineProps(['question'])
  //definition de emit
  const emits = defineEmits(["clickValidate"])

  //console.log(props.question.response)
  const validAnswers = props.question.response.validAnswers
  //console.log(validAnswers)

  //pousser les réponse sélectionnée dans un array
  const pickedAnswer = ref()

  //émettre au parent si validé ou non
  const alertParent = (value) => emits('clickValidate', value)
  
  const handleClickValidate = () => {
    //console.log(pickedAnswer.value)
    //vérifier si la réponse sélectionnée est identique à validAnswer
    const isValid = pickedAnswer.value === validAnswers[0]
    //console.log(isValid)

    //appeler fonction emit
    alertParent(isValid)
  }

</script>

<template>
<form class="form">
  <legend> {{props.question.question}} </legend>
  <label v-for="(answ, index) in props.question.response.answers" :key="index" for=""><input type="radio" :value="answ" v-model="pickedAnswer" /> {{answ}} </label>
  <button class="form_btn" @click.prevent="handleClickValidate">Validate</button>
</form>
</template>
