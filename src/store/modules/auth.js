import apiAuth from "../../api/api"

export default {
  namespaced: true,
  state: {
    user: sessionStorage.user ? JSON.parse(sessionStorage.getItem('user')) : null,
  },
  getters: {
    user: state => state.user,
    authenticated: state => state.user !== null,
    role: state => state.user.roleId ? state.user.roleId : state.user.user.roleId,
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user
    }
  },
  actions: {
    async login({ commit }, dataUser) {
      const { data } = await apiAuth.post(dataUser)

      if (data.success && data.data.user && data.data.token) {
        commit('SET_USER', data.data)
        sessionStorage.user = JSON.stringify(data.data)
        sessionStorage.token = data.data.token
      } else {
        return {
          error: true,
          message: data.msg
        }
      }
    },
    logout({ commit }) {
      commit('SET_USER', null)
			sessionStorage.clear()
    },
    // async resetPassword({ commit }, forgotEmail) {
    //     const { data } = await repository.resetPassword({
    //         email: forgotEmail
    //     })

    //     if (data?.success) {
    //         return data
    //     } else if (data?.error) {
    //         return {
    //             error: true,
    //             data
    //         }
    //     }
    // },
    // async setNewPassword({ commit }, params) {
    //     const { data } = await repository.setNewPassword(params)

    //     if (data?.success) {
    //         return data
    //     } else if (data?.error) {
    //         return {
    //             error: true,
    //             data
    //         }
    //     }
    // }
}
}