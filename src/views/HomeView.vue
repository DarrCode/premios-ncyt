<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="mt-10">
        <v-card
          elevation="2">
          <v-toolbar
            class="mb-4"
            color="cyan lighten-1"
            dark
          >
            <v-icon large class="mr-3">mdi-filter</v-icon>
            <v-toolbar-title>Filtrar Postulantes</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <v-card-text>
            <div class="d-flex ">
              <v-select
                :items="participants"
                label="Por participantes"
                outlined
              ></v-select>

              <v-select
                :items="categories"
                label="Por categorías"
                outlined
                class="mx-2"
              ></v-select>

              <v-select
                :items="mentions"
                label="Por mención"
                outlined
              ></v-select>

              <v-select
              class="ml-2"
                :items="status"
                label="Estado"
                outlined
              ></v-select>
            </div>
            <div class="d-flex justify-end">
              <v-btn color="primary">
                Filtrar
                <v-icon
                  dark
                  right
                >
                  mdi-filter
                </v-icon>
              </v-btn>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" class="mt-5">
        <v-card>
          <v-toolbar
              class="mb-4"
              color="cyan lighten-1"
              dark
            >
              <v-icon large class="mr-3">mdi-account-group</v-icon>
              <v-toolbar-title>Postulantes</v-toolbar-title>
              <v-spacer></v-spacer>
          </v-toolbar>
          <v-data-table
            :headers="headers"
            :items="desserts"
            class="elevation-1">
            <template v-slot:[`item.status`]="{ item }">
              <v-chip
                :color="getColor(item.status)"
                dark
              >
                {{ item.status }}
              </v-chip>
            </template>
            <template v-slot:[`item.actions`]="{ item }">
              <v-menu
              rounded="lg"
              offset-y
              small>
              <template v-slot:activator="{ attrs, on }">
                <v-btn
                  class="white--text"
                  v-bind="attrs"
                  v-on="on"
                  color="warning lighten-1"
                  samll
                >
                  <v-icon
                    dark
                  >
                    mdi-cog-outline
                  </v-icon>
                </v-btn>
              </template>
              <v-list>
                <v-list-item @click="viewDetailPostulate(item)">
                  <v-list-item-title>Ver detalles</v-list-item-title>
                  <v-list-item-action>
                    <v-icon  color="info">mdi-eye</v-icon>
                  </v-list-item-action>
                </v-list-item>
  
                <v-list-item>
                  <v-list-item-title>Observación</v-list-item-title>
                  <v-list-item-action>
                    <v-icon color="warning">mdi-square-edit-outline</v-icon>
                  </v-list-item-action>
                </v-list-item>
                
                <v-list-item>
                  <v-list-item-title>Rechazar</v-list-item-title>
                  <v-list-item-action>
                    <v-icon color="error">mdi-delete-outline</v-icon>
                  </v-list-item-action>
                </v-list-item>
              </v-list>
            </v-menu>
            </template>
          </v-data-table>
        </v-card>
      </v-col>
    </v-row>
    <detailsPostulate ref="modalDetailsPostulate" />
  </v-container>
</template>

<script>

  export default {
    name: 'HomeView',
    components: {
      detailsPostulate: () => import(/* webpackPrefetch: true */ '@/components/postulates/DetailsPostulate.vue'),
    },
    data (){
      return {
        dialog: false,
        search: '',
        headers: [
          {
            text: 'Nombre',
            align: 'start',
            sortable: false,
            value: 'name',
          },
          { text: 'Tipo participante', value: 'participants' },
          { text: 'Categoria', value: 'category' },
          { text: 'Nominacion', value: 'nomination' },
          { text: 'Estado', value: 'status' },
          { text: 'Acciones', value: 'actions', align: 'center' },

        ],
        desserts: [
          {
            name: 'Proyecto',
            participants: 'Grupal',
            category: 'Categoria 1',
            nomination: 'nominacion 1',
            status: 'Verificado',
          },
          {
            name: 'Proyecto',
            participants: 'Grupal',
            category: 'Categoria 1',
            nomination:  'nominacion 3',
            status: 'Validado',
          },
          {
            name: 'Proyecto',
            participants: 'Individual',
            category: 'Categoria 2',
            nomination:  'nominacion 2',
            status: 'Validado',
          },
          {
            name: 'Proyecto',
            participants: 'Individual',
            category: 'Categoria 2',
            nomination: 'nominacion 1',
            status: 'Rechazado',
          },
        ],

        participants: ['Grupales', 'Individuales'],
        categories: ['Categoria 1', 'Categoria 2', 'Categoria 3'],
        mentions: ['mencion 1', 'mencion 2', 'mencion 3'],
        status: ['Verificadas', 'Validadas', 'Rechazadas']
      }
    },
    methods: {
      getColor (status) {
        if (status == 'Rechazado') return 'red'
        else if (status === 'Validado') return 'success'
        else return 'primary'
      },
      viewDetailPostulate() {
        this.$refs['modalDetailsPostulate'].open()
      }
    },
  }
</script>
