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
					{{ detailPostulate?.postulacion?.menciones48?.titulo }}
				</v-toolbar-title>
				<v-spacer></v-spacer>
				<v-btn
					color="success"
					@click="changeStatus(detailPostulate._id, 'Verificado')"
				>
					VERIFICAR
				</v-btn>
				<v-btn
					class="ml-2"
					color="warning"
					@click="changeStatus(detailPostulate._id, 'En espera')"
				>
					En espera
				</v-btn>
			</v-toolbar>
			<v-container>
				<v-row>
					<v-col cols="12" md="4">
						<PersonalData :personalDetail="detailPostulate?.personal" />
					</v-col>
					<v-col cols="12" md="4">
						<AcademicData :academicDetail="detailPostulate?.personal"/> 
					</v-col>
					<v-col cols="12" md="4">
						<LaborData :laborDetail="detailPostulate?.personal"/>
					</v-col>
				</v-row>
				<v-row>
					<v-col cols="12">
						<FilesData  :filePostulations="detailPostulate?.postulacion" />
					</v-col>
				</v-row>
			</v-container>
		</v-card>
	</v-dialog>
</template>

<script>
  import http from "@/api/api.js"

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
				detailPostulate: null
			};
		},
		methods: {
			open(data){
				this.modal = true
				this.detailPostulate = data
				console.log('this.detailPostulate', this.detailPostulate);
			},
			changeStatus(id, status) {
				const data = {
          route: 'api/postulaciones/changeStatus',
          params: {
            filters:{
							'id': id,
              'status': status,
            }
          }
        }

        http.post(data).then(response => {
          let {data} = response

          if (data.flag) {
						this.modal = false
						this.message.snackbar = true,
						this.message.title = data.message
						this.message.color = 'success'
          }
        })
			}
		}
	};
</script>