<template>
  <div :class="classes">
    <img class="logo__image" src="../assets/logo.svg" />
  </div>
</template>

<script>
const SIZES = {
  normal: 'normal',
  small: 'small',
  tiny: 'tiny'
}

const NORMAL = 'normal'

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

    size: {
      type: String,
      default: NORMAL
    },

    small: {
      type: Boolean,
      default: false
    },

    tiny: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    classes() {
      const klass = 'logo'
      let klasses = ''
      const size = SIZES[this.size] || NORMAL

      if (this.centered) klasses += ` ${klass}--centered`
      if (this.inline) klasses += ` ${klass}--inline`
      klasses += ` ${klass}--${size}`

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

  &--tiny
    #{$self}__image
      width: 3.8em
</style>
