<template>
  <v-card>
    <v-toolbar
      color="primary"
      dark
    >
      <v-icon  class="mr-3">mdi-download-circle</v-icon>
      <v-toolbar-title>Recaudos</v-toolbar-title>
    </v-toolbar>
    <!-- <v-data-table
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
    </v-data-table> -->
    <v-list >
 
        <v-divider></v-divider>

        <v-list-item>
          <!-- <v-list-item-avatar>
            <v-checkbo :src="item.avatar"></v-checkbo>
          </v-list-item-avatar> -->

          <v-list-item-content>
            <v-list-item-title> {{ this.files.cartaPostulacion }}</v-list-item-title>
          </v-list-item-content>
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
    mounted () {
      console.log('filePostulations', this.filePostulations);
    },    
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
        files: this.filePostulations,
      }
    },
  }
</script>
