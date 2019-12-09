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
      <v-app-bar-nav-icon @click.stop="changeDrawerRight" />
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