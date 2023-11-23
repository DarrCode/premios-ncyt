<template>
  <v-dialog
    v-model="dialog"
    width="700"
  >
    <v-card>
      <v-card-title>Auditar </v-card-title>
      <v-card-text>
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">Nombre</th>
                <th class="text-left">Fecha de calificacion</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(item, index) in score"
                :key="index"
              >
                <td>{{ item.createdBy.name }}</td>
                <td>{{ moment(item.createdBy.createdAt).format('DD/MM/YYYY h:mm a') }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>

export default {
  name: 'ModalAudit',
  data() {
    return {
      dialog: false,
      score: [],
    }
  },
  methods: {
    open(score){
      this.dialog = true
      this.score = score
    }
  }
}
</script>

