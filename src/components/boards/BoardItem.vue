<template>
  <div class="board-item" :style="cardColor">
    {{ board.name }}

    <div class="board-item__controls">
      <Icon type="ios-star" />
    </div>
  </div>
</template>

<script>
import { colorFromText } from '@/helpers/colors'

export default {
  name: 'board-item',
  props: {
    board: {
      type: Object,
      default: () => ({})
    }
  },

  computed: {
    cardColor() {
      return `
        background: ${colorFromText(this.board.name)};
        border: 1px solid ${colorFromText(this.board.name, 100)};
      `
    }
  }
}
</script>

<style lang="sass" scoped>
.board-item
  position: relative
  height: 8em
  border-radius: 0.2em
  font-size: 1.8em
  padding: 0.5em
  line-height: 1

  &__controls
    position: absolute
    top: 0.5em
    right: 0.5em
    cursor: pointer

    i
      color: #8c8c8c
      transition: all 0.2s ease-in-out

      &:hover
        color: #138eff
</style>
