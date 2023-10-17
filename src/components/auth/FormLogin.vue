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
      <v-snackbar
        v-model="snackbar.snackbar"
        right
        top
        :color="snackbar.color"
        multi-line
        text
      >
        <h4>{{ snackbar.title }}</h4>
        <h5>{{ snackbar.info }}</h5>
        <template #action="{ attrs }">
          <v-btn
            v-bind="attrs"
            @click="snackbar.snackbar = false"
            icon
            :color="snackbar.color"
          >
            <v-icon> {{ snackbar.icon }} </v-icon>
          </v-btn>
        </template>
      </v-snackbar>
    </div>
</template>
<script>

  import http from "@/api/api.js"

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

      try {
        http.post(data).then(async res => {
          if (res.data.success) {
            sessionStorage.user = JSON.stringify(res.data.data)
            sessionStorage.token = res.data.data.token
            await this.$store.dispatch('Auth/login', res.data.data);
            this.$router.push('/');
            
          }else {
            this.snackbar = {
              snackbar: true,
              title: 'Error',
              info: res.data.message, 
              color: 'error', 
              icon: 'mdi-close'
            }
          }
        })
        
        
      } catch (error) {
        this.snackbar = {
          snackbar: true,
          title: 'Error',
          info: 'Ha ocurrido un error en el servidor', 
          color: 'error', 
          icon: 'mdi-close'
        }
      } finally {
        this.form.button.disabled = false
        this.form.button.innerText = this.form.button.original
      }
    },
    }
  }
  </script>