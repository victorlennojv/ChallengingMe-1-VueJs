<template>
  <v-container fluid>
    <v-dialog
      v-model="modalFlag"
      max-width="400px"
      content-class="profile-image"
      @click:outside="$emit('toggleModal')"
    >
      <v-card class="text-center">
        <v-avatar size="128" class="mt-n16">
          <img :src="hasPictureProfile" alt="John" />
        </v-avatar>
        <v-card-title class="justify-center text-h6 py-2 px-4">
          {{ patientFullName }}
        </v-card-title>
        <v-card-subtitle class="text-subtitle-2"
          >{{ patient.email }}
        </v-card-subtitle>
        <v-card-subtitle class="ma-0 pa-0 text-subtitle-2"
          >{{ patient.gender }}
        </v-card-subtitle>
        <v-card-subtitle class="ma-0 pa-0 text-subtitle-2">
          {{ patientBirthDate }}
        </v-card-subtitle>
        <v-card-subtitle class="ma-0 pa-0 text-subtitle-2"
          >{{ patient.phone }}
        </v-card-subtitle>
        <v-card-subtitle class="ma-0 pa-0 text-subtitle-2"
          >{{ patient.nat }}
        </v-card-subtitle>
        <v-card-subtitle v-if="patientId" class="ma-0 text-subtitle-2"
          >{{ patientId }}
        </v-card-subtitle>

        <v-divider></v-divider>

        <v-card-actions class="justify-center">
          <v-btn
            small
            color="primary"
            class="mx-2 px-8 py-4"
            @click="$emit('toggleModal')"
          >
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import { formatDate } from '@/helpers/util.js'

export default {
  name: 'ProfileModal',

  props: {
    modal: {
      type: Boolean,
      required: true,
    },
    patient: {
      type: Object,
      required: true,
    },
  },
  computed: {
    modalFlag() {
      return this.modal
    },

    patientFullName() {
      return (
        this.patient.name?.title +
        ' ' +
        this.patient.name?.first +
        ' ' +
        this.patient.name?.last
      )
    },

    patientBirthDate() {
      const normalizedDate = formatDate(this.patient.dob?.date)
      return normalizedDate
    },

    patientId() {
      return this.patient.id?.value
        ? this.patient.id?.name + ': ' + this.patient.id?.value
        : false
    },

    hasPictureProfile() {
      return this.patient.picture?.large
        ? this.patient.picture.large
        : `https://mascaro.com.br/wp-content/uploads/2021/06/dep.png`
    },
  },
}
</script>

<style scoped>
>>> .v-dialog {
  overflow-y: visible;
}
</style>
