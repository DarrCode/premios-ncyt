<template>
  <v-dialog
    v-model="dialog"
    width="700"
  >
    <v-card>
      <BaremoEspecial 
        v-if="premioId == 4"
        :scoreReceived="score"
        @sendRating="sendRating"
      />
      <BaremoLuisZambrano 
        v-if="premioId == 3"
        :scoreReceived="score"
        @sendRating="sendRating"
      />
      <BaremoMejorTrabajo 
        v-if="premioId == 2"
        :scoreReceived="score"
        @sendRating="sendRating"
      />
      <BaremoPremioNAcional 
        v-if="premioId == 1"
        :scoreReceived="score"
        @sendRating="sendRating"
      />
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
  name: 'ModalBaremo',
  components: {
    BaremoEspecial: () => import(/* webpackPrefetch: true */ '@/components/jury/baremos/especial'),
    BaremoLuisZambrano: () => import(/* webpackPrefetch: true */ '@/components/jury/baremos/luisZambrano'),
    BaremoMejorTrabajo: () => import(/* webpackPrefetch: true */ '@/components/jury/baremos/mejorTrabajo'),
    BaremoPremioNAcional: () => import(/* webpackPrefetch: true */ '@/components/jury/baremos/premioNacional')
  },
  data() {
    return {
      dialog: false,
      rating: {},
      postulationId: '',
      score: null,
      message: {
        title: '',
        color: '',
        snackbar: false
      }
    }
  },
  computed: {
    premioId () {
      return this.$store.getters['Auth/user'].user.premioId
    }
  },
  methods: {
    open(postulationId, score){
      this.dialog = true
      this.postulationId = postulationId
      this.score = score
    },
    sendRating(score, total) {
      const data = {
        route: 'api/postulaciones/saveScore',
        params: {
          'id': this.postulationId,
          score,
          total,
        }
      }

      http.post(data).then(response => {
        let {data} = response

        if (data.flag) {
          setTimeout(() => {
            this.$emit('reloadPostulations')
            this.dialog = false
          }, 3000)

          this.message.snackbar = true,
          this.message.title = data.msg
          this.message.color = 'success'
          
        } else {
          this.message.snackbar = true,
          this.message.title = data.msg
          this.message.color = 'error'
        }
      }).catch((err) => {
        this.message.snackbar = true,
        this.message.title = 'Ha ocurrido un error en el servidor'
        this.message.color = 'error'
        console.log('Ha ocurrido un error en el servidor', err);
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
