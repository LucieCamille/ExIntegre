<script setup>
  let items = ["itemA", "itemB", "itemC"]

  const handleDragStart = (ev, i) => {
    ev.dataTransfer.dropEffect = 'move'
    ev.dataTransfer.effectAllowed = 'move'
    ev.dataTransfer.setData('text/plain', i)
  }
  const onDrop = (ev) => {
      const itemID = ev.dataTransfer.getData('itemID')
      //const item = this.items.find((item) => i == itemID)
      //item.list = list
    }

</script>

<template>
  <h2>Drag&Drop list</h2>
  <div class="drop-zone" @drop="onDrop($event)"  @dragover.prevent  @dragenter.prevent>
    <div v-for="(item, index) in items" :key="index" class="drag-el" draggable="true" @dragstart="handleDragStart(ev, index)"> {{item}} </div>
  </div>
</template>

<style scoped>
.drop-zone {
  background-color: #eee;
  margin-bottom: 10px;
  padding: 10px;
}
.drag-el {
  background-color: #fff;
  color: #666;
  margin-bottom: 10px;
  padding: 5px;
}
</style>