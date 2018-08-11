<template>
  <div class="account-menu" >
    <Avatar :src="user.avatar" size="large"/>
  </div>
</template>

<script>
export default {
  name: 'account-menu',
  props: {
    user: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>

<style lang="sass" scoped>
.account-menu
  position: fixed
  top: 1em
  right: 1em
  display: inline-block
  width: 3.7em
  height: 3.7em
  background: #fff
  border-radius: 50%
  box-shadow: 0 0 0.2em #ddd
  padding: 0.2em 0.8em 0.2em 0.2em
</style>
