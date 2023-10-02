<template>
	<v-navigation-drawer
		app
		v-model="drawer"
		height="100vh"
		class="sidebar"
		floating
  >
	<v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            Premios NCYT
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
	</v-navigation-drawer>
</template>
<script>
  export default {
    name: 'SidebarComponent',
		data () {
      return {
				drawer: true,
        items: [
          { title: 'POSTULADOS', icon: 'mdi-list-box' },
          { title: 'USUARIOS', icon: 'mdi-account-group' },
        ],
      }
    },
  }
  </script>