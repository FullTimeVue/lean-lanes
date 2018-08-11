<template>
  <nav class="nav">
    <slot name="logo">
      <router-link :to="{name: 'home'}" class="nav__link">
        <logo centered inline size="tiny" class="nav__link__logo"/>
        <span class="nav__link__title">{{ $t('app.name') }}</span>
      </router-link>
    </slot>

    <slot name="menu">
      <div class="nav__menu">

      </div>
    </slot>
  </nav>
</template>

<script>
export default {
  name: 'nav-bar'
}
</script>

<style lang="sass" scoped>
.nav
  position: fixed
  top: 1em
  left: 1em
  display: inline-block
  height: 3.8em
  background: #fff
  border-radius: 0.2em
  box-shadow: 0 0 0.2em #ddd
  padding: 0.2em 0.8em 0.2em 0.2em
  z-index: 10

  &__link
    display: block

    &:hover
      text-decoration: none

    &__title
      position: relative
      top: -0.5em
      left: 0.2em
      text-transform: uppercase
      font-size: 1.8em
      font-weight: 300
</style>
