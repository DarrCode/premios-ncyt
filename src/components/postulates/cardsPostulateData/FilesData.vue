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
      <v-list-item v-if="files.cartaPostulacion">
        <v-list-item-content>
          <v-list-item-title> {{ files.cartaPostulacion ? 'Carta de Postulación' : '' }}</v-list-item-title>
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
      <v-divider v-if="files.cartaPostulacion"></v-divider>

      <v-list-item v-if="files.cedula">
        <v-list-item-content>
          <v-list-item-title> {{ files.cedula ? 'Cédula de Identidad' : '' }}</v-list-item-title>
        </v-list-item-content>
        <v-list-item-action v-if="files.cedula">
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
      <v-divider v-if="files.cedula"></v-divider>
      <v-list-item v-if="menciones.PresentacionDescriptiva">
        <v-list-item-content>
          <v-list-item-title> {{ menciones.PresentacionDescriptiva ? 'Presentacion descriptiva' : ''}}</v-list-item-title>
        </v-list-item-content>
        <v-list-item-action v-if="menciones.PresentacionDescriptiva">
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
        <v-divider v-if="menciones.PresentacionDescriptiva"></v-divider>
        <v-list-item v-if="menciones.copiaTrabajo">
        <v-list-item-content>
          <v-list-item-title> {{ menciones.copiaTrabajo ? 'Copia de Trabajo' : ''}}</v-list-item-title>
        </v-list-item-content>
        <v-list-item-action v-if="menciones.copiaTrabajo">
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
        <v-divider v-if="menciones.copiaTrabajo"></v-divider>
        <v-list-item v-if="menciones.documentExel">
          <v-list-item-content>
            <v-list-item-title> {{ menciones.documentExel ? 'Documento Excel' : ''}}</v-list-item-title>
          </v-list-item-content>
          <v-list-item-action v-if="menciones.documentExel">
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
      <v-divider v-if="menciones.documentExel"></v-divider>
      <v-list-item v-if="menciones.videoDemostrativo">
        <v-list-item-content>
          <v-list-item-title> {{ menciones.videoDemostrativo ? 'Video demostrativo' : ''}}</v-list-item-title>
        </v-list-item-content>
        <v-list-item-action v-if="menciones.videoDemostrativo">
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
      <v-divider v-if="menciones.videoDemostrativo"></v-divider>
      <v-list-item v-if="menciones.cartaAutorizacion">
        <v-list-item-content>
          <v-list-item-title> {{ menciones.cartaAutorizacion ? 'Video demostrativo' : ''}}</v-list-item-title>
        </v-list-item-content>
        <v-list-item-action v-if="menciones.cartaAutorizacion">
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
      menciones(){
        let menciones = {}
        
        if (this.files.menciones48) {
          menciones = this.files.menciones48
        } else if (this.files.menciones910) {
          menciones = this.files.menciones910
        } else if (this.files.menciones1113) {
          menciones = this.files.menciones1113
        } else if (this.files.menciones13) {
          menciones = this.files.menciones13
        }
        return menciones
      }
    },
    data () {
      return {
        files: this.filePostulations,
      }
    },
  }
</script>
