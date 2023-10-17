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
            color="primary"
            @click="fileDownload(files.cartaPostulacion, 'Carta de Postulacion')"
          >
            <v-icon style="color:white">
              mdi-eye
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
            color="primary"
            @click="fileDownload(files.cedula, 'Cedula de Identidad')"
          >
            <v-icon style="color:white">
              mdi-eye
            </v-icon>
          </v-btn>
        </v-list-item-action>
      </v-list-item>
      <v-divider v-if="files.cedula"></v-divider>
      <v-list-item v-if="menciones.curriculum">
        <v-list-item-content>
          <v-list-item-title> {{ menciones.curriculum ? 'Curriculum' : '' }}</v-list-item-title>
        </v-list-item-content>
        <v-list-item-action v-if="menciones.curriculum">
          <v-btn
            elevation="3"
            fab
            small
            color="primary"
            @click="fileDownload(menciones.curriculum, 'Curriculum')"
          >
            <v-icon style="color:white">
              mdi-eye
            </v-icon>
          </v-btn>
        </v-list-item-action>
      </v-list-item>
      <v-divider v-if="menciones.curriculum"></v-divider>
      <v-list-item v-if="menciones.listaPostulados">
        <v-list-item-content>
          <v-list-item-title> {{ menciones.listaPostulados ? 'Lista de postulados' : '' }}</v-list-item-title>
        </v-list-item-content>
        <v-list-item-action v-if="menciones.listaPostulados">
          <v-btn
            elevation="3"
            fab
            small
            color="primary"
            @click="fileDownload(menciones.listaPructos, 'Lista de postulados')"
          >
            <v-icon style="color:white">
              mdi-eye
            </v-icon>
          </v-btn>
        </v-list-item-action>
      </v-list-item>
      <v-list-item v-if="menciones.listaPructos">
        <v-list-item-content>
          <v-list-item-title> {{ menciones.listaPructos ? 'Lista de productos' : '' }}</v-list-item-title>
        </v-list-item-content>
        <v-list-item-action v-if="menciones.listaPructos">
          <v-btn
            elevation="3"
            fab
            small
            color="primary"
            @click="fileDownload(menciones.listaPructos, 'Lista de productos')"
          >
            <v-icon style="color:white">
              mdi-eye
            </v-icon>
          </v-btn>
        </v-list-item-action>
      </v-list-item>
      <v-divider v-if="menciones.listaPructos"></v-divider>
      <v-list-item v-if="menciones.titulo">
        <v-list-item-content>
          <v-list-item-title> {{ menciones.titulo ? 'Titulo' : '' }}</v-list-item-title>
        </v-list-item-content>
        <v-list-item-action v-if="menciones.titulo">
          <v-btn
            elevation="3"
            fab
            small
            color="primary"
            @click="fileDownload(menciones.titulo, 'Titulo')"
          >
            <v-icon style="color:white">
              mdi-eye
            </v-icon>
          </v-btn>
        </v-list-item-action>
      </v-list-item>
      <v-divider v-if="menciones.titulo"></v-divider>
      <v-list-item v-if="menciones.PresentacionDescriptiva">
        <v-list-item-content>
          <v-list-item-title> {{ menciones.PresentacionDescriptiva ? 'Presentación descriptiva' : ''}}</v-list-item-title>
        </v-list-item-content>
        <v-list-item-action v-if="menciones.PresentacionDescriptiva">
          <v-btn
            elevation="3"
            fab
            small
            color="primary"
            @click="fileDownload(menciones.PresentacionDescriptiva, 'Presentacion descriptiva')"
          >
            <v-icon style="color:white">
              mdi-eye
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
            color="primary"
            @click="fileDownload(menciones.copiaTrabajo, 'Copia de Trabajo')"
          >
            <v-icon style="color:white">
              mdi-eye
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
              color="primary"
              @click="fileDownload(menciones.documentExel, 'Documento Excel')"
            >
              <v-icon style="color:white">
                mdi-eye
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
            color="primary"
            @click="fileDownload(menciones.videoDemostrativo, 'Video demostrativo')"
          >
            <v-icon style="color:white">
              mdi-eye
            </v-icon>
          </v-btn>
        </v-list-item-action>
      </v-list-item>
      <v-divider v-if="menciones.videoDemostrativo"></v-divider>
      <v-list-item v-if="menciones.cartaAutorizacion">
        <v-list-item-content>
          <v-list-item-title> {{ menciones.cartaAutorizacion ? 'Carta de autorización' : ''}}</v-list-item-title>
        </v-list-item-content>
        <v-list-item-action v-if="menciones.cartaAutorizacion">
          <v-btn
            elevation="3"
            fab
            small
            color="primary"
            @click="fileDownload(menciones.cartaAutorizacion, 'Carta de autorizacion')"
          >
            <v-icon style="color:white">
              mdi-eye
            </v-icon>
          </v-btn>
        </v-list-item-action>
      </v-list-item>
      <v-list-item v-if="menciones.documentoAcreditable">
        <v-list-item-content>
          <v-list-item-title> {{ menciones.documentoAcreditable ? 'Documento Acreditable' : ''}}</v-list-item-title>
        </v-list-item-content>
        <v-list-item-action v-if="menciones.documentoAcreditable">
          <v-btn
            elevation="3"
            fab
            small
            color="primary"
            @click="fileDownload(menciones.documentoAcreditable, 'Documento Acreditable')"
          >
            <v-icon style="color:white">
              mdi-eye
            </v-icon>
          </v-btn>
        </v-list-item-action>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
  import http from "@/api/api.js"

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
    methods: {
      fileDownload(file) {
        const data = {
          route: 'api/postulaciones/download',
          params: {
            'fileUrl': file
          }
          
        }
        http.post(data).then(response => {
          let {data} = response
          console.log("data", data);
          if (data.flag) {
						let base64 = data.data

            const blob = this.base64ToBlob( base64, 'application/pdf' );
            const url = URL.createObjectURL( blob );
            const pdfWindow = window.open("");
            pdfWindow.document.write("<iframe width='100%' height='100%' src='" + url + "'></iframe>");
          }
        })
      },
      base64ToBlob( base64, type = "application/octet-stream" ) {
        const binStr = atob( base64 );
        const len = binStr.length;
        const arr = new Uint8Array(len);
        for (let i = 0; i < len; i++) {
          arr[ i ] = binStr.charCodeAt( i );
        }
        return new Blob( [ arr ], { type: type } );
      }
    }
  }
</script>
