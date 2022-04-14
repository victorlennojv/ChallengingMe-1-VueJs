<template>
  <v-container pa-0>
    <v-text-field
      v-model="search"
      class="mb-5"
      append-icon="mdi-magnify"
      label="Search"
      solo
      hide-details
      @click:append="''"
    ></v-text-field>
    <v-card>
      <v-card-title> </v-card-title>
      <v-data-table
        item-key="id.value"
        :headers="headers"
        :items="patients"
        :search="search"
        :loading="isLoading"
        loading-text="Loading... Please, wait"
        no-data-text="No patients found"
      >
        <template #[`item.profile`]="{ item }">
          <v-btn icon @click="togglePatientModal(item)">
            <v-icon>mdi-information-outline</v-icon>
          </v-btn>
        </template>
      </v-data-table>
    </v-card>
    <v-row justify="center" class="mt-5">
      <!-- <v-col align="center">
        <v-btn icon @click="fetchPatients">
          <v-icon>mdi-cached</v-icon>
        </v-btn>
        Load More
      </v-col> -->
    </v-row>
    <ProfileModal
      v-if="Object.keys(patient).length"
      :modal="modal"
      :patient="patient"
      :click:outside="toggleModal"
      @toggleModal="toggleModal"
    />
  </v-container>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'PatientsList',

  components: {
    ProfileModal: () => import('@/components/ui/Modal/ProfileModal.vue'),
  },

  data() {
    return {
      search: '',
      headers: [
        { text: 'Name', value: 'fullName' },
        { text: 'Gender', value: 'gender' },
        { text: 'Age', value: 'dob.age' },
        {
          text: 'More Informations',
          value: 'profile',
          sortable: false,
          align: 'center',
        },
      ],
      isLoading: false,
      modal: false,
      patient: {},
    }
  },
  computed: {
    ...mapGetters('patients', ['getPatients']),

    patients() {
      const patients = this.getPatients.patients.map((patient) => ({
        ...patient,
        fullName: `${patient.name.first} ${patient.name.last}`,
        gender: patient.gender === 'female' ? 'Female' : 'Male',
      }))
      return patients
    },
    specificPatient() {
      const patients = this.patients

      return patients.filter(
        (patient) => patient.login.uuid === this.$route.query.userId
      )
    },
  },
  created() {
    this.fetchPatients()
  },
  methods: {
    ...mapActions('patients', ['findPatients']),

    async fetchPatients() {
      this.isLoading = true
      try {
        await this.findPatients()
        this.isLoading = false
      } catch (error) {
        this.isLoading = false
        console.log(error)
      }
    },
    toggleModal() {
      this.modal = !this.modal
    },

    togglePatientModal(payload) {
      this.patient = payload
      this.toggleModal()
    },
  },
}
</script>

<style></style>
