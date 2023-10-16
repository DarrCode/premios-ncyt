<template>
  <v-dialog
		v-model="modal"
		fullscreen
		hide-overlay
		transition="dialog-bottom-transition"
	>
		<v-card>
			<v-toolbar color="primary" dark>
				<v-toolbar-title>
					{{ detailPostulate?.postulacion?.menciones48?.titulo }}
				</v-toolbar-title>
				<v-spacer></v-spacer>
				<v-btn
					color="success"
					class="ml-2"
					@click="changeStatus(detailPostulate.postulacion._id, 'Verificado')"
				>
					VERIFICAR
				</v-btn>
				<v-btn
					color="success"
					class="ml-2"
					@click="changeStatus(detailPostulate.postulacion._id, 'Validado')"
				>
					VALIDAR
				</v-btn>
				<v-btn
					class="ml-2"
					color="warning"
					@click="openModalObservation('En espera')"
				>
					En espera
				</v-btn>
				<v-btn
					class="ml-2"
					color="red"
					@click="openModalObservation('Rechazado')"
				>
					Rechazar
				</v-btn>
			</v-toolbar>
			<v-container>
				<div class="my-5">
					<h2>{{ detailPostulate.premio.name }}</h2>
					<h3>{{ detailPostulate.mencion.name }}</h3>
				</div>
				<v-row>
					<v-col cols="12" md="6">
						<PersonalData :personalDetail="detailPostulate?.personal" />
					</v-col>
					<v-col cols="12" md="6">
						<AcademicData class="mb-5" :academicDetail="detailPostulate?.personal"/> 
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
		<v-snackbar
      v-model="message.snackbar"
      :color="message.color"
    >
      {{ message.title }}

      <template v-slot:action="{ attrs }">
        <v-btn
          v-bind="attrs"
          @click="message.snackbar = false"
          icon
        >
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </template>
    </v-snackbar>
		<ModalObservation :detailPostulate="detailPostulate" ref="modalObservation" @reloadPostulation="sendEvent()"/>
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
			ModalObservation: () => import(/* webpackPrefetch: true */ '@/components/postulates/ModalObservation.vue'),  
		},
		data() {
			return {
				modal:false,
				detailPostulate: null,
				message: {
          title: '',
          color: '',
          snackbar: false
        }
			};
		},
		methods: {
			open(data){
				this.modal = true
				this.detailPostulate = data
				console.log('this.detailPostulate', this.detailPostulate);
			},

			openModalObservation(status){
				this.$refs['modalObservation'].open(status);
			},

			sendEvent(){
				this.$emit('reloadPostulation');
				this.modal = false
			},

			changeStatus(id, status) {
				const data = {
          route: 'api/postulaciones/changeStatus',
          params: {
						'id': id,
						'status': status,
          }
        }
        http.post(data).then(response => {
          let {data} = response
					console.log("data",data);

          if (data.flag) {
						setTimeout(() => {
							this.modal = false
							this.$emit('reloadPostulation');
						}, 4000);
						this.message.snackbar = true,
						this.message.title = data.msg
						this.message.color = 'success'
          }
        })
			}
		}
	};
</script>