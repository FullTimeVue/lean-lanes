export default {
  user: state => state.user,

  isAdmin({ auth }) {
    if (auth.user) {
      return auth.user.is_superuser
    }

    return false
  }
}
