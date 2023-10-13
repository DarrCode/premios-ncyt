<template>
  <v-card>
    <v-toolbar
      color="primary"
      dark
    >
      <v-icon class="mr-3">mdi-school</v-icon>
      <v-toolbar-title>Datos Académicos</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-list>
      <v-list-item-group active-class="primary--text">
        <template v-for="(item, index) in items">
          <v-list-item :key="item.title">
            <v-list-item-content>
              <v-list-item-title>
                <v-icon class="my-auto" v-text="item.icon"></v-icon>
                {{ item.title }}
              </v-list-item-title>
              <v-list-item-subtitle class="ml-3" v-html="item.subtitle"></v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-divider v-if="index + 1 < items.length" :key="index"></v-divider>
        </template>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>
  
<script>
  export default {
    props: {
      academicDetail: {
        type: Object
      }
    },

    data: () => ({
    }),

    computed:{
      items() {
        return [
          {
            icon: 'mdi-school',
            title: 'Nivel Educativo:',
            subtitle: this.academicDetail.edicationalLevel.name,
          },
          {
            icon: 'mdi-briefcase',
            title: 'Profesión:',
            subtitle: this.academicDetail.profession,
          },
        ]
      }
    }
  }
</script>
  
<style lang="scss" scoped>

</style>