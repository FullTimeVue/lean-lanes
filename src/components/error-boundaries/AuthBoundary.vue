<script>
export default {
  name: 'auth-boundary',
  errorCaptured(error, component, info) {
    console.log(error)
    return false
  }
}
</script>
