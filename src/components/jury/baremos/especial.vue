<template>
  <div>
    <v-card-title class="primary white--text">
      <h4>BAREMO CATEGORÍA ESPECIAL</h4>
    </v-card-title>
      <v-card-text class="py-5">
        <v-expansion-panels>
          <v-expansion-panel>
            <v-expansion-panel-header> 
              <h3>ORIGINALIDAD</h3>
            </v-expansion-panel-header>
            <v-expansion-panel-content >
              <span class="mt-4">La solución propuesta no debe tener relación con otras soluciones planteadas, de esta manera se podrá respetar la propiedad intelectual de otros investigadores o innovadores.</span>
              <v-rating
                v-model="rating.originalidad"
                background-color="grey"
                color="amber lighten-1"
                hover
                size="30"
                length="3"
                value="0"
                clearable 
                :readonly="disabledRating"
                
              ></v-rating>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header> 
              <h3>IMPACTO SOCIAL</h3>
            </v-expansion-panel-header>
            <v-expansion-panel-content >
              <span class="mt-4">Impacto social en el país</span>
              <v-rating
                v-model="rating.impactosocial1"
                background-color="grey"
                color="amber lighten-1"
                hover
                size="30"
                length="3"
                value="0"
                clearable 
                :readonly="disabledRating"
                
              ></v-rating>
            </v-expansion-panel-content>
            <v-expansion-panel-content >
              <span class="mt-4">Impacto social fuera del país.</span>
              <v-rating
                v-model="rating.impactosocial2"
                background-color="grey"
                color="amber lighten-1"
                hover
                size="30"
                length="1"
                value="0"
                clearable 
                :readonly="disabledRating"
                
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
                :readonly="disabledRating"
                
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
                length="3"
                value="0"
                clearable 
                :readonly="disabledRating"
                
              ></v-rating>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header> 
              <h3>PRESENTACIÓN ANTE EL JURADO</h3>
            </v-expansion-panel-header>
            <v-expansion-panel-content >
              <span class="mt-4">Expone de forma clara la solución propuesta.</span>
              <v-rating
                v-model="rating.presentacionJurado1"
                background-color="grey"
                color="amber lighten-1"
                hover
                size="30"
                length="1"
                value="0"
                clearable 
                :readonly="disabledRating"
                
              ></v-rating>
            </v-expansion-panel-content>
            <v-expansion-panel-content >
              <span class="mt-4">Evaluar la operatividad de la solución propuesta</span>
              <v-rating
                v-model="rating.presentacionJurado2"
                background-color="grey"
                color="amber lighten-1"
                hover
                size="30"
                length="1"
                value="0"
                clearable 
                :readonly="disabledRating"
                
              ></v-rating>
            </v-expansion-panel-content>
            <v-expansion-panel-content >
              <span class="mt-4">Describe claramente los materiales o herramientas utilizadas para el desarrollo de la solución</span>
              <v-rating
                v-model="rating.presentacionJurado3"
                background-color="grey"
                color="amber lighten-1"
                hover
                size="30"
                length="1"
                value="0"
                clearable 
                :readonly="disabledRating"
                
              ></v-rating>
            </v-expansion-panel-content>
            <v-expansion-panel-content >
              <span class="mt-4">Responde de forma adecuada y pertinente a las preguntas elaboradas por el jurado/público</span>
              <v-rating
                v-model="rating.presentacionJurado4"
                background-color="grey"
                color="amber lighten-1"
                hover
                size="30"
                length="1"
                value="0"
                clearable 
                :readonly="disabledRating"
                
              ></v-rating>
            </v-expansion-panel-content>
            <v-expansion-panel-content >
              <span class="mt-4">Durante la presentación  se desenvuelve de forma fluida ante el jurado/público.</span>
              <v-rating
                v-model="rating.presentacionJurado5"
                background-color="grey"
                color="amber lighten-1"
                hover
                size="30"
                length="1"
                value="0"
                clearable 
                :readonly="disabledRating"
                
              ></v-rating>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header> 
              <h3>INSUMOS</h3>
            </v-expansion-panel-header>
            <v-expansion-panel-content >
              <span class="mt-4">Realizado en el País</span>
              <v-rating
                v-model="rating.insumos1"
                background-color="grey"
                color="amber lighten-1"
                hover
                size="30"
                length="2"
                value="0"
                clearable 
                :readonly="disabledRating"
                
              ></v-rating>
            </v-expansion-panel-content>
            <v-expansion-panel-content >
              <span class="mt-4">Utiliza herramientas o materiales nacionales.</span>
              <v-rating
                v-model="rating.insumos2"
                background-color="grey"
                color="amber lighten-1"
                hover
                size="30"
                length="2"
                value="0"
                clearable 
                :readonly="disabledRating"
                
              ></v-rating>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions class="d-flex">
        <v-btn
          class="ml-auto"
          color="primary"
          outlined
          @click="sendRating"
          :disabled="disabledRating"
        >
          Calificar
        </v-btn>
      </v-card-actions>
  </div>
</template>
<script>
export default {
  name: 'BaremoEspecial',
  props: {
    scoreReceived: {
      type: Array
    }
  },
  data() {
    return {
      rating: {},
      score: 0,
      disabledRating: false
    }
  },
  computed: {
    
    userId () {
      return this.$store.getters['Auth/user'].user.id
    }
  },
  mounted () {
    if (this.scoreReceived.length > 0) {
      const rating = {}

      this.scoreReceived.find(item => {
        if (item.createdBy.userId === this.userId) {
          const values = item.values
          Object.assign(rating, values)
          this.rating = rating
          this.disabledRating = true
        } else {
          this.rating = {}
        }
      })
    }
  },
  methods: {
    sendRating () {
      this.$emit('sendRating', this.rating)
    },
  }
}
</script>