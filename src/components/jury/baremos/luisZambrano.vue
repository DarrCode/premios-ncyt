<template>
  <div>
    <v-card-title class="primary white--text">
        <h4>BAREMO LUIS ZAMBRANO</h4>
      </v-card-title>
      <v-card-text class="py-5">
        <v-expansion-panels>
          <v-expansion-panel>
            <v-expansion-panel-header> 
              <h3>ORIGINALIDAD</h3>
            </v-expansion-panel-header>
            <v-expansion-panel-content >
              <span class="mt-4">La solución propuesta no debe tener relación con otros diseños planteados, de esta manera se podrá respetar la propiedad intelectual de otros científicos innovadores / investigadores innovadores</span>
              
              <v-rating
                v-model="rating.originalidad1"
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
              <span class="mt-4">La solución debe tener un sello particular de su creador, que pueda distinguir entre otros diseños</span>
              <v-rating
                v-model="rating.originalidad2"
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
              <h3>VIABILIDAD</h3>
            </v-expansion-panel-header>
            <v-expansion-panel-content >
              <span class="mt-4">La solución debe responder de forma óptima y segura al diseño planteado</span>
              <v-rating
                v-model="rating.viabilidad1"
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
              <span class="mt-4">La solución debe responder a todas las necesidades planteadas en sus objetivos</span>
              <v-rating
                v-model="rating.viabilidad2"
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
              <h3>UTILIDAD/FACTIBILIDAD</h3>
            </v-expansion-panel-header>
            <v-expansion-panel-content >
              <span class="mt-4">Contribuye a la solución de un problema</span>
              <v-rating
                v-model="rating.utilidad1"
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
              <span class="mt-4">Resuelve un problema</span>
              <v-rating
                v-model="rating.utilidad2"
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
                v-model="rating.utilidad3"
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
              <span class="mt-4">El costo de la solución debe ser real (relación costo- beneficio) se debe solicitar</span>
              <v-rating
                v-model="rating.utilidad4"
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
          <v-expansion-panel>
            <v-expansion-panel-header> 
              <h3>DEFENSA DEL PROYECTO ANTE EL JURADO</h3>
            </v-expansion-panel-header>
            <v-expansion-panel-content >
              <span class="mt-4">Expone de forma clara la solución propuesta</span>
              <v-rating
                v-model="rating.defensaJurado1"
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
              <span class="mt-4">Evaluar la operatividad de la solución</span>
              <v-rating
                v-model="rating.defensaJurado2"
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
              <span class="mt-4">Describe claramente los materiales o herramientas utilizados para el desarrollo de la solución</span>
              <v-rating
                v-model="rating.defensaJurado3"
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
              <span class="mt-4">Responde de forma adecuada y pertinente a las preguntas elaboradas por el jurado/público</span>
              <v-rating
                v-model="rating.defensaJurado4"
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
              <span class="mt-4">Durante la presentación  se desenvuelve de forma fluida ante el jurado/público.</span>
              <v-rating
                v-model="rating.defensaJurado5"
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
          <v-expansion-panel>
            <v-expansion-panel-header> 
              <h3>ELABORACIÓN DEL DISEÑO</h3>
            </v-expansion-panel-header>
            <v-expansion-panel-content >
              <span class="mt-4">Realizado en el País</span>
              <v-rating
                v-model="rating.elaboracionDiseno1"
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
              <span class="mt-4">Utiliza herramientas o materiales nacionales</span>
              <v-rating
                v-model="rating.elaboracionDiseno2"
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
  name: 'BaremoLuisZambrano',
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
      this.score = (parseInt(this.rating.originalidad1) || 0) + (parseInt(this.rating.originalidad2) || 0) + (parseInt(this.rating.viabilidad1) || 0) + (parseInt(this.rating.viabilidad2) || 0) + (parseInt(this.rating.utilidad1) || 0) + (parseInt(this.rating.utilidad2) || 0) + (parseInt(this.rating.utilidad3) || 0) + (parseInt(this.rating.utilidad4) || 0) + (parseInt(this.rating.defensaJurado1) || 0) + (parseInt(this.rating.defensaJurado2) || 0) + (parseInt(this.rating.defensaJurado3) || 0) + (parseInt(this.rating.defensaJurado4) || 0) + (parseInt(this.rating.defensaJurado5) || 0) + (parseInt(this.rating.elaboracionDiseno1) || 0) + (parseInt(this.rating.elaboracionDiseno2) || 0)
    }
  },
  methods: {
    addRating(rating){ 
      this.score = (parseInt(rating.originalidad1) || 0) + (parseInt(rating.originalidad2) || 0) + (parseInt(rating.viabilidad1) || 0) + (parseInt(rating.viabilidad2) || 0) + (parseInt(rating.utilidad1) || 0) + (parseInt(rating.utilidad2) || 0) + (parseInt(rating.utilidad3) || 0) + (parseInt(rating.utilidad4) || 0) + (parseInt(rating.defensaJurado1) || 0) + (parseInt(rating.defensaJurado2) || 0) + (parseInt(rating.defensaJurado3) || 0) + (parseInt(rating.defensaJurado4) || 0) + (parseInt(rating.defensaJurado5) || 0) + (parseInt(rating.elaboracionDiseno1) || 0) + (parseInt(rating.elaboracionDiseno2) || 0)
    },
    sendRating () {
      this.$emit('sendRating', this.rating, this.score)
    }
  }
}
</script>