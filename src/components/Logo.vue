<template>
  <div :class="classes">
    <img class="logo__image" src="../assets/logo.svg" />
  </div>
</template>

<script>
export default {
  name: 'logo',
  props: {
    centered: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    classes() {
      const klass = 'logo'

      if (this.centered) {
        return `${klass} ${klass}--centered`
      }
    }
  }
}
</script>

<style lang="sass" scoped>
.logo
  &--centered
    text-align: center

  &__image
    width: 10em
</style>
