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
					color="red"
					@click="openModalObservation('Rechazado')"
					v-if="$store.getters['Auth/role'] == 1 || $store.getters['Auth/role'] == 3"
				>
					Rechazar
				</v-btn>
			</v-toolbar>
			<v-container>
				<div class="my-5">
					<h2>Premio: {{ detailPostulate?.premio?.name }}</h2>
					<h3>Mención: {{ detailPostulate?.mencion?.name }}</h3>
				</div>
				<v-row>
					<v-col cols="12" md="6">
						<PersonalData :personalDetail="detailPostulate?.personal" />
					</v-col>
					<v-col cols="12" md="6">
						<AcademicData class="mb-5" :academicDetail="detailPostulate ? detailPostulate.personal : null"/> 
						<LaborData :laborDetail="detailPostulate?.personal"/>
					</v-col>
				</v-row>
				<v-row>
					<v-col cols="12" v-if="!detailPostulate?.postulacion.menciones13">
						<PostulateData :colsData="colsData" />
					</v-col>
				</v-row>
				<v-row>
					<v-col cols="12" v-if="files.length">
						<FilesData :filePostulations="files" :checkedList="checkList" @changeCheckList="receiveCheck"/>
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
			PostulateData: () => import(/* webpackPrefetch: true */ '@/components/postulates/cardsPostulateData/PostulateData.vue'), 
		},
		data() {
			return {
				modal:false,
				detailPostulate: null,
				checkList: [],
				colsData: [],
				files: [],
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
				this.detailPostulate = data;
				this.checkList = this.detailPostulate.postulacion.checkList ? this.detailPostulate.postulacion.checkList : [];

				if(data.postulacion && data.postulacion.menciones48){
					this.colsData = [
						{
							icon: 'mdi-rename',
							title: 'Título:',
							subtitle: data.postulacion.menciones48.titulo,
						},
						{
							icon: 'mdi-text-box',
							title: 'Resumen:',
							subtitle: data.postulacion.menciones48.resumen
						},
					]
				} else if(data.postulacion && data.postulacion.menciones910){
					this.colsData = [
						{
							icon: 'mdi-rename',
							title: 'Nombre Propuesta:',
							subtitle: data.postulacion.menciones910.nombrePropuesta
						},
						{
							icon: 'mdi-text-box',
							title: 'Descripción:',
							subtitle: data.postulacion.menciones910.descripcion
						}
					]
				} else if(data.postulacion && data.postulacion.menciones1113){
					this.colsData = [
						{
							icon: 'mdi-text-box',
							title: 'Descripción:',
							subtitle: data.postulacion.menciones1113.descripcion
						}
					]
				}

				if(data && data.postulacion._id){
					this.getFiles(data.postulacion._id)
				}
			},

			openModalObservation(status){
				this.$refs['modalObservation'].open(status, this.checkList);
			},

			sendEvent(){
				this.$emit('reloadPostulation');
				this.modal = false
			},

			changeStatus(id, status) {
				const data = {
          route: 'api/postulaciones/changeStatus',
          params: {
						id,
						status,
						checkList: this.checkList
          }
        }

        http.post(data).then(response => {
          let {data} = response

          if (data.flag) {
						setTimeout(() => {
							this.modal = false
							this.files = [];
							this.$emit('reloadPostulation');
						}, 4000);
						this.message.snackbar = true,
						this.message.title = data.msg
						this.message.color = 'success'
          }
        })
			},

			getFiles(id){
				const data = {
					route: `api/postulaciones/getFiles/${id}`,
				}

				http.get(data).then(response => {
          let {data} = response
          if (data.flag) {
						this.files = data.data
          }
        })
			},

			receiveCheck(checkList){
				this.checkList = checkList
			}
		}
	};
</script>