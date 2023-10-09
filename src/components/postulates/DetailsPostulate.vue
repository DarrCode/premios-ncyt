<template>
  <v-dialog
		v-model="modal"
		fullscreen
		hide-overlay
		transition="dialog-bottom-transition"
	>
		<v-card>
			<v-toolbar color="primary" dark>
				<v-btn
					icon
					dark
					@click="modal = false"
				>
					<v-icon>mdi-close</v-icon>
				</v-btn>
				<v-toolbar-title>
					{{ detailPostulate.postulacion.menciones48.titulo }}
				</v-toolbar-title>
				<v-spacer></v-spacer>
				<v-btn
					color="success"
					@click="dialog = false"
				>
					VERIFICAR
				</v-btn>
				<v-btn
					class="ml-2"
					color="warning"
					@click="dialog = false"
				>
					En espera
				</v-btn>
			</v-toolbar>
			<v-container>
				<v-row>
					<v-col cols="12" md="4">
						<PersonalData :personalDetail="this.detailPostulate.personal" />
					</v-col>
					<v-col cols="12" md="4">
						<AcademicData :academicDetail="this.detailPostulate.personal"/> 
					</v-col>
					<v-col cols="12" md="4">
						<LaborData :laborDetail="this.detailPostulate.personal"/>
					</v-col>
				</v-row>
				<v-row>
					<v-col cols="12">
						<FilesData/>
					</v-col>
				</v-row>
			</v-container>
		</v-card>
	</v-dialog>
</template>

<script>

	export default {
		name: 'DetailsPostulate',
		components: {
			PersonalData: () => import(/* webpackPrefetch: true */ '@/components/postulates/cardsPostulateData/PersonalData.vue'),
			AcademicData: () => import(/* webpackPrefetch: true */ '@/components/postulates/cardsPostulateData/AcademicData.vue'), 
			LaborData: () => import(/* webpackPrefetch: true */ '@/components/postulates/cardsPostulateData/LaborData.vue'), 
			FilesData: () => import(/* webpackPrefetch: true */ '@/components/postulates/cardsPostulateData/FilesData.vue'),  
		},

		data() {
			return {
				modal:false,
				detailPostulate: []
			};
		},

		mounted() {        
		},

		methods: {
			open(data){
				this.modal = true
				this.detailPostulate = data;
			}
		},
	};
</script>

<style lang="scss" scoped>

</style>