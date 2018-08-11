<template>
  <div class="home">
    <nav-bar/>
    <account-menu :user="user"/>
    {{boards}}|{{user}}
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
