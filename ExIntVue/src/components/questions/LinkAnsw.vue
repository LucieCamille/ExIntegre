<script setup>
  import { ref } from 'vue'
  const props = defineProps(['question'])
  //definition de emit
  const emits = defineEmits(["clickValidate"])

  //console.log(props.question.response)
  const listOne = props.question.response.answers1
  console.log(listOne)

  const originalListTwo = props.question.response.answers2

  let shuffledList = []

  originalListTwo.forEach((s) =>
  Math.random() > 0.5 ? shuffledList.push(s) : shuffledList.unshift(s)
  );  
  console.log(originalListTwo)
  console.log(shuffledList)

  //émettre au parent si validé ou non
  const alertParent = (value) => emits('clickValidate', value)

  const handleClickValidate = () => {
    //pousser les réponse sélectionnée dans un array
    const selectedAnswer = document.querySelectorAll('select')
    console.log('select '+ selectedAnswer)
     let arrayAnswers = []
     selectedAnswer.forEach(item => {
      arrayAnswers.push(item.value)
     })
     console.log(arrayAnswers + ' ' + originalListTwo)
    //console.log(pickedAnswer.value)
    //vérifier si la réponse sélectionnée est identique à validAnswer
    let isValid = JSON.stringify(arrayAnswers) == JSON.stringify(originalListTwo)
    console.log(isValid)
    
    //appeler fonction emit
    alertParent(isValid)
  }

</script>

<template>
<form class="form">
  <legend> {{props.question.question}} </legend>
  <div class="link_answ" v-for="(answ1, index1) in listOne" :key="index1">
    <label for="">{{answ1}}</label>
    <select class="select_answ" name="bla">
        <option v-for="(answ2, index2) in shuffledList" :value="answ2" :key="index2"> {{answ2}} </option>
    </select>
  </div>
  <button class="form_btn" @click.prevent="handleClickValidate">Validate</button>
</form>
</template>


<style scoped>

</style>