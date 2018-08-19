<script>
export default {
  name: 'error-message',
  data: () => ({ error: null }),

  errorCaptured (err, vm, info) {
    this.error = `${err.message}\n\nfound in ${info} of component`
    return false
  },

  render(h) {
    if (this.error) {
      this.$Notice.error({
        title: this.$t('app.error'),
        desc: this.error
      })

      return h('pre', { style: { color: 'red' } }, this.error)
    }

    return this.$slots.default[0]
  }
}
</script>
