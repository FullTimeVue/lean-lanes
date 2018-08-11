<template>
  <div class="board-item">
    {{board.name}}
  </div>
</template>

<script>
export default {
  name: 'board-item',
  props: {
    board: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>

<style lang="sass" scoped>

</style>
