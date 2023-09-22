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
    data: () => ({
      items: [
        {
          icon: 'mdi-account',
          title: 'Nombre Completo:',
          subtitle: 'Alberto Jose Rivas Almeida',
        },
        {
          icon: 'mdi-card-account-details',
          title: 'Cédula:',
          subtitle: 27456964,
        },
        {
          icon: 'mdi-badge-account',
          title: 'Nacionalidad:',
          subtitle: 'Venezolano',
        },
        {
          icon: 'mdi-gender-male-female',
          title: 'Sexo',
          subtitle: 'Masculino:',
        },
        {
          icon: 'mdi-calendar-account',
          title: 'Fecha de Nacimiento:',
          subtitle: '03/12/2000',
        },
				{
          icon: 'mdi-ring',
          title: 'Estado Civíl:',
          subtitle: 'Soltero',
        },
				{
          icon: 'mdi-phone',
          title: 'Teléfono:',
          subtitle: '04265478954',
        },
				{
          icon: 'mdi-phone-classic',
          title: 'Teléfono de Habitación:',
          subtitle: '02124587412',
        },
				{
          icon: 'mdi-map-marker',
          title: 'Dirección:',
          subtitle: 'Av Universidad Esquina El Chorro',
        },
      ],
    }),
  }
</script>
