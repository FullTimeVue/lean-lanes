<template>
  <div id="app">
    <div v-if="isAuthenticated">
      <nav-bar/>
      <account-menu :user="user"/>
      <router-view/>
    </div>
    <div v-else>
      <router-view/>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'board-detail',

  computed: {
    ...mapGetters([
      'isAuthenticated',
      'user'
    ])
  }
}
</script>

<style lang="sass">
  @import "./assets/sass/app"
</style>
