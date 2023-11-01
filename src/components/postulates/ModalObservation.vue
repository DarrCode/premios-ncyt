<template>
  <div class="text-center">
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <v-card>
        <v-card-title class="primary white--text">
          <h3>Observación</h3>
        </v-card-title>

        <v-card-text>
          <v-container>
            <v-row>
              <v-col
                cols="12"
                md="12"
              >
                <v-textarea
                v-model="observation"
                  outlined
                  name="input-7-4"
                  label="Observación"
                  hint="Ingrese la observación"
                ></v-textarea>
              </v-col>
            </v-row>
          </v-container>
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
  </div>
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
      checkList: [],
      status: '',
      observation: '',
      message: {
        title: '',
        color: '',
        snackbar: false
      }
    };
  },

  methods: {
    open(status, checkList){
      this.dialog = true;
      this.status = status
      this.checkList = checkList
    },

    changeStatus(id, status, observation) {
      const data = {
        route: 'api/postulaciones/changeStatus',
        params: {
          id,
          status,
          observation,
          checkList: this.checkList
        }
      }
      http.post(data).then(response => {
        let {data} = response

        if (data.flag) {
          setTimeout(() => {
            this.dialog = false
            this.observation = null
            this.checkList = [];
            this.$emit('reloadPostulation');
          }, 4000);
          this.message.snackbar = true,
          this.message.title = data.msg
          this.message.color = 'success'
        }
      })
		}
  },
};
</script>

<style lang="scss" scoped>

</style>