<script setup>
  const props = defineProps(['question'])

  const emits = defineEmits(["clickValidate"])

  const alertParent = (value) => emits('clickValidate', value)

</script>

<template>
  <div class="form challenge">
    <p v-show="props.question.challenge !== true"> {{props.question.question}} </p>
    <button class="form_btn" @click.prevent="alertParent(true)">Validate</button>
    <button class="form_btn" @click.prevent="alertParent(false)">To baaaad!</button>
  </div>
</template>

<style scoped>
  .form.challenge {
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>