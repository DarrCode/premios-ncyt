<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="mt-5">
        <v-card-title>
          <v-select
          v-model="status"
          :items="selectStatus"
          outlined
          label="Estado de las postulaciones"
          @change="index"
        ></v-select>

        </v-card-title>
        <v-card>
          <v-data-table
            :headers="header"
            :items="postulations"
            class="elevation-1 "
            style="cursor: pointer"
            :loading="loadingPostulations"
          >
            <template v-slot:[`item.menciones48.titulo`]="{ item }">
              <span
                class="d-inline-block text-truncate"
                style="max-width: 100px"
                :title="item.menciones48 ? item.menciones48.titulo : '-'"
              >
                {{ item.menciones48 ? item.menciones48.titulo : '-' }}
              </span>
            </template>

            <template v-slot:[`item.menciones13.titulo`]="{ item }">
              <span
                class="d-inline-block text-truncate"
                style="max-width: 100px"
                :title="item.menciones13 ? item.menciones13.titulo : '-'"
              >
              {{ item.menciones13 ? item.menciones13.titulo : '-' }}
              </span>
            </template>

            <template v-slot:[`item.menciones910.titulo`]="{ item }">
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

            <template v-slot:[`item.premioName`]="{ item }">
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
                color="success"
                dark
                outlined
              >
                {{ item.status }}
              </v-chip>
            </template>
            <template v-slot:[`item.total`]="{ item }">
              <v-chip
                :color="levelRating(item.total)"
                dark
                outlined
              >
              {{ item.total ?? 0 }} puntos
              </v-chip>
            </template>

            <template v-slot:[`item.actions`]="{ item }">
              <div class="d-flex">
                <v-btn 
                  title="Visualizar postulación"
                  @click="getDetailPostulate(item._id)"
                  icon 
                  color="primary"
                >
                  <v-icon>mdi-eye-outline</v-icon>
                </v-btn>
                <v-btn
                  color="amber"
                  class="ml-1"
                  icon
                  @click="openModalRating(item._id, item.score)"
                  title="Evaluar"
                >
                  <v-icon>mdi-star-check-outline</v-icon>
                </v-btn>
              </div>
            </template>
            <template v-slot:no-data>
              <h4 class="my-5">No se encontraron registros</h4>
            </template>
          </v-data-table>
        </v-card>
      </v-col>
      <v-snackbar
      v-model="message.snackbar"
      :color="message.color"
    >
      {{ message.title }}

    </v-snackbar>
    </v-row>
    <ModalRating
			ref="modalRating"
      @reloadPostulations="index"
		/>
    <detailsPostulate 
      ref="modalDetailsPostulate" 
      @reloadPostulation="index()"
    />
  </v-container>
</template>

<script>
import http from "@/api/api.js"

export default {
  name: 'PremiosNcytJuryView',
  components: {
    detailsPostulate: () => import(/* webpackPrefetch: true */ '@/components/postulates/DetailsPostulate.vue'),
		ModalRating: () => import(/* webpackPrefetch: true */ '@/components/jury/ModalBaremos')
  },
  data() {
    return {
      postulations: [],
      loadingPostulations: false,
      selectStatus: ['Verificado', 'Evaluado', 'En espera'],
      status: 'Verificado',
      message: {
        title: '',
        color: '',
        snackbar: false
      }
    }
  },
  computed: {
    header() {
      return [
        {
          text: 'Correo',
          align: 'start',
          sortable: false,
          value: 'user.email',
        },
        {
          text: 'Cédula',
          align: 'start',
          sortable: false,
          value: 'user.identificationCard',
        },
        {
          text: 'Observación',
          align: 'start',
          sortable: false,
          value: 'observation',
        },
        
        { text: 'Tipo participante', 
          value: 'grupal' 
        },
        { text: 'Premios', 
          value: 'premioName' 
        },
        { text: 'Nominación', 
          value: 'mencionName' 
        },
        // { text: 'Estado', 
        //   value: 'status' 
        // },
        { text: 'Total', 
          value: 'total' 
        },
        { text: ' ', 
          value: 'actions', 
          align: 'center' 
        }
      ]
    }
  },
  mounted() {
    this.index()
  },
  methods: {
    levelRating(total) { 
      if (total <= 10 || total == undefined) {
        return 'error'
      } else if (total > 10 && total <= 15) {
        return 'warning'
      }  
      return 'success'
    },
    openModalRating(postulationId, score){
      this.$refs['modalRating'].open(postulationId, score)
    },
    getDetailPostulate(item){
      const data = {
        route: `api/postulaciones`,
        params: {
          id: item
        }
      }
      http.showPostulateJurado(data).then(response => {
        let {data} = response
          if (data.flag) {
            this.$refs['modalDetailsPostulate'].open(data.data)
          } else {
            this.message.snackbar = true,
            this.message.title = data.error
            this.message.color = 'red darken-3'
          }
      }).catch(err => {
        console.log("err", err);
      })
    },
    index(){
      // if (this.postulations.length > 0) {
      //   this.message.snackbar = true
      //   this.message.title = 'Operación exitosa!'
      //   this.message.color = 'success'
      // }

      this.loadingPostulations = true

      const user = this.$store.getters['Auth/user'].user
      let premioId = user.premioId ?? null
      let mencionId = user.mencionId ?? null

      const filters = {};

      if (premioId !== null) filters.premioId = premioId
      if (mencionId !== null) filters.mencionId = mencionId
      if(this.status === 'Verificado') filters.status = this.status
      if(this.status === 'Evaluado') filters.status = this.status

      const data = {
        route: 'api/postulaciones',
        params: {
          filters: filters
        }
      }

      http.post(data).then(response => {
        if(response.data){
          this.postulations = response.data.data
        }
      }).catch((err) => {
        console.log(err);
      }).finally(() => this.loadingPostulations = false)
    }
  }
}
</script>

