export default {
  modules: {
    auth: {
      getters: {
        isAuthenticated: () => (localStorage.getItem('token') !== null),
        user: state => state.user
      },

      state: {
        user: {
          id: 'user-1',
          is_superuser: true,
          email: 'email@example.com',
          full_name: 'Full Name',
          avatar: 'https://i.loli.net/2017/08/21/599a521472424.jpg'
        }
      }
    },

    boards: {
      state: {
        boards: [
          {
            id: 'id-1',
            name: 'Random Board'
          },

          {
            id: 'id-2',
            name: 'Awesome Board'
          }
        ]
      }
    }
  }
}
