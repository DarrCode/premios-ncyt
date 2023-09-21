<template>
  <v-card
    class="mx-auto"
  >
    <v-toolbar
      color="cyan lighten-1"
      dark
    >
      <v-icon large class="mr-3">mdi-account-circle</v-icon>
      <v-toolbar-title>Datos Personales</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>

    <v-list three-line>
      <template v-for="(item, index) in items">
        <v-divider
          v-if="item.divider"
          :key="index"
          :inset="item.inset"
        ></v-divider>

        <v-list-item
          v-else
          :key="item.title"
        >
          <v-list-item-icon>
            <v-icon class="my-auto" x-large v-text="item.icon"></v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title v-html="item.title"></v-list-item-title>
            <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>
  </v-card>
</template>

<script>
  export default {
    data: () => ({
      items: [
        {
          icon: 'mdi-account',
          title: 'Nombre Completo:',
          subtitle: 'Alberto Jose Rivas Almeida',
        },
        { divider: true, inset: true },
        {
          icon: 'mdi-card-account-details',
          title: 'Cédula:',
          subtitle: 27456964,
        },
        { divider: true, inset: true },
        {
          icon: 'mdi-badge-account',
          title: 'Nacionalidad:',
          subtitle: 'Venezolano',
        },
        { divider: true, inset: true },
        {
          icon: 'mdi-gender-male-female',
          title: 'Sexo',
          subtitle: 'Masculino:',
        },
        { divider: true, inset: true },
        {
          icon: 'mdi-calendar-account',
          title: 'Fecha de Nacimiento:',
          subtitle: '03/12/2000',
        },
				{ divider: true, inset: true },
				{
          icon: 'mdi-ring',
          title: 'Estado Civíl:',
          subtitle: 'Soltero',
        },
				{ divider: true, inset: true },
				{
          icon: 'mdi-phone',
          title: 'Teléfono:',
          subtitle: '04265478954',
        },
				{ divider: true, inset: true },
				{
          icon: 'mdi-phone-classic',
          title: 'Teléfono de Habitación:',
          subtitle: '02124587412',
        },
				{ divider: true, inset: true },
				{
          icon: 'mdi-map-marker',
          title: 'Dirección:',
          subtitle: 'Av Universidad Esquina El Chorro',
        },	
      ],
    }),
  }
</script>

<style lang="scss" scoped>

</style>