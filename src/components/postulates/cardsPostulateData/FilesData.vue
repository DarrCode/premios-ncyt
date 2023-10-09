<template>
  <v-card>
    <v-toolbar
      color="primary"
      dark
    >
      <v-icon  class="mr-3">mdi-download-circle</v-icon>
      <v-toolbar-title>Recaudos</v-toolbar-title>
    </v-toolbar>
  
    <v-list >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title> {{ this.files.cartaPostulacion ? 'Carta de Postulación' : '' }}</v-list-item-title>
        </v-list-item-content>
        <v-list-item-action v-if="files.cartaPostulacion">
          <v-btn
            elevation="3"
            fab
            small
            color="green darken-1"
          >
            <v-icon style="color:white">
              mdi-download
            </v-icon>
          </v-btn>
        </v-list-item-action>
        
      </v-list-item>
      <v-divider></v-divider>

      <v-list-item>
        <v-list-item-content>
          <v-list-item-title> {{ this.files.cedula ? 'Cédula de Identidad' : '' }}</v-list-item-title>
        </v-list-item-content>
        <v-list-item-action v-if="files.cartaPostulacion">
          <v-btn
            elevation="3"
            fab
            small
            color="green darken-1"
          >
            <v-icon style="color:white">
              mdi-download
            </v-icon>
          </v-btn>
        </v-list-item-action>
        
      </v-list-item>
      <v-divider></v-divider>
      {{ menciones48 }}
      <v-list-item v-for="(mencion48, index) in menciones48" :key="index">
        <v-list-item-content>
          <v-list-item-title> {{ mencion48.copiaTrabajo ? 'Copia de Trabajo' : ''}}</v-list-item-title>
        </v-list-item-content>
        <v-list-item-action v-if="files.cartaPostulacion">
          <v-btn
            elevation="3"
            fab
            small
            color="green darken-1"
          >
            <v-icon style="color:white">
              mdi-download
            </v-icon>
          </v-btn>
        </v-list-item-action>
        
      </v-list-item>
      <v-divider></v-divider>

      <v-list-item>
        <!-- <v-list-item-avatar>
          <v-checkbo :src="item.avatar"></v-checkbo>
        </v-list-item-avatar> -->
        <v-list-item-content>
          <v-list-item-title> {{ this.files.cartaPostulacion ? 'Documento Excel' : '' }}</v-list-item-title>
        </v-list-item-content>
        <v-list-item-action v-if="files.cartaPostulacion">
          <v-btn
            elevation="3"
            fab
            small
            color="green darken-1"
          >
            <v-icon style="color:white">
              mdi-download
            </v-icon>
          </v-btn>
        </v-list-item-action>
        
      </v-list-item>
      <v-divider></v-divider>

      <v-list-item>
        <!-- <v-list-item-avatar>
          <v-checkbo :src="item.avatar"></v-checkbo>
        </v-list-item-avatar> -->
        <v-list-item-content>
          <v-list-item-title> {{ this.files.cartaPostulacion ? 'Documento Acreditable' : '' }}</v-list-item-title>
        </v-list-item-content>
        <v-list-item-action v-if="files.cartaPostulacion">
          <v-btn
            elevation="3"
            fab
            small
            color="green darken-1"
          >
            <v-icon style="color:white">
              mdi-download
            </v-icon>
          </v-btn>
        </v-list-item-action>
        
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
  export default {
    props: {
      filePostulations: {
        type: Object
      }
    },

    computed:{
      menciones48(){
        let menciones48 = []
        let m48 = menciones48.push(this.files?.menciones48)
        return m48
      }
    },

    mounted () {
      console.log('filePostulations', this.filePostulations);
    },    
    data () {
      return {
        files: this.filePostulations,
      }
    },
  }
</script>
