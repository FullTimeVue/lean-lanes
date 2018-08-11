<template>
  <div class="home">
    <nav-bar/>
    <account-menu :user="user"/>

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
      user: state => state.auth.user,
      boards: state => state.boards.boards
    })
  }
}
</script>

<style lang="sass" scoped>
.home
  &__content
    width: 80%
    margin: 8em auto
</style>
