<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-title class="justify-center">
            <v-avatar size="256">
              <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
            </v-avatar>
          </v-card-title>
          <v-card-subtitle class="text-center">
            Profile page of patient X
          </v-card-subtitle>
        </v-card>
      </v-col>
      <v-col cols="4">
        <v-card>
          <v-card-title class="justify-center"> Left Card </v-card-title>
          <v-card-subtitle class="text-center">
            Left card info
          </v-card-subtitle>
        </v-card>
      </v-col>
      <v-col cols="8">
        <v-card>
          <v-card-title class="justify-center">
            Right Card - Detailed infos
          </v-card-title>
          <v-card-subtitle class="text-center"> Informations </v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'PatientCompleteProfile',

  // computed: {
  //   ...mapGetters('patients', ['getPatients']),
  // },

  // mounted() {
  //   this.fetchPatients()
  // },

  // methods: {
  //   ...mapActions('patients', ['findPatients']),

  //   async fetchPatients() {
  //     try {
  //       await this.findPatients()
  //     } catch (error) {
  //       console.log(error)
  //     }
  //   },
  // },
}
</script>

<style></style>
