<template>
  <v-card
    class="mx-auto"
  >
    <v-toolbar
      color="primary"
      dark
    >
      <v-icon class="mr-3">mdi-account-circle</v-icon>
      <v-toolbar-title>Datos Personales</v-toolbar-title>
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
              <v-list-item-subtitle class="ml-3 mt-1" v-html="item.subtitle"></v-list-item-subtitle>
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
      personalDetail:{
        type: Object,
      }
    },
    computed: {
      items () {
        return [
          {
            icon: 'mdi-account',
            title: 'Nombre Completo:',
            subtitle: this.personalDetail?.firstName + ' ' + this.personalDetail.surname,
          },
          {
            icon: 'mdi-card-account-details',
            title: 'Cédula:',
            subtitle: this.personalDetail.identificationCard,
          },
          {
            icon: 'mdi-badge-account',
            title: 'Nacionalidad:',
            subtitle: this.personalDetail.nationality,
          },
          {
            icon: 'mdi-gender-male-female',
            title: 'Sexo',
            subtitle: this.personalDetail.sex,
          },
          {
            icon: 'mdi-calendar-account',
            title: 'Fecha de Nacimiento:',
            subtitle: this.personalDetail.birthDate,
          },
          {
            icon: 'mdi-phone',
            title: 'Teléfono:',
            subtitle: this.personalDetail.cellPhone,
          },
          {
            icon: 'mdi-phone-classic',
            title: 'Teléfono de Habitación:',
            subtitle: this.personalDetail.homePhone,
          },
          {
            icon: 'mdi-map-marker',
            title: 'Dirección:',
            subtitle: this.personalDetail.direction,
          },
        ]
      } 

    },

    mounted(){
      console.log("prop", this.personalDetail);
    }
  }
</script>
