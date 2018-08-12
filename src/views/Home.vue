<template>
  <div class="home">
    <div class="home__content">
      <board-list :boards="boards"/>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'home',
  computed: {
    ...mapState({
      boards: state => state.boards.boards
    })
  }
}
</script>

<style lang="sass" scoped>
.home
  width: 80%
  margin: 8em auto
  z-index: 1
</style>
