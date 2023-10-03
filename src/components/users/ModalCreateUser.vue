<template>
    <div>
        <v-dialog
            v-model="dialog"
            transition="dialog-bottom-transition"
            max-width="700"
        >
            <template v-slot:default="dialog">
                <v-card>
                    <v-toolbar
                        color="primary"
                        dark>
                        <h2>Crear Usuario</h2>
                        <v-spacer></v-spacer>
                        <v-toolbar-items>
                            <v-btn
                                icon
                                dark
                                @click="dialog.value = false"
                            >
                                <v-icon>mdi-close</v-icon>
                            </v-btn>
                        </v-toolbar-items>
                    </v-toolbar>
                    <v-card-text>
                        <v-container>
                            <v-row class="mt-6">
                                <v-col cols="12" md="4">
                                    <v-text-field
                                        v-model="role"
                                        label="Rol"
                                        hint="For example, flowers or used cars"
                                        outlined
                                    ></v-text-field>
                                </v-col>

                                <v-col cols="12" md="4">
                                    <v-text-field
                                        v-model="name"
                                        label="Nombre"
                                        hint="Ingrese su nombre completo"
                                        prepend-inner-icon="mdi-account"
                                        outlined
                                    ></v-text-field>
                                </v-col>

                                <v-col cols="12" md="4">
                                    <v-text-field
                                        v-model="email"
                                        label="Email"
                                        hint="Ingrese su correo electrónico"
                                        prepend-inner-icon="mdi-gmail"
                                        outlined
                                    ></v-text-field>
                                </v-col>

                                <v-col cols="12" md="6">
                                    <v-text-field
                                        v-model="password"
                                        label="Contraseña"
                                        hint="Ingrese su contraseña"
                                        prepend-inner-icon="mdi-lock"
                                        outlined
                                    ></v-text-field>
                                </v-col>

                                <v-col cols="12" md="6">
                                    <v-text-field
                                        v-model="confirmPassword"
                                        label="Confirmar Contraseña"
                                        hint="Ingrese nuevamente su contraseña"
                                        prepend-inner-icon="mdi-lock"
                                        outlined
                                    ></v-text-field>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-card-text>
                    <v-card-actions class="justify-center">
                        <v-btn
                            color="success"
                            class="mb-6"
                            @click="saveUser()">
                            Guardar
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </template>
        </v-dialog>
    </div>
</template>

<script>
export default {
    name: 'ModalCreateUser',

    data() {
        return {
            dialog: false,

            user:{
                name: '',
                
            }
        };
    },

    mounted() {
        
    },

    methods: {
        open(){
            this.dialog = true
        },

        saveUser(){

        }
    },
};
</script>

<style lang="scss" scoped>

</style>