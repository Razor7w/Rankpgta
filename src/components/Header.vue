<template>
    <v-app-bar
      app
      clipped-right
      color="indigo"
      dark
    >
      <v-app-bar-nav-icon @click.stop="changeDrawerLeft" />
      <v-toolbar-title>{{ $t("app_name") }}</v-toolbar-title>
      <v-spacer />
      <v-btn text icon @click.stop="changeDrawerRight">
              <v-icon>mdi-account</v-icon>
            </v-btn>
      <!-- <v-app-bar-nav-icon  /> -->
    </v-app-bar>
</template>

<script>
    import { mapMutations } from 'vuex'
    export default {
      methods:{
        ...mapMutations(['changeDrawerLeft', 'changeDrawerRight'])
      }
    }
</script>