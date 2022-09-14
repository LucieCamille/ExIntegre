<script setup>
  const props = defineProps(['question'])

  console.log(props.question)

</script>

<template>
<form>
  <legend> {{props.question.question}} </legend>
  <label v-for="(answ, index) in props.question.response.answers" :key="index" for=""><input type="checkbox" /> {{answ}} </label>
</form>
</template>


<style scoped>

</style>