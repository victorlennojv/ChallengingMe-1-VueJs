<template>
  <v-container class="my-10">
    <v-row class="py-15 px-10">
      <v-col class="col-12 col-sm-4">
        <v-card shaped elevation="0" class="gradient-color">
          <v-card-title class="justify-center">
            <v-avatar size="200" class="shadow mt-n16">
              <img :src="hasPictureProfile" alt="John" />
            </v-avatar>
          </v-card-title>
          <v-card-subtitle class="text-center mt-0 text-h6 white--text">
            {{ patient.name.first }} {{ patient.name.last }}
          </v-card-subtitle>
          <v-card-subtitle class="text-center mt-n8 text-body-2 white--text">
            <v-icon color="white" dense>mdi-map-marker</v-icon>
            {{ patient.location.city }}
          </v-card-subtitle>
          <v-card-subtitle class="text-center mt-0 text-body-1 white--text">
            <v-icon color="white" dense>mdi-email</v-icon>
            {{ patient.email }}
          </v-card-subtitle>
          <v-card-subtitle class="text-center mt-n6 text-body-1 white--text">
            <v-icon color="white" dense>mdi-phone</v-icon>
            {{ patient.cell }}
          </v-card-subtitle>
          <v-card-subtitle class="d-flex justify-space-around">
            <v-chip color="#C62828" class="white--text"> O+</v-chip>
            <v-chip color="white">Nabaspa</v-chip>
            <v-chip color="white">Teste3</v-chip>
          </v-card-subtitle>
        </v-card>
      </v-col>
      <v-col class="col-12 col-sm-8">
        <v-card color="#ddd">
          <v-tabs
            v-model="tab"
            background-color="transparent"
            color="basil"
            grow
          >
            <v-tabs-slider class="gradient-color"></v-tabs-slider>

            <!-- TODO Profile, Address and Login Components -->
            <v-tab> Importante Notes </v-tab>
            <v-tab> Address </v-tab>
            <v-tab> Login </v-tab>
          </v-tabs>
          <v-tabs-items v-model="tab">
            <v-tab-item>
              <v-list-item three-line>
                <v-list-item-content>
                  <v-list-item-title class="text-h6">
                    Allergies
                  </v-list-item-title>
                  <span class="gray--text ma-2">Foods: </span>
                  <v-list-item-subtitle
                    class="mx-3"
                    v-for="foodAllergy in allergies.foods"
                    :key="foodAllergy.id"
                  >
                    {{ foodAllergy.name }}
                  </v-list-item-subtitle>
                  <v-list-item-subtitle> </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-tab-item>

            <v-tab-item>
              <v-list-item three-line>
                <v-list-item-content>
                  <v-list-item-subtitle>
                    <span class="font-weight-bold">Country: </span>
                    {{ patient.location.country }}
                  </v-list-item-subtitle>
                  <v-list-item-subtitle>
                    <span class="font-weight-bold">State: </span>
                    {{ patient.location.state }}
                  </v-list-item-subtitle>
                  <v-list-item-subtitle>
                    <span class="font-weight-bold">City: </span>
                    {{ patient.location.city }}
                  </v-list-item-subtitle>
                  <v-list-item-subtitle>
                    <span class="font-weight-bold">Post Code: </span>
                    {{ patient.location.postcode }}
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-tab-item>

            <v-tab-item>Teste 3</v-tab-item>
          </v-tabs-items>
          <!-- <v-card-title class="justify-center"> </v-card-title> -->
          <!-- <v-card-subtitle class="text-center"> Informations </v-card-subtitle> -->
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
    allergies: {
      drugs: [
        {
          id: 1,
          name: 'AES',
        },
        {
          id: 2,
          name: 'Ayspinea',
        },
        {
          id: 3,
          name: 'Paracetyleno',
        },
        {
          id: 4,
          name: 'Dypiron',
        },
        {
          id: 5,
          name: 'Lastry',
        },
      ],
      foods: [
        {
          id: 1,
          name: 'Peanut',
        },
        {
          id: 2,
          name: 'Shrimp',
        },
      ],
    },
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
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
}
.gradient-color {
  background: #134e5e; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #67c37d,
    #4caf50
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #73d4a7,
    #4caf50
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
</style>
