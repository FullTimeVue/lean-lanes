<template>
  <div class="board-item" :style="cardColor">
    <router-link :to="{ name: 'board-index', params: { boardId: this.board.id } }">
      {{ board.name }}
    </router-link>

    <div class="board-item__controls">
      <Icon type="ios-star" />
    </div>
  </div>
</template>

<script>
import { colorBoxCSS } from '@/helpers/colors'

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
      return colorBoxCSS(this.board.name)
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
