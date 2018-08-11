export default {
  user: state => state.user,

  isAdmin({ user }) {
    const anonymous = {
      is_superuser: false
    }

    return (user || anonymous).is_superuser
  }
}
