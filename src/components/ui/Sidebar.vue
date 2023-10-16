<template>
	<v-navigation-drawer
		app
		v-model="drawer"
		height="100vh"
		class="sidebar"
		floating
  >
    <center>
      <v-img max-width="155" src="@/assets/img/logomin.png"></v-img>
    </center>

    <v-divider></v-divider>

    <v-list
      dense
      nav
    >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          :to="item.path"
        >
        <!-- <span class="d-flex" v-if="item.roles.includes(role)"> -->

          <v-list-item-icon>
            <v-icon color="primary">{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        <!-- </span> -->

        </v-list-item>
      </v-list>
      <template v-slot:append>
        <div class="pa-2">
          <v-btn color="error" outlined block @click="logout">
            Cerrar sesión
          </v-btn>
        </div>
      </template>
	</v-navigation-drawer>
</template>
<script>
  export default {
    name: 'SidebarComponent',
		data () {
      return {
				drawer: true,
        items: [
          { title: 'POSTULADOS', icon: 'mdi-list-box-outline', path: '/', roles: [1,2,3] },
          { title: 'USUARIOS', icon: 'mdi-account-group-outline', path: '/users', roles: [5] },
        ],
      }
    },
    computed: {
      role () {
        return this.$store.getters['Auth/role']
      }
    },
    methods: {
      logout() {
				this.$store.dispatch('Auth/logout')
				this.$router.push('/login')
			}
    }
  }
  </script>