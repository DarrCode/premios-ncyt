<template>
  <v-card>
    <v-toolbar
      color="primary"
      dark
    >
      <v-icon  class="mr-3">mdi-download-circle</v-icon>
      <v-toolbar-title>Recaudos</v-toolbar-title>
    </v-toolbar>
    <v-list v-if="checkList.length">
      <v-list-item v-for="(file, index) in filePostulations" :key="index">
        <v-list-item-content>
          <v-list-item-title> {{ file.name }}</v-list-item-title>
        </v-list-item-content>
        <v-list-item-action>
            <v-checkbox 
              v-model="checkList[index].checked" @change="checkFile(index, $event, 'local')"
              :disabled="checkList[index].disabled"
            ></v-checkbox>
        </v-list-item-action>
        <v-list-item-action>
          <v-btn
            elevation="3"
            fab
            small
            color="success"
            class="ml-5"
            @click="fileDownload(file.fileUrl, file.name)"
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
  import http from "@/api/api.js"

  export default {
    props: {
      filePostulations: {
        type: Array
      },
      checkedList: {
        type: Array
      }
    },
    data () {
      return {
        checkList: [],
        disabled: false
      }
    },
    watch:{
      filePostulations: function() { 
        this.checkList = [];
        if (this.checkedList.length) {
          this.checkList = this.checkedList.map(val => {
            if (val.checked) {
              return {
                ...val,
                disabled:true
              }
            }
            return val
          });
        } else {
          for (const index in this.filePostulations) {
            this.checkList.push({index, checked:false})
            this.disabled = false
          }
        }
        
      }
    },

    mounted(){
      this.checkList = [];
      if (this.checkedList.length) {
          this.checkList = this.checkedList.map(val => {
            if (val.checked) {
              return {
                ...val,
                disabled:true
              }
            }
            return val
          });
        } else {
          for (const index in this.filePostulations) {
            this.checkList.push({index, checked:false})
            this.disabled = false
          }
        }        
    },

    methods: {
      fileDownload(url, name) {
        const data = {
          route: 'api/postulaciones/download',
          params: {
            'fileUrl': url
          }
          
        }
        http.post(data).then(response => {
          let {data} = response
          if (data.flag) {
            
            // PREVISUALIZAR
            /* const blob = this.base64ToBlob( base64, 'application/pdf' );
            const url = URL.createObjectURL( blob );
            const pdfWindow = window.open("");
            pdfWindow.document.write("<iframe width='100%' height='100%' src='" + url + "'></iframe>");
            console.log("dataIf", data); */
            
            // DESCARGAR
            let base64 = data.data
            const blob = this.base64ToBlob(base64)
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = `${name}`;
            link.click();
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
      },

      checkFile(index, checked = false, local) {
        if(local === 'local'){
          this.checkList[index].checked = false
        }
        let searchCheck = this.checkList.find(val => val.index == index)
        searchCheck ? searchCheck.checked = checked : null
        this.$emit('changeCheckList', this.checkList) 
      }
    }
  }
</script>

<style>
  .myCheckbox{
    margin: 8px 8px 0px 0px !important;
  }

</style>
