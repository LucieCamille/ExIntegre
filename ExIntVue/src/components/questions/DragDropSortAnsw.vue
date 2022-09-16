<script setup>
  const props = defineProps(['question'])

  const originalList = props.question.response.answers

  let shuffledList = []

  originalList.forEach((s) =>
  Math.random() > 0.5 ? shuffledList.push(s) : shuffledList.unshift(s)
  );  

  const validList = props.question.response.validAnswer

  //@dragstart="handleDragStart(ev, index)" draggable="true"
  const handleDragStart = (ev, i) => {
    ev.dataTransfer.dropEffect = 'move'
    ev.dataTransfer.effectAllowed = 'move'
    ev.dataTransfer.setData('text/plain', i)
  }

  //@drop="onDrop($event)" @dragover.prevent  @dragenter.prevent
  const onDrop = (ev) => {
      const itemID = ev.dataTransfer.getData('itemID')
      //const item = this.items.find((item) => i == itemID)
      //item.list = list
    }

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
    <div class="sorting">
      <ul class="order_list">
        <li class="order_item" v-for="(answ, index) in shuffledList" :key="index"> {{answ}} </li>
      </ul>
      <ul class="order_list sorting_list" v-for="(container, index) in validList" :data-class="index" :key="index">
        <legend> {{container.title}} </legend>
      </ul>
      <ul class="order_list sorting_list middle">
        <legend>Both</legend>
      </ul>
    </div>

    <button class="form_btn" @click.prevent="handleClickValidate">Validate</button>

  </div>
</template>

<style scoped>
  .sorting {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    align-content: space-evenly;
  }

  .order_list {
  grid-row: 1 / -1;
  }

  .sorting_list {
    grid-column: 2 / -1;
  }

  .middle {
    grid-row: 2 / 3;
  }

  ul[data-class="0"] {
    grid-row: 1 / 2;
  }

  ul[data-class="1"] {
    grid-row: 3 / -1;
  }

</style>