<template>
  <v-card color="grey lighten-4" flat tile>
    <v-toolbar>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>My Personal Project</v-toolbar-title>

      <v-spacer></v-spacer>

      <a
        href="https://www.linkedin.com/in/victor-almeida-304b05205/"
        target="_blank"
      >
        <v-btn icon>
          <v-icon> mdi-linkedin </v-icon>
        </v-btn>
      </a>
    </v-toolbar>
  </v-card>
</template>
<script>
export default {
  name: 'AppHeader',

  data: () => ({
    drawer: false,
    group: null,
  }),
}
</script>
