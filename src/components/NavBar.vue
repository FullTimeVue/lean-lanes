<template>
  <nav class="nav">
    <slot name="logo">
      <logo centered inline size="tiny" class="nav__logo"/>
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
