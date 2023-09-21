<template>
    <div>
        <v-dialog
            v-model="modal"
            fullscreen
            hide-overlay
            transition="dialog-bottom-transition">
            <v-card>
                <v-toolbar
                    dark
                    color="primary">
                    <v-btn
                        icon
                        dark
                        @click="modal = false"
                    >
                        <v-icon>mdi-close</v-icon>
                    </v-btn>
                    <v-toolbar-title>Proyecto</v-toolbar-title>
                </v-toolbar>
                <v-container>
                    <v-row>
                        <v-col cols="12" md="6">
                            <PersonalData/>
                        </v-col>

                        <v-col cols="12" md="6">
                            <AcademicData/> 
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col cols="12" md="6">
                            <LaborData/>
                        </v-col>

                        <v-col cols="12" md="6">
                            <FilesData/>
                        </v-col>
                    </v-row>
                </v-container>
            </v-card>
        </v-dialog>
    </div>
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
        };
    },

    mounted() {
        
    },

    methods: {
        open(){
            this.modal = true
        },
    },
};
</script>

<style lang="scss" scoped>

</style>