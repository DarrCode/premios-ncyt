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
                label="Por mención"
                outlined
                class="mx-2"
                return-object
              ></v-select>

              <v-select
                v-model="filter.status"
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
            <v-select v-model="selectedHeaders" :items="headers" label="Selecccionar columnas" multiple outlined return-object>
            <template v-slot:selection="{ item, index }">
              <v-chip v-if="index < 8">
                <span>{{ item.text }}</span>
              </v-chip>
              <span v-if="index === 8" class="grey--text caption">(+{{ selectedHeaders.length - 8 }} others)</span>
            </template>
         </v-select>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" class="mt-5">
        <v-card>
          <v-data-table
            :headers="showHeaders"
            :items="postulations"
            class="elevation-1 "
            style="cursor: pointer"
            :loading="loadingPostulations"
          >
            <template 
              v-slot:[`item.menciones48.titulo`]="{ item }"
            >
              <span
                class="d-inline-block text-truncate"
                style="max-width: 100px"
                :title="item.menciones48 ? item.menciones48.titulo : '-'"
              >
                {{ item.menciones48 ? item.menciones48.titulo : '-' }}
              </span>
            </template>
            <template 
              v-slot:[`item.menciones13.titulo`]="{ item }"
            >
            <span
                class="d-inline-block text-truncate"
                style="max-width: 100px"
                :title="item.menciones13 ? item.menciones13.titulo : '-'"
              >
              {{ item.menciones13 ? item.menciones13.titulo : '-' }}
              </span>
            </template>
            <template 
              v-slot:[`item.menciones910.titulo`]="{ item }"
            >
            <span
                class="d-inline-block text-truncate"
                style="max-width: 100px"
                :title="item.menciones910 ? item.menciones910.titulo : '-'"
              >
              {{ item.menciones910 ? item.menciones910.titulo : '-' }}
              </span>
            </template>
            <template v-slot:[`item.menciones1113.titulo`]="{ item }">
              <span
                class="d-inline-block text-truncate"
                style="max-width: 100px"
                :title="item.menciones1113 ? item.menciones1113.titulo : '-'"
              >
              {{ item.menciones1113 ? item.menciones1113.titulo : '-' }}
              </span>
            </template>
            <template v-slot:[`item.grupal`]="{ item }">
              {{ item.grupal ? 'Grupal' : 'Individual' }}
            </template>
            <template 
              v-slot:[`item.premioName`]="{ item }"
            >
            <span
                class="d-inline-block text-truncate"
                style="max-width: 100px"
                :title="item.premioName"
              >
                {{ item.premioName }}
              </span>
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
              <v-btn 
                title="Visualizar postulacion"
                @click="getDetailPostulate(item._id)"
                icon 
                color="primary"
              >
                <v-icon>mdi-eye-outline</v-icon>
              </v-btn>
            </template>
            <template v-slot:no-data>
              <h4 class="my-5">No se encontraron registros</h4>
            </template>
          </v-data-table>
        </v-card>
      </v-col>
    </v-row>
    <v-snackbar
      v-model="message.snackbar"
      :color="message.color"
    >
      {{ message.title }}

      <template v-slot:action="{ attrs }">
        <v-btn
          v-bind="attrs"
          @click="message.snackbar = false"
          icon
        >
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </template>
    </v-snackbar>
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
    created () {
      this.headers = Object.values(this.headersMap);
      this.selectedHeaders = this.headers;
    },
    computed: {
      showHeaders () {
        return this.headers.filter(s => this.selectedHeaders.includes(s));
      }
    },
    data (){
      return {
        message: {
          title: '',
          color: '',
          snackbar: false
        },
        selectedHeaders: [],
        headers: [],
        dialog: false,
        search: '',
        headersMap: [
          {
            text: 'titulo mención 48',
            align: 'start',
            sortable: false,
            value: 'menciones48.titulo',
          },
          {
            text: 'titulo mención 13',
            align: 'start',
            sortable: false,
            value: 'menciones13.titulo',
          },
          {
            text: 'titulo mención 910',
            align: 'start',
            sortable: false,
            value: 'menciones910.titulo',
          },
          {
            text: 'titulo mención 1113',
            align: 'start',
            sortable: false,
            value: 'menciones1113.titulo',
          },
          { text: 'Tipo participante', value: 'grupal' },
          { text: 'Premios', value: 'premioName' },
          { text: 'Nominación', value: 'mencionName' },
          { text: 'Estado', value: 'status' },
          { text: ' ', value: 'actions', align: 'center' },

        ],
        postulations: [],
        filter:{
          grupal: true,
        },
        participants: ['Grupales', 'Individuales'],
        rewards: [],
        loadingRewards: false,
        mentions: [],
        status: ['Creado', 'Aprobado', 'En espera', 'En revisión', 'Rechazado'],
        copyMentions: [],
        loadingPostulations: false
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
        let premioId = this.filter.premio.id ?? null
        let mencionId = this.filter.mencion.id ?? null
        let status = this.filter.status ?? null 

        let grupal
        if (this.filter.grupal == 'Grupales') {
          grupal = true
        } else if (this.filter.grupal == 'Individuales') {
          grupal = false
        } else {
          grupal = null
        }

        const filters = {};

        if (premioId !== null) filters.premioId = premioId
        if (mencionId !== null) filters.mencionId = mencionId
        if (grupal !== null) filters.grupal = grupal
        if (status !== null) filters.status = status
        
        const data = {
          route: 'api/postulaciones',
          params: {
            filters: filters
          }
        }
       
        http.post(data).then(response => {
          this.loadingPostulations = true
          let {data} = response

          if (data.flag) {
            if (data.data.length > 0) {
              this.postulations = data.data
            }
            this.filter = {}
            this.loadingPostulations = false
          }
        })
      },
      getColor (status) {
        if (status == 'Rechazado') return 'red'
        else if (status === 'En revisión') return 'warning'
        else if (status === 'Aprobado') return 'success'
        else if (status === 'En espera') return 'purple darken-3'
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
            let {data} = response
              if (data.flag) {
                this.$refs['modalDetailsPostulate'].open(data.data)
                this.message.snackbar = true,
                this.message.title = 'Se ha cambiado el estatus a revisión'
                this.message.color = 'warning'
                this.postulations = []
              } else {
                this.message.snackbar = true,
                this.message.title = data.error
                this.message.color = 'red darken-3'
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
