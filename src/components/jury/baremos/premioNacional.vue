<template>
  <div>
    <v-card-title class="primary white--text">
        <h4>BAREMO PREMIO NACIONAL</h4>
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
                v-model="rating.general1"
                background-color="grey"
                color="amber lighten-1"
                hover
                size="30"
                length="2"
                value="0"
                clearable 
                :readonly="scoreReceived"
                @input="addRating(rating)"
              ></v-rating>
            </v-expansion-panel-content>
            <v-expansion-panel-content >
              <span class="mt-4">Cooperación internacional</span>
              <v-rating
                v-model="rating.general2"
                background-color="grey"
                color="amber lighten-1"
                hover
                size="30"
                length="1"
                value="0"
                clearable 
                :readonly="scoreReceived"
                @input="addRating(rating)"
              ></v-rating>
            </v-expansion-panel-content>
            <v-expansion-panel-content >
              <span class="mt-4">Entre uno y tres trabajos realizados que cumplan con todos los requisitos exigidos</span>
              <v-rating
                v-model="rating.general3"
                background-color="grey"
                color="amber lighten-1"
                hover
                size="30"
                length="1"
                value="0"
                clearable 
                :readonly="scoreReceived"
                @input="addRating(rating)"
              ></v-rating>
            </v-expansion-panel-content>
            <v-expansion-panel-content >
              <span class="mt-4">Mas de tres trabajos realizados que cumplan todos los requisitos exigidos</span>
              <v-rating
                v-model="rating.general4"
                background-color="grey"
                color="amber lighten-1"
                hover
                size="30"
                length="2"
                value="0"
                clearable 
                :readonly="scoreReceived"
                @input="addRating(rating)"
              ></v-rating>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header> 
              <h3>Aporte al conocimiento</h3>
            </v-expansion-panel-header>
            <v-expansion-panel-content >
              <span class="mt-4">Originalidad</span>
              <v-rating
                v-model="rating.aporte1"
                background-color="grey"
                color="amber lighten-1"
                hover
                size="30"
                length="2"
                value="0"
                clearable 
                :readonly="scoreReceived"
                @input="addRating(rating)"
              ></v-rating>
            </v-expansion-panel-content>
            <v-expansion-panel-content >
              <span class="mt-4">Profundidad (Nivel cognitivo del abordaje) </span>
              <v-rating
                v-model="rating.aporte2"
                background-color="grey"
                color="amber lighten-1"
                hover
                size="30"
                length="2"
                value="0"
                clearable 
                :readonly="scoreReceived"
                @input="addRating(rating)"
              ></v-rating>
            </v-expansion-panel-content>
            <v-expansion-panel-content >
              <span class="mt-4">Rigurosidad (Consistencia en los procedimientos. Uso de la literatura)</span>
              <v-rating
                v-model="rating.aporte3"
                background-color="grey"
                color="amber lighten-1"
                hover
                size="30"
                length="2"
                value="0"
                clearable 
                :readonly="scoreReceived"
                @input="addRating(rating)"
              ></v-rating>
            </v-expansion-panel-content>
            <v-expansion-panel-content >
              <span class="mt-4">Trascendencia</span>
              <v-rating
                v-model="rating.aporte4"
                background-color="grey"
                color="amber lighten-1"
                hover
                size="30"
                length="2"
                value="0"
                clearable 
                :readonly="scoreReceived"
                @input="addRating(rating)"
              ></v-rating>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header> 
              <h3>Impacto social</h3>
            </v-expansion-panel-header>
            <v-expansion-panel-content >
              <span class="mt-4">Escala de impacto: local, regional, nacional, internacional</span>
              <v-rating
                v-model="rating.impacto1"
                background-color="grey"
                color="amber lighten-1"
                hover
                size="30"
                length="2"
                value="0"
                clearable 
                :readonly="scoreReceived"
                @input="addRating(rating)"
              ></v-rating>
            </v-expansion-panel-content>
            <v-expansion-panel-content >
              <span class="mt-4">Resuelve un problema</span>
              <v-rating
                v-model="rating.impacto2"
                background-color="grey"
                color="amber lighten-1"
                hover
                size="30"
                length="2"
                value="0"
                clearable 
                :readonly="scoreReceived"
                @input="addRating(rating)"
              ></v-rating>
            </v-expansion-panel-content>
            <v-expansion-panel-content >
              <span class="mt-4">Contribuye a la solución de un problema</span>
              <v-rating
                v-model="rating.impacto3"
                background-color="grey"
                color="amber lighten-1"
                hover
                size="30"
                length="1"
                value="0"
                clearable 
                :readonly="scoreReceived"
                @input="addRating(rating)"
              ></v-rating>
            </v-expansion-panel-content>
            <v-expansion-panel-content >
              <span class="mt-4">Corrobora una solución</span>
              <v-rating
                v-model="rating.impacto4"
                background-color="grey"
                color="amber lighten-1"
                hover
                size="30"
                length="1"
                value="0"
                clearable 
                :readonly="scoreReceived"
                @input="addRating(rating)"
              ></v-rating>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
    </v-card-text>
    <v-divider></v-divider>
    <v-card-actions class="d-flex">
      <h4 class="ml-auto">Total: {{ score }} puntos</h4>
      <v-btn
        class="ml-auto"
        color="primary"
        outlined
        @click="sendRating"
        :disabled="scoreReceived"
      >
        Calificar
      </v-btn>
    </v-card-actions>
  </div>
</template>
<script>
export default {
  name: 'BaremoPremioNacional',
  props: {
    scoreReceived: {
      type: Object
    }
  },
  data() {
    return {
      rating: {},
      score: 0
    }
  },
  mounted () {
    if (this.scoreReceived) {
      this.rating = this.scoreReceived
      this.score = (parseInt(this.rating.general1) || 0) + (parseInt(this.rating.general2) || 0) + (parseInt(this.rating.general3) || 0) + (parseInt(this.rating.general4) || 0) + (parseInt(this.rating.aporte1) || 0) + (parseInt(this.rating.aporte2) || 0) + (parseInt(this.rating.aporte3) || 0) + (parseInt(this.rating.aporte4) || 0) + (parseInt(this.rating.impacto1) || 0) + (parseInt(this.rating.impacto2) || 0) + (parseInt(this.rating.impacto3) || 0) + (parseInt(this.rating.impacto4) || 0);
    }
  },
  methods: {
    addRating(rating){ 
      this.score = (parseInt(rating.general1) || 0) + (parseInt(rating.general2) || 0) + (parseInt(rating.general3) || 0) + (parseInt(rating.general4) || 0) + (parseInt(rating.aporte1) || 0) + (parseInt(rating.aporte2) || 0) + (parseInt(rating.aporte3) || 0) + (parseInt(rating.aporte4) || 0) + (parseInt(rating.impacto1) || 0) + (parseInt(rating.impacto2) || 0) + (parseInt(rating.impacto3) || 0) + (parseInt(rating.impacto4) || 0);
    },
    sendRating () {
      this.$emit('sendRating', this.rating, this.score)
    }
  }
}
</script>