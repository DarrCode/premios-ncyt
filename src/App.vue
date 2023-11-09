<template>
  <v-app>
    <Sidebar v-if="authenticated"/>
    <v-main>
      <!-- <Navbar v-if="authenticated" /> -->
        <router-view></router-view>
    </v-main>
  </v-app>
</template>
<script>

export default {
  name: 'App',
  components: {
    Sidebar: () => import(/* webpackChunkName: "about" */ '@/components/ui/Sidebar.vue'),
    // Navbar: () => import(/* webpackChunkName: "about" */ '@/components/ui/Navbar.vue')
  },
  computed: { 
    authenticated () {
      return this.$store.getters['Auth/authenticated']
    }
  },
};
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito&display=swap');
*, body, p, a, h1, h2, h3 {
  font-family: 'Nunito', sans-serif;
}
</style>