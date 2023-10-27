<template>
  <v-dialog
    v-model="dialog"
    width="700"
  >
    <v-card>
      <v-card-title class="primary white--text">
        <h3>Calificar</h3>
      </v-card-title>
      <v-card-text class="py-5">
        <v-expansion-panels>
          <v-expansion-panel>
            <v-expansion-panel-header> 
              <h3>General</h3>
            </v-expansion-panel-header>
            <v-expansion-panel-content >
              <span class="mt-4">Realizados en el país</span>
              
              <v-rating
                v-model="rating.realizadoPais"
                background-color="grey"
                color="amber lighten-1"
                hover
                size="33"
                length="2"
                value="0"
                clearable
              ></v-rating>
            </v-expansion-panel-content>
            <v-expansion-panel-content >
              <span class="mt-4">Cooperación internacional</span>
              <v-rating
                v-model="rating.cooperation"
                background-color="grey"
                color="amber lighten-1"
                hover
                size="33"
                length="1"
                value="0"
              ></v-rating>
            </v-expansion-panel-content>
            <v-expansion-panel-content >
              <span class="mt-4">Entre uno y tres trabajos realizados que cumplan con todos los requisitos exigidos</span>
              <v-rating
                v-model="rating.entreUnoTres"
                background-color="grey"
                color="amber lighten-1"
                hover
                size="33"
                length="1"
                value="0"
              ></v-rating>
            </v-expansion-panel-content>
            <v-expansion-panel-content >
              <span class="mt-4">Mas de tres trabajos realizados que cumplan todos los requisitos exigidos</span>
              <v-rating
                v-model="rating.entreMasTres"
                background-color="grey"
                color="amber lighten-1"
                hover
                size="33"
                length="2"
                value="0"
              ></v-rating>
            </v-expansion-panel-content>
            
          </v-expansion-panel>
        </v-expansion-panels>
        
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="primary"
          text
          @click="changeStatus(detailPostulate.postulacion._id, status, observation)"
        >
          Enviar
      </v-btn>
      </v-card-actions>
    </v-card>
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
  </v-dialog>
</template>

<script>
import http from "@/api/api.js"

export default {
  name: 'ModalObservation',
  props:{
    detailPostulate:{
      type: Object
    }
  },
  data() {
    return {
      dialog: false,
      rating: {
        general: 0,
        cooperation: 0
      },
      message: {
        title: '',
        color: '',
        snackbar: false
      }
    }
  },
  methods: {
    open(){
      this.dialog = true
    },
    changeStatus(id, status, observation) {
      const data = {
        route: 'api/postulaciones/changeStatus',
        params: {
          'id': id,
          'status': status,
          'observation': observation
        }
      }
      http.post(data).then(response => {
        let {data} = response
        console.log("data",data);

        if (data.flag) {
          setTimeout(() => {
            this.dialog = false
            this.observation = null
            this.$emit('reloadPostulation');
          }, 4000);
          this.message.snackbar = true,
          this.message.title = data.msg
          this.message.color = 'success'
        }
      })
		}
  }
}
</script>
<style>
  .v-expansion-panel-header{
    font-size: 20px;
  }
  .v-expansion-panel-content {
    font-size: 18px;
  }
  .v-expansion-panel-content__wrap {
    display: flex;
    justify-content: space-between;

  }
</style>
