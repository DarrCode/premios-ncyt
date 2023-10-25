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
        :search="search"
      >
        <template v-slot:[`item.createdAt`]="{ item }">
          <v-chip
            color="info"
            dark
            outlined
          >
            {{ moment(item.createdAt).format('DD/MM/YYYY h:mm a') }}
          </v-chip>
        </template>

        <template v-slot:[`item.actions`]="{item}">
          <v-btn v-if="item.active" small color="success" @click="changeUserStatus(item.id,false)">Activo</v-btn>         
          <v-btn v-if="!item.active" small class="white--text" color="red" @click="changeUserStatus(item.id,true)">Inactivo</v-btn>         
        </template>

        <template v-slot:no-data>
          <h3 class="my-5">No hay usuarios registrados</h3>
        </template>
      </v-data-table>
    </v-card>
    <div class="text-center ma-2">
            <v-snackbar
                v-model="snackbar"
                :color="color"
                shaped
                >
                <v-icon>{{ icon }}</v-icon>

                {{ text }}

                <template v-slot:action="{ attrs }">
                    <v-btn
                        color="white"
                        text
                        v-bind="attrs"
                        @click="snackbar = false"
                    >
                        Cerrar
                    </v-btn>
                </template>
            </v-snackbar>
        </div>
    <ModalCreateUser @getUsers="getUsers" ref="createUser" />
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
        snackbar: false,
        text: '',
        color: '',
        icon: '',
        loading: false,
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
          { text: 'Premio', align: 'center', value: 'premioName' },
          { text: 'Mencion', align: 'center', value: 'mencionName' },
          { text: 'Fecha de creación', align: 'center', value: 'createdAt' },
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
            this.userList = data.data
          }
        })
      },

      changeUserStatus(id, status){
        const data = {
          route: 'api/user/setStatus',
          params: {
            id,
            active:status
          }
        }

        http.post(data).then(response => {
        let {data} = response;

        if (data.success) {
              this.snackbar = true
              this.color = 'success'
              this.icon = 'mdi-check-bold'
              this.text = data.msg
              this.loading = false
              this.dialog = false

              this.user = {}
              this.getUsers();
          }else{
              this.snackbar = true
              this.color = 'error'
              this.icon = 'mdi-close-thick'
              this.text = data.msg
              this.loading = false
          }
        })
      }

    }
  }
</script>

<style lang="scss" scoped>

</style>