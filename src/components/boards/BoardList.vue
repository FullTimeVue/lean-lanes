<template>
  <div class="board-list">
    <board-item
      v-for="board in boards"
      :board="board"
      :key="board.id"/>
  </div>
</template>

<script>
export default {
  name: 'board-list',
  props: {
    boards: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="sass" scoped>

</style>
