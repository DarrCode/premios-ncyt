<template>
  <v-dialog
    v-model="modal"
    width="500"
  >
    <v-card>
      <v-card-title class="primary white--text">
        <h4>Cambiar mención de la postulación</h4>
      </v-card-title>
      <v-card-text class="py-5">
        <v-select
          v-model="form.mencion"
          :items="mentions"
          item-text="name"
          label="Cambiar a"
          outlined
          class="mx-2"
          return-object
        ></v-select>
      </v-card-text>
      <v-card-actions>
        <v-btn 
          color="primary"
          @click="changeMancion"
        >
          Cambiar 
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
  name: 'DetailsPostulate',

  data() {
    return {
      modal:false,
      mentions: [],
      form: {},
      postulationId: '', 
      premioId: '',
      message: {
        title: '',
        color: '',
        snackbar: false
      }
    }
  },
  methods: {
    open(postulationId, premioId){
      this.modal = true
      this.postulationId = postulationId
      this.premioId = premioId
      this.getMentions()
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
          this.mentions = this.mentions.filter((element) => element.premio_id === this.premioId)
        }
      })
    },
    changeMancion() {
      const data = {
        route: 'api/postulaciones/changeMention',
        params: {
          id: this.postulationId,
          mencionId: this.form.mencion.id
        }
      }

      http.post(data).then(response => {
        let {data} = response

        if (data.flag) {
          this.modal = false
          this.$emit('reloadPostulation')
          this.form = {}
        } else {
          this.message.snackbar = true
          this.message.title = 'Ha ocurrido un error'
          this.message.color = 'error'
        }
      }).catch((err) => {
        this.message.snackbar = true
        this.message.title = 'Ha ocurrido un error'
        this.message.color = 'error'
        console.log(err);
      })
    }
  }
}
</script>