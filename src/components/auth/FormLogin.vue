<template>
    <div>
      <h1 class="my-7">Inicio de sesión</h1>
      <form >
        <v-text-field
          v-model="form.email"
          type="email"
          color="primary"
          outlined
          hide-details="auto"
          label="Dirección de correo"
          class="my-10"
          clearable
        ></v-text-field>
        <v-text-field
          v-model="form.password"
          color="primary"
          type="password"
          label="Contraseña"
          hint="Al menos 8 caracteres"
          counter
          class="mb-10"
          outlined
        ></v-text-field>
  
        <v-btn
          block
          color="primary"
          elevation="3"
          large
          @click="login"
        >
          Iniciar sesión
        </v-btn>
        <a href="" class="text-decoration-none">
          <p class="text-right mt-5 text-blue-darken-1">¿Olvidaste tu contraseña?</p>
        </a>
      </form>
    </div>
  </template>
  <script>

  import http from "@/api/api.js";

  export default {
    name: 'FormLogin',
    data () {
    return {
      snackbar: {
        snackbar: false,
      },
      form: {
        email: '',
        password: '',
        button: {
          disabled: false,
          innerText: 'Iniciar sesión',
          original: 'Iniciar sesión',
          onEvent: ' Iniciando sesión'
        },
        // emailRules: [
        //   v => !!v || 'Dirección de correo es requerido',
        //   v => !v || /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'Dirección de correo no es valida'
        // ],
        valid: true,
      },
    }
    },
    methods: {
      async login() {
      this.form.button.disabled = true
      this.form.button.innerText = this.form.button.onEvent

      const data = {
        route: 'api/auth/login',
        params: {
          email: this.form.email,
          password: this.form.password
        }
      }

      http.post(data).then(response => {
        let {data} = response;

        if (data.success) {
          this.form.button.disabled = false
          this.form.button.innerText = this.form.button.original

          this.snackbar = {
            title: 'Iniciando sesion',
            info: data.msg,
            snackbar: true,
            color: 'success',
            icon: 'mdi-check-circle-outline'
          }

          this.$session.start()
          this.$session.set('accessToken', data.data.token)

          this.$store.state.authenticated = true


          this.$router.push('/')
        } else {
          this.form.button.disabled = false
          this.form.button.innerText = this.form.button.original

          this.snackbar = {
            title: 'Error',
            info: data.msg,
            snackbar: true,
            color: 'error',
            icon: 'mdi-close-circle-outline'
          }
        }
      })
      .catch((error) => {
        console.error('error', error)
      })
    },
    }
  }
  </script>