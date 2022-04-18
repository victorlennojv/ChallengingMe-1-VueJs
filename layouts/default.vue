<template>
  <v-app light class="bg-color">
    <v-container fluid class="pa-0">
      <Nuxt />
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  middleware: 'auth',
}
</script>
<style scoped>
.bg-color {
  background-color: rgb(216, 216, 216);
}
</style>
