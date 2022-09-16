<script setup>
  //ordre
  const props = defineProps(['question'])

  const originalList = props.question.response.answers
  let shuffledList = []
  originalList.forEach((s) =>
    Math.random() > 0.5 ? shuffledList.push(s) : shuffledList.unshift(s)
  );

  console.log(shuffledList)

  //réorganiser la liste:
  const handleDrop = (ev, index) => {
    ev.preventDefault()

  }

  //@dragstart="classList.add('hint')" 

//valider les réponses
  const handleClickValidate = () => {
    //console.log(pickedAnswer.value)
    //vérifier si la réponse sélectionnée est identique à Answers
    //const isValid = JSON.stringfy(resultList) === JSON.stringify(props.question.response.answers)
    //console.log(isValid)

  }

</script>

<template>
  <div class="form">
    <legend> {{props.question.question}} </legend>
    <ul class="order_list">
      <li class="order_item" v-for="(answ, index) in shuffledList" :key="index" draggable="true" @drop="handleDrop(ev, index)"> {{answ}} </li>
    </ul>
    <button class="form_btn" @click.prevent="handleClickValidate">Validate</button>

  </div>

</template>

<style scoped>
  .order_list{
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
  .order_item {
  margin: 10px;
  padding: 15px;
  border: 1px solid var(--color-border);
  background: var(--color-border-hover);

}

/* (B) DRAG-AND-DROP HINT */
.order_item.hint {
  border: 1px solid #ffc49a;
  background: #feffb4;
}
.order_item.active {
  border: 1px solid #ffa5a5;
  background: #ffe7e7;
}
</style>