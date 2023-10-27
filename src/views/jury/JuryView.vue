<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="mt-5">
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
  </v-container>
</template>

<script>
import http from "@/api/api.js"

export default {
  name: 'PremiosNcytJuryView',

  data() {
    return {
      postulations: [],
      loadingPostulations: false
    };
  },

  computed: {
    header() {
      return [
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
        { text: 'Tipo participante', 
          value: 'grupal' 
        },
        { text: 'Premios', 
          value: 'premioName' 
        },
        { text: 'Nominación', 
          value: 'mencionName' 
        },
        { text: 'Estado', 
          value: 'status' 
        },
        { text: ' ', 
          value: 'actions', 
          align: 'center' 
        },
      ]
    },
  
  },

  mounted() {
    this.index()
    
  },

  methods: {
    index(){
      const user = this.$store.getters['Auth/user'].user
      let premioId = user.premioId ?? null
      let mencionId = user.mencionId ?? null
      let status = 'Validado'

      const filters = {};

      if (premioId !== null) filters.premioId = premioId
      if (mencionId !== null) filters.mencionId = mencionId
      if(status === 'Validado') filters.status = status

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
      })
    }
  },
};
</script>

<style lang="scss" scoped>

</style>