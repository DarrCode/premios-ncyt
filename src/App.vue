<template>
  <v-app>
    <Sidebar  />
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
  data: () => ({
    //
  }),
};
</script>
