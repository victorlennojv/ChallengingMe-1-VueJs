<template>
  <v-container fluid>
    <v-dialog v-model="modalFlag" max-width="400px">
      <v-card class="text-center">
        <v-card-title
          class="justify-center text-h6 primary white--text py-2 px-4"
        >
          {{ title }}
        </v-card-title>

        <v-card-text class="text-subtitle-2 mt-5"> {{ message }}</v-card-text>

        <v-divider></v-divider>

        <v-card-actions class="justify-center">
          <v-btn
            small
            dark
            color="red"
            class="mx-2 px-8 py-4"
            @click="$emit('handleDelete')"
          >
            Sim
          </v-btn>
          <v-btn
            small
            color="primary"
            class="mx-2 px-8 py-4"
            @click="$emit('toggleModal')"
          >
            Não
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
export default {
  name: 'AppModal',

  props: {
    modal: {
      type: Boolean,
      required: true,
    },
    title: {
      type: String,
      required: false,
      default: 'Perfil',
    },
    message: {
      type: String,
      required: false,
      default: '',
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
  },
}
</script>

<style></style>
