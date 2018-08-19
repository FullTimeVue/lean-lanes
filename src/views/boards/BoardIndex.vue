<template>
  <div class="board-index">
    <div class="board-index__content">
      lanes {{ boardId }} {{ lanes }}
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'board-index',

  props: {
    boardId: {
      type: String
    }
  },

  computed: {
    lanes() {
      return this.lanes.filter(lane => lane.board === this.boardId)
    },

    ...mapState({
      user: state => state.auth.user,
      boards: state => state.boards.boards,
      lanes: state => state.lanes.lanes
    })
  }
}
</script>

<style lang="sass" scoped>
.board-index
  width: 80%
  margin: 8em auto
  z-index: 1
</style>
