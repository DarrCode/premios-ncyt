<template>
    <v-card>
        <v-toolbar
            color="cyan lighten-1"
            dark
            class="mb-3">
            <v-icon large class="mr-3">mdi-download-circle</v-icon>
            <v-toolbar-title>Recaudos</v-toolbar-title>

            <v-spacer></v-spacer>
        </v-toolbar>
        <v-data-table
            :headers="headers"
            :items="desserts"
            :header-color="headerColor"
            :search="search"
        >

        <template v-slot:[`item.actions`]="{ }">
            <v-tooltip right color="green darken-1">
                <template v-slot:activator="{ on, attrs }">
                    <v-btn
                        elevation="3"
                        fab
                        small
                        v-bind="attrs"
                        v-on="on"
                        color="green darken-1">      
                        <v-icon style="color:white">
                            mdi-download
                        </v-icon>
                    </v-btn>
                </template>
                <span>Descargar</span>
            </v-tooltip>
        </template>
    
        </v-data-table>
    </v-card>
</template>

<script>
  export default {
    data () {
      return {
        search: '',
        headerColor: 'cyan lighten-1',
        headers: [

          {text: 'ID', value: 'id',},
          { text: 'Tipo', value: 'type' },
          { text: 'Nombre Archivo', value: 'nameFile' },
          { text: 'Fecha de Carga', value: 'dateUpload' },
          { text: 'Acciones', value: 'actions' },

        ],
        desserts: [
          {
            id: 1,
            type: 'Cédula',
            nameFile: 'Cédula.pdf',
            dateUpload: '10/11/2023',
          },
          {
            id: 2,
            type: 'Certificación Bancaria',
            nameFile: 'Certificación-Bancaria.pdf',
            dateUpload: '10/11/2023',
          },
          {
            id: 3,
            type: 'Foto Carnet',
            nameFile: 'Foto-Carnet.png',
            dateUpload: '10/11/2023',
          },
          {
            id: 4,
            type: 'Título Académico',
            nameFile: 'Título-Académico.png',
            dateUpload: '10/11/2023',
          },
        ],
      }
    },
  }
</script>

<style scoped>
/* .v-data-table >>> .v-data-table-header {
  background-color: red !important;
} */
</style>