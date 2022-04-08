<template>
  <v-card></v-card>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'PatientCompleteProfile',

  computed: {
    ...mapGetters('patients', ['getPatients']),
  },

  mounted() {
    this.fetchPatients()
  },

  methods: {
    ...mapActions('patients', ['findPatients']),

    async fetchPatients() {
      try {
        await this.findPatients()
      } catch (error) {
        console.log(error)
      }
    },
  },
}
</script>

<style></style>
