<template>
  <div class="board-detail">
    <div class="board-detail__content">
      details
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'board-detail',
  computed: {
    ...mapState({
      user: state => state.auth.user,
      boards: state => state.boards.boards
    })
  }
}
</script>

<style lang="sass" scoped>
.board-detail
  width: 80%
  margin: 8em auto
  z-index: 1
</style>
