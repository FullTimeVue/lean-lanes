<template>
  <Form class="login">
    <logo centered inline small class="login__logo"/>
    <span class="login__title">{{ $t('app.name') }}</span>

    <FormItem prop="email">
      <input
        :placeholder="$t('auth.email')"
        type="text"
        class="login__email"
        v-model="loginInfo.email"/>
    </FormItem>

    <FormItem prop="password">
      <input
        :placeholder="$t('auth.password')"
        type="password"
        class="login__password"
        v-model="loginInfo.password"/>
    </FormItem>

    <Button
      type="primary" html-type="submit"
      size="large" class="login__submit"
      @click.prevent="login(loginSuccess)">

      {{ $t('auth.login') }}

    </Button>
  </Form>
</template>

<script>
import Vue from 'vue'
import { mapActions } from 'vuex'

export default Vue.extend({
  name: 'login',

  data() {
    return {
      loginInfo: {
        email: '',
        password: ''
      }
    }
  },

  methods: {
    loginSuccess() {
      this.$router.push({name: 'home'})
    },

    ...mapActions(['login'])
  },

  mounted() {
    // Set body class to `login` so we can
    // set backgroung image in css
    document.body.className = 'login'
  },

  beforeDestroy() {
    // Once user authenticates we unset body class
    document.body.className = ''
  }
})
</script>

<style scoped lang="sass">
.login
  position: relative
  top: 12em
  width: 28vw
  background: #fff
  border-radius: 0.2em
  margin: 0 auto auto 8em
  padding: 1em

  &__logo
    margin: 2em auto

  &__title
    position: relative;
    top: -0.5em;
    left: 0.5em;
    text-transform: uppercase;
    font-size: 2.8em
    font-weight: 300

  &__email,
  &__password
    width: 100%
    height: 2.8em
    border: 1px solid #eee
    border-radius: 0.1em
    padding: 0 0.6em
    line-height: 0.8em
    font-size: 1.6em
    transition: all ease-in-out 0.2s

    &:focus,
    &:active
      border: 1px solid #0088ff
      outline: none

  &__form
    margin-top: -2em

  &__submit
    width: 100%
    height: 2.8em
    border-radius: 0.1em
    margin-top: 0.2em
    line-height: 0.8em
    font-size: 1.6em
</style>
