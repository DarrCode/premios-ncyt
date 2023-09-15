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
          :rules="[rules.required, rules.min]"
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

  export default {
    name: 'FormLogin',
    data () {
      return {
        form: {
          email: '',
          password: '',
        },
        rules: {
          required: value => !!value || 'Requerido.',
          min: v => v.length >= 8 || 'Minimo 8 caracteres',
          emailMatch: () => (`El correo y la contrasena no coinsiden`),
        },
      }
    },
    methods: {
      login (){
        this.$router.push('/')
      }
    }
  }
  </script>