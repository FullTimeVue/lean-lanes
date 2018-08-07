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
    },

    inline: {
      type: Boolean,
      default: false
    },

    small: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    classes() {
      const klass = 'logo'
      let klasses = ''

      if (this.centered) klasses += ` ${klass}--centered`
      if (this.inline) klasses += ` ${klass}--inline`
      if (this.small) klasses += ` ${klass}--small`

      return `${klass}${klasses}`
    }
  }
}
</script>

<style lang="sass" scoped>
.logo
  $self: &

  &__image
    width: 10em

  &--centered
    text-align: center

  &--inline
    display: inline-block

  &--small
    #{$self}__image
      width: 6em
</style>
