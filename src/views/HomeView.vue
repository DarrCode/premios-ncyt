<template>
  <v-container>
    <v-row>
    <v-col cols="12" class="mt-10">
      <v-card
        elevation="2"
      >
        <v-card-title>Filtrar postulados</v-card-title>
        <v-card-text>
          <div class="d-flex ">
              <v-select
                :items="participants"
                label="Por participantes"
                outlined
              ></v-select>
              <v-select
                :items="categories"
                label="Por categorías"
                outlined
                class="mx-2"
              ></v-select>
              <v-select
                :items="mentions"
                label="Por mención"
                outlined
              ></v-select>
              <v-select
              class="ml-2"
                :items="status"
                label="Estado"
                outlined
              ></v-select>
          </div>
          <div class="d-flex justify-end">
            <v-btn color="primary">
              Filtrar
              <v-icon
                dark
                right
              >
                mdi-filter
              </v-icon>
            </v-btn>
          </div>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
  <v-row>
    <v-col cols="12" class="mt-5">
      <v-data-table
    :headers="headers"
    :items="desserts"
    class="elevation-1"
  >
    <template v-slot:[`item.status`]="{ item }">
      <v-chip
        :color="getColor(item.status)"
        dark
      >
        {{ item.status }}
      </v-chip>
    </template>
    <template v-slot:[`item.actions`]="{ item }">
					<v-menu
					rounded="lg"
					offset-y
          small
				>
					<template v-slot:activator="{ attrs, on }">
						<v-btn
							class="white--text ma-5"
							v-bind="attrs"
							v-on="on"
							color="warning lighten-1"
              samll
						>
							Opciones
							<v-icon
								right
								dark
							>
								mdi-cog-outline
							</v-icon>
						</v-btn>
					</template>

					<v-list>
						<v-list-item @click="viewDetail(item)">
							<v-list-item-title>Ver detalles</v-list-item-title>
							<v-list-item-action>
								<v-icon  color="info">mdi-eye</v-icon>
							</v-list-item-action>
						</v-list-item>
						<v-list-item>
							<v-list-item-title>Observasion</v-list-item-title>
							<v-list-item-action>
								<v-icon color="warning">mdi-square-edit-outline</v-icon>
							</v-list-item-action>
						</v-list-item>
						<v-list-item>
							<v-list-item-title>Rechazar</v-list-item-title>
							<v-list-item-action>
								<v-icon color="error">mdi-delete-outline</v-icon>
							</v-list-item-action>
						</v-list-item>
					</v-list>
				</v-menu>
				</template>
  </v-data-table>
</v-col>
  </v-row>
  <v-dialog
      v-model="dialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <v-card>
        <v-toolbar
          dark
          color="primary"
        >
          <v-btn
            icon
            dark
            @click="dialog = false"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>Settings</v-toolbar-title>
        </v-toolbar>
        <v-container>
          <v-row>
            <v-col cols="12">
          <v-card>
          <v-card-text>asas
           </v-card-text>
          </v-card>
        </v-col>
        </v-row>
        </v-container>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>

  export default {
    name: 'HomeView',
    data (){
      return {
        dialog: false,
        search: '',
        headers: [
          {
            text: 'Nombre',
            align: 'start',
            sortable: false,
            value: 'name',
          },
          { text: 'Tipo participante', value: 'participants' },
          { text: 'Categoria', value: 'category' },
          { text: 'Nominacion', value: 'nomination' },
          { text: 'Estado', value: 'status' },
          { text: 'Acciones', value: 'actions', align: 'center' },

        ],
        desserts: [
          {
            name: 'Proyecto',
            participants: 'Grupal',
            category: 'Categoria 1',
            nomination: 'nominacion 1',
            status: 'Verificado',
          },
          {
            name: 'Proyecto',
            participants: 'Grupal',
            category: 'Categoria 1',
            nomination:  'nominacion 3',
            status: 'Validado',
          },
          {
            name: 'Proyecto',
            participants: 'Individual',
            category: 'Categoria 2',
            nomination:  'nominacion 2',
            status: 'Validado',
          },
          {
            name: 'Proyecto',
            participants: 'Individual',
            category: 'Categoria 2',
            nomination: 'nominacion 1',
            status: 'Rechazado',
          },
        ],

        participants: ['Grupales', 'Individuales'],
        categories: ['Categoria 1', 'Categoria 2', 'Categoria 3'],
        mentions: ['mencion 1', 'mencion 2', 'mencion 3'],
        status: ['Verificadas', 'Validadas', 'Rechazadas']
      }
    },
    methods: {
      getColor (status) {
        if (status == 'Rechazado') return 'red'
        else if (status === 'Validado') return 'success'
        else return 'primary'
      },
      viewDetail(item) {
        console.log(item);
        this.dialog = true
      }
    },
  }
</script>
