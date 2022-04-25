<template>
  <v-app light>
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
  background-color: rgb(247, 244, 255);
}
</style>
