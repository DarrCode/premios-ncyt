<template>
  <v-card>
    <v-toolbar
        color="primary"
        dark
    >
      <v-icon  class="mr-3">mdi-download-circle</v-icon>
      <v-toolbar-title>Recaudos</v-toolbar-title>

      <v-spacer></v-spacer>
    </v-toolbar>
    <v-data-table
      :headers="headers"
      :items="desserts"
      :header-color="headerColor"
      :search="search"
    >

      <template v-slot:[`item.actions`]="{item}">
        <div class="d-flex">

          <v-simple-checkbox
            v-model="item.glutenfree"
            class="mr-3"
            color="info"
          ></v-simple-checkbox>
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
        </div>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
  export default {
    data () {
      return {
        search: '',
        ex4: true,
        headerColor: 'primary',
        headers: [

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
            glutenfree: false,
          },
          {
            id: 2,
            type: 'Certificación Bancaria',
            nameFile: 'Certificación-Bancaria.pdf',
            dateUpload: '10/11/2023',
            glutenfree: false,
          },
          {
            id: 3,
            type: 'Foto Carnet',
            nameFile: 'Foto-Carnet.png',
            dateUpload: '10/11/2023',
            glutenfree: false,
          },
          {
            id: 4,
            type: 'Título Académico',
            nameFile: 'Título-Académico.png',
            dateUpload: '10/11/2023',
            glutenfree: false,
          },
        ],
      }
    },
  }
</script>
