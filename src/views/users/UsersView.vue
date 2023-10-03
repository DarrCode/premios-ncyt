<template>
  <v-container>
    <v-card>
      <v-card-title>
        Gestión de Usuarios
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Buscar"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <div class="d-flex flex-row-reverse">
        <v-btn
          color="primary"
          class="float-right mr-6 my-6"
          @click="modalCreateUser()"
        >
          Crear Usuario
        </v-btn>
			</div>
      <v-data-table
        :headers="headers"
        :items="userList"
        :search="search">

        <template v-slot:no-data>
          <h3 class="my-5">No hay usuarios registrados</h3>
        </template>
      </v-data-table>
    </v-card>

    <ModalCreateUser ref="createUser" />
  </v-container>
  </template>

<script>
  import http from "@/api/api.js"

  export default {
    name: 'UserView',
    components: {
      ModalCreateUser: () => import(/* webpackPrefetch: true */ '@/components/users/ModalCreateUser.vue'),
    },
    data () {
      return {
        search: '',
        userList: []
      }
    },

    mounted(){
      this.getUsers();
    },

    computed: {
      headers(){
        return [
          { text: 'ID', align: 'start', value: 'id' },
          { text: 'Nombre', align: 'center', value: 'name' },
          { text: 'Email', align: 'center', value: 'email' },
          { text: 'Fecha de Creación', align: 'center', value: 'createdAt' },
          { text: 'Acciones', align: 'center', value: 'actions' },
        ]
      }
    },

    methods: {
      modalCreateUser(){
        this.$refs['createUser'].open()
      },

      getUsers(){
        const data = {
          route: 'api/user',
          params: {}
        }

        http.get(data).then(response => {
        let {data} = response;

          if (data.success) {
            console.log(data);
          }
        })
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>