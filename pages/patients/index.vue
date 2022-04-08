<template>
  <v-container class="pt-16">
    <v-row justify="center" laign="center">
      <v-col class="col-8">
        <div class="mb-5">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis
          fugiat a labore quos quam nisi porro veniam officia ad.
        </div>
        <PatientsList />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'PatientsPage',

  components: {
    PatientsList: () => import('@/components/patients/PatientsList'),
  },

  methods: {},
}
</script>

<style></style>
