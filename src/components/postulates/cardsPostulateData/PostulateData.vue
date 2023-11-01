<template>
  <v-card>
    <v-toolbar
      color="primary"
      dark
    >
      <v-icon class="mr-3">mdi-rename</v-icon>
      <v-toolbar-title>Datos de la Postulación</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-list>
      <v-list-item-group active-class="primary--text">
        <template v-for="(item, index) in colsData">
          <v-list-item :key="item.title">
            <v-list-item-content>
              <v-list-item-title>
                <v-icon class="my-auto" v-text="item.icon"></v-icon>
                {{ item.title }}
              </v-list-item-title>
              <v-list-item-subtitle class="ml-3" v-html="item.subtitle"></v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-divider v-if="index + 1 < colsData.length" :key="index"></v-divider>
        </template>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>

<script>
  export default {
    props: {
      colsData: {
        type: Array
      }
    },

    data: () => ({
    })
  }
</script>
  
<style lang="scss" scoped>

</style>