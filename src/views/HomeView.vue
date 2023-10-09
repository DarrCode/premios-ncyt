<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="mt-10">
        <v-card
          elevation="2">
          <v-toolbar
            class="mb-4"
            color="primary"
            dark
          >
            <v-icon  class="mr-3">mdi-filter</v-icon>
            <v-toolbar-title>Filtrar proyectos</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <v-card-text>
            <div class="d-flex d-flex-row">
              <v-select
                v-model="filter.grupal"
                :items="participants"
                label="Tipo de participantes"
                outlined
              ></v-select>

              <v-select
                v-model="filter.premio"
                :items="rewards"
                item-text="name"
                label="Por premios"
                outlined
                class="mx-2"
                return-object
              ></v-select>
              <v-progress-circular
                v-if="loadingRewards"
                indeterminate
                color="primary"
              ></v-progress-circular>
            </div>
            <div class="d-flex d-flex-row">
              <v-select
                v-model="filter.mencion"
                :items="copyMentions"
                item-text="name"
                label="Por mencion"
                outlined
                class="mx-2"
                return-object
              ></v-select>

              <v-select
              class="ml-2"
                :items="status"
                label="Estado"
                outlined
              ></v-select>
              <v-btn
                class="ml-2"
                x-large
                color="primary"
                @click="getPostulations"
              >
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
          <v-data-table
            :headers="headers"
            :items="postulations"
            class="elevation-1"
          >
            <template v-slot:[`item.grupal`]="{ item }">
              {{ item.grupal ? 'Grupal' : 'Individual' }}
            </template>
            <template v-slot:[`item.status`]="{ item }">
              <v-chip
                :color="getColor(item.status)"
                dark
                outlined
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
                  v-bind="attrs"
                  v-on="on"
                  icon
                >
                  <v-icon
                    dark
                  >
                    mdi-dots-vertical
                  </v-icon>
                </v-btn>
              </template>
              <v-list>
                <v-list-item @click="getDetailPostulate(item._id)">
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
  import http from "@/api/api.js"

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
            value: 'menciones48.titulo',
          },
          { text: 'Tipo participante', value: 'grupal' },
          { text: 'Premios', value: 'premioName' },
          { text: 'Nominación', value: 'mencionName' },
          { text: 'Estado', value: 'status' },
          { text: ' ', value: 'actions', align: 'center' },

        ],
        postulations: [
        ],
        filter:{
          grupal: true,
        },
        participants: ['Grupales', 'Individuales'],
        rewards: [],
        loadingRewards: false,
        mentions: [],
        status: ['Creado', 'Aprobado', 'En espera', 'En revisión', 'Rechazado'],
        copyMentions: []
      }
    },
    mounted (){
      setTimeout(() => {
        this.getMentions()
        this.getRewards()
      }, 1000);
    },
    watch: {
      'filter.premio' (newvalue) {
        this.copyMentions = this.mentions.filter((element) => element.premio_id === newvalue.id)
      },
    },
    methods: {
      getRewards(){
        this.loadingRewards = true
        const data = {
          route: 'api/commonData/getRewards',
          params: {}
        }

        http.get(data).then(response => {
          let {data} = response;

          if (data.success) {
            this.rewards = data.data
            this.loadingRewards = false
          }
        })
      },
      getMentions(){
        const data = {
          route: 'api/commonData/getMentions',
          params: {}
        }

        http.get(data).then(response => {
        let {data} = response;

          if (data.success) {
            this.mentions = data.data
          }
        })
      },

      getPostulations(){
        //const filter = {}
        const data = {
          route: 'api/postulaciones',
          params: {
            filters:{
                "premioId": this.filter?.premio?.id ?? '',
                "mencionId": this.filter?.mencion?.id ?? '',
                "grupal": this.filter.grupal == 'Grupales' ? true : false,
                "status":"Creado"
            }
          }
        }

        http.post(data).then(response => {
          let {data} = response

          if (data.flag) {
            this.postulations = data.data
            this.filter = {}
          }
        })
      },

      getColor (status) {
        if (status == 'Rechazado') return 'red'
        else if (status === 'Validado') return 'success'
        else return 'primary'
      },

      getDetailPostulate(item){
        const data = {
          route: 'api/postulaciones',
          params: {
            id: item
          }
        }
        try{
          http.show(data).then(response => {
            let {data} = response;
              if (data.flag) {
                console.log(data.data);
                this.$refs['modalDetailsPostulate'].open(data.data)
              }
          }).catch(err => {
            console.log("err", err);
          })
        }catch(error){
          console.log(error);
        }
      },
    },
  }
</script>
