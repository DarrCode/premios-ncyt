<template>
  <div class="premios-auth">
    <v-container fluid class="px-0 py-0">
      <v-row class="no-gutters min-vh-100">
        <v-col cols="12" sm="5">
          <div class="hero-wrap d-flex align-items-center h-100">
            <div class="hero-mask wrapper"></div>
            <div class="hero-content mx-auto w-100 h-100">
              <v-container class="d-flex flex-column h-100">
                <v-row class="no-gutters">
                  <v-col cols="11" lg="9" class="mx-auto">
                    <div class="logo mt-5 ">
                    </div>
                  </v-col>
                </v-row>
                <v-row class="no-gutters my-auto">
                  <v-col cols="12" lg="10" class="mx-auto">
                    <v-img
                      class=""
                      src="../../assets/img/premiosNacionales.png"
                      width="600"
                    ></v-img>
                  </v-col>
                </v-row>
              </v-container>
            </div>
          </div>
        </v-col>
        <v-col cols="12" sm="7">
          <v-container class="pa-10">
            <v-row align="center" no-gutters>
              <v-col cols="12" lg="9" class="mx-auto mt-5">
                <FormLogin v-if="$route.name == 'login'"/>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>

export default {
  name: 'AuthView',
  components: {
    FormLogin: () => import(/* webpackChunkName: "about" */ '@/components/auth/FormLogin.vue'),
  },
  data () {
    return {

    }
  }
}
</script>
<style>
.premios-auth .hero-wrap {
  position: relative;
  overflow: hidden;
}

.premios-login-brand {
  width: 180px;
}

.hand-emoji {
  width: 30px;
}
.min-vh-100 {
  min-height: 100vh !important;
}
.h-100 {
  height: 100%!important;
}

.premios-auth .hero-wrap .hero-mask{
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

.premios-auth .hero-wrap .hero-mask {
  z-index: 1;
}

.premios-auth .hero-wrap .hero-content {
  position: relative;
  z-index: 2;
}

.premios-auth .hero-wrap .hero-bg {
  z-index: 0;
  background-attachment: fixed;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  transition: background-image 300ms ease-in 200ms;
}

.wrapper {
  height: 100%;
  width: 100%;
  left:0;
  right: 0;
  top: 0;
  bottom: 0;
  position: absolute;
  background: linear-gradient(124deg, #3861f4, #3861f4, #1ddde8, #3861f4, #3861f4);
  background-size: 1800% 1800%;

  -webkit-animation: rainbow 18s ease infinite;
  -z-animation: rainbow 18s ease infinite;
  -o-animation: rainbow 18s ease infinite;
  animation: rainbow 18s ease infinite;
}

@-webkit-keyframes rainbow {
  0%{background-position:0% 82%}
  50%{background-position:100% 19%}
  100%{background-position:0% 82%}
}
@-moz-keyframes rainbow {
  0%{background-position:0% 82%}
  50%{background-position:100% 19%}
  100%{background-position:0% 82%}
}
@-o-keyframes rainbow {
  0%{background-position:0% 82%}
  50%{background-position:100% 19%}
  100%{background-position:0% 82%}
}
@keyframes rainbow { 
  0%{background-position:0% 82%}
  50%{background-position:100% 19%}
  100%{background-position:0% 82%}
}

</style>