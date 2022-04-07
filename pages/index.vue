<template>
  <v-app>
    <AppHeader />
    <v-container>
      <v-row dense justify="center">
        <v-col cols="5">
          <v-card color="indigo" dark>
            <v-card-title class="text-h4"> Work In Progress </v-card-title>
            <v-card-subtitle class="white--text text-subtitle-2">
              The main route is: "/patients"
              <br />
              I'll handle the index page later.
            </v-card-subtitle>
          </v-card>
          <v-col class="text-center">
            <v-btn class="ma-2" outlined color="indigo">
              <nuxt-link to="/patients"> Go To Patients Page </nuxt-link>
            </v-btn>
          </v-col>
        </v-col>
      </v-row>
    </v-container>
    <h2></h2>
  </v-app>
</template>

<script>
import AppHeader from '../components/ui/Header/AppHeader.vue'

export default {
  name: 'IndexPage',

  components: { AppHeader },
}
</script>
<style scoped>
a {
  text-decoration: none;
}
</style>
