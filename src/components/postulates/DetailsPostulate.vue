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
					v-if="$store.getters['Auth/role'] == 1 || $store.getters['Auth/role'] == 2 || $store.getters['Auth/role'] == 3"
				>
					VERIFICAR
				</v-btn>
				<v-btn
					color="success"
					class="ml-2"
					@click="changeStatus(detailPostulate.postulacion._id, 'Validado')"
					v-if="$store.getters['Auth/role'] == 3"
				>
					VALIDAR
				</v-btn>
				<v-btn
					class="ml-2"
					color="warning"
					@click="openModalObservation('En espera')"
					v-if="$store.getters['Auth/role'] == 1 || $store.getters['Auth/role'] == 2"
				>
					En espera
				</v-btn>
				
				<v-btn
					class="ml-2"
					color="amber"
					@click="openModalRating(detailPostulate.postulacion._id, detailPostulate.postulacion.score)"
					v-if="$store.getters['Auth/role'] == 4"
				>
					Evaluar
					<v-icon class="ml-2">mdi-star-check-outline</v-icon>
				</v-btn>
				<v-btn
					class="ml-2"
					color="deep-purple darken-3"
					@click="openModalChangeMencion(detailPostulate.postulacion._id, detailPostulate.postulacion.premioId)"
					v-if="$store.getters['Auth/role'] == 4"
				>
					Cambiar mencion
				</v-btn>
				<v-btn
					class="ml-2"
					color="red darken-2"
					@click="openModalObservation('Rechazado')"
					v-if="$store.getters['Auth/role'] == 1 || $store.getters['Auth/role'] == 3 || $store.getters['Auth/role'] == 4"
				>
					Rechazar
				</v-btn>
			</v-toolbar>
			<v-container>
				<div class="my-5">
					<h2>Premio: {{ detailPostulate?.premio.name }}</h2>
					<h3>Mención: {{ detailPostulate?.mencion.name }}</h3>
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
		<ModalRating
			ref="modalRating"
		/>
		<ModalObservation 
			:detailPostulate="detailPostulate" 
			ref="modalObservation" 
			@reloadPostulation="sendEvent()"
		/>
		<ModalChangeMencion 
			ref="modalChangeMencion" 
			@reloadPostulation="sendEvent()"
		/>
	</v-dialog>
</template>

<script>
  import http from "@/api/api.js"

	export default {
		name: 'DetailsPostulate',
		components: {
			PersonalData: () => import(/* webpackPrefetch: true */ '@/components/postulates/cardsPostulateData/PersonalData'),
			AcademicData: () => import(/* webpackPrefetch: true */ '@/components/postulates/cardsPostulateData/AcademicData'), 
			LaborData: () => import(/* webpackPrefetch: true */ '@/components/postulates/cardsPostulateData/LaborData'), 
			FilesData: () => import(/* webpackPrefetch: true */ '@/components/postulates/cardsPostulateData/FilesData'),
			ModalObservation: () => import(/* webpackPrefetch: true */ '@/components/postulates/ModalObservation'),
			ModalRating: () => import(/* webpackPrefetch: true */ '@/components/jury/ModalBaremos'),
			ModalChangeMencion: () => import(/* webpackPrefetch: true */ '@/components/jury/ModalChangeMencion')
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
			}
		},
		methods: {
			open(data){
				this.modal = true
				this.detailPostulate = data
			},
			openModalObservation(status){
				this.$refs['modalObservation'].open(status);
			},
			openModalRating(postulationId, score){
				this.$refs['modalRating'].open(postulationId, score)
			},
			openModalChangeMencion(postulationId, premioId){
				this.$refs['modalChangeMencion'].open(postulationId, premioId)
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

          if (data.flag) {
						setTimeout(() => {
							this.modal = false
							this.$emit('reloadPostulation')
						}, 4000);
						this.message.snackbar = true,
						this.message.title = data.msg
						this.message.color = 'success'
          }
        })
			}
		}
	}
</script>