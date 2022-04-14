<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="pb-0">
        <v-card tile elevation="0" color="indigo" height="250">
          <v-card-title class="justify-center"> </v-card-title>
          <v-card-subtitle class="text-center"> </v-card-subtitle>
        </v-card>
      </v-col>
      <v-col cols="4" class="ma-0 py-0">
        <v-card tile elevation="0" color="#7c73ff">
          <v-card-title class="justify-center pt-0">
            <v-avatar size="128" class="shadow mt-n16">
              <img class="" :src="hasPictureProfile" alt="John" />
            </v-avatar>
          </v-card-title>
          <v-card-subtitle class="text-center text-h6 white--text">
            {{ patient.name.first }} {{ patient.name.last }}
          </v-card-subtitle>
        </v-card>
      </v-col>
      <v-col cols="8">
        <v-card>
          <v-tabs
            v-model="tab"
            background-color="transparent"
            color="basil"
            grow
          >
            <!-- TODO Profile, Address and Login Components -->
            <v-tab> Profile </v-tab>
            <v-tab> Address </v-tab>
            <v-tab> Login </v-tab>
          </v-tabs>
          <v-card-title class="justify-center"> </v-card-title>
          <v-card-subtitle class="text-center"> Informations </v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'PatientCompleteProfile',

  async asyncData({ $axios, params }) {
    const patients = await $axios.$get(
      'https://randomuser.me/api/?results=20&seed=7bc4601e814841be'
    )
    const patientId = params.id
    const patient = patients.results.find(
      (patient) => patient.login.uuid === patientId
    )
    return { patient }
  },

  data: () => ({
    tab: null,
  }),

  computed: {
    hasPictureProfile() {
      return this.patient.picture?.large
        ? this.patient.picture.large
        : `https://mascaro.com.br/wp-content/uploads/2021/06/dep.png`
    },
  },
}
</script>

<style>
.shadow {
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
}
</style>
