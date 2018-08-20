<template>
  <div class="board-index">
    <div class="board-index__content">
      <lane
        v-for="lane in lanes"
        :lane="lane"
        :key="lane.id"/>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import lane from '@/components/lanes/Lane.vue'

export default {
  name: 'board-index',

  props: {
    boardId: {
      type: String
    }
  },

  components: {
    lane
  },

  computed: {
    lanes() {
      return this.allLanes.filter(lane => lane.board === this.boardId)
    },

    ...mapState({
      user: state => state.auth.user,
      boards: state => state.boards.boards,
      allLanes: state => state.lanes.lanes
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
