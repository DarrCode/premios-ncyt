<template>
    <div>
        <v-dialog
            v-model="dialog"
            transition="dialog-bottom-transition"
            max-width="900"
        >
            <template v-slot:default="">
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
                                @click="closeModal()"
                            >
                                <v-icon>mdi-close</v-icon>
                            </v-btn>
                        </v-toolbar-items>
                    </v-toolbar>
                    <v-card-text>
                        <v-container>
                            <v-row class="mt-6">
                                <v-col cols="12" md="4">
                                    <v-select
                                        v-model="user.role"
                                        :items="roles"
                                        item-text="name"
                                        label="Roles"
                                        outlined
                                        class="mx-2"
                                        return-object
                                    ></v-select>
                                </v-col>

                                <v-col cols="12" md="4">
                                    <v-text-field
                                        v-model="user.name"
                                        label="Nombre"
                                        hint="Ingrese su nombre completo"
                                        prepend-inner-icon="mdi-account"
                                        outlined
                                    ></v-text-field>
                                </v-col>

                                <v-col cols="12" md="4">
                                    <v-text-field
                                        v-model="user.email"
                                        type="email"
                                        label="Email"
                                        hint="Ingrese su correo electrónico"
                                        prepend-inner-icon="mdi-gmail"
                                        outlined
                                    ></v-text-field>
                                </v-col>

                                <v-col cols="12" md="6">
                                    <v-text-field
                                        v-model="user.password"
                                        type="password"
                                        label="Contraseña"
                                        hint="Ingrese su contraseña"
                                        prepend-inner-icon="mdi-lock"
                                        outlined
                                    ></v-text-field>
                                </v-col>

                                <v-col cols="12" md="6">
                                    <v-text-field
                                        v-model="user.confirmPassword"
                                        type="password"
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
                            :loading="loading"
                            :disabled="loading"
                            @click="createUser()">
                            Guardar
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </template>
        </v-dialog>

        <div class="text-center ma-2">
            <v-snackbar
                v-model="snackbar"
                :color="color"
                shaped
                >
                <v-icon>{{ icon }}</v-icon>

                {{ text }}

                <template v-slot:action="{ attrs }">
                    <v-btn
                        color="white"
                        text
                        v-bind="attrs"
                        @click="snackbar = false"
                    >
                        Cerrar
                    </v-btn>
                </template>
            </v-snackbar>
        </div>
    </div>
</template>

<script>
import http from "@/api/api.js"

export default {
    name: 'ModalCreateUser',

    data() {
        return {
            dialog: false,
            snackbar: false,
            text: '',
            color: '',
            icon: '',
            loading: false,
            roles: [],
            user:{
                role: '',
                name: '',
                email: '',
                password: ''
            }
        };
    },

    mounted() {
        this.getRoles();
    },

    methods: {
        open(){
            this.dialog = true
        },

        closeModal(){
            this.dialog = false
            this.loading = false
        },

        getRoles(){
            const data = {
                route: 'api/role',
                params: {}
            }
            http.get(data).then(response => {
                let {data} = response;
                if (data.success) {
                    this.roles = data.data
                }
            })
        },

        createUser(){
            this.loading = true
            const data = {
                route: 'api/user',
                params: {
                    roleId: this.user.role.id,
                    name: this.user.name,
                    email: this.user.email,
                    password: this.user.password
                }
            }
            try{
                http.post(data).then(response => {
                    let {data} = response;
                    if (data.success) {
                        this.snackbar = true
                        this.color = 'success'
                        this.icon = 'mdi-check-bold'
                        this.text = data.msg
                        this.loading = false
                        this.dialog = false

                        this.user = {}
                        this.$emit('getUsers');
                    }else{
                        this.snackbar = true
                        this.color = 'error'
                        this.icon = 'mdi-close-thick'
                        this.text = data.msg
                        this.loading = false
                    }
                }).catch(error =>{
                    console.log(error);
                })
            }catch(error){
                console.log("error",error);
            }
        }
    },
};
</script>

<style lang="scss" scoped>

</style>