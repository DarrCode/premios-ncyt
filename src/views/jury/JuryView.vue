<template>
  <div>
    <h1>holis</h1>
  </div>
</template>

<script>
export default {
  name: 'PremiosNcytJuryView',

  data() {
    return {
      
    };
  },

  mounted() {
    this.index()
    
  },

  methods: {
    index(){
      const user = this.$store.getters['Auth/user']
      console.log("user", user);
      let premioId = user.premioId ?? null
      let mencionId = user.mencionId ?? null

      const filters = {};

      if (premioId !== null) filters.premioId = premioId
      if (mencionId !== null) filters.mencionId = mencionId

      /* const data = {
        route: 'api/postulaciones',
        params: {
          filters: filters
        }
      } */
    }
  },
};
</script>

<style lang="scss" scoped>

</style>