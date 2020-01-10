<template>
    <v-app-bar
      app
      clipped-right
      color="indigo"
      dark
    >
      <v-app-bar-nav-icon @click.stop="changeDrawerLeft" />
      <v-toolbar-title @click="GoHome">{{ $t("app_name") }}</v-toolbar-title>
      <v-spacer />
      <v-btn text @click.stop="changeDrawerRight" v-if="isAuthenticated">
          <v-avatar size="36" class="mr-2">
            <img
              :src="usuario.photoUrl"
              alt="John"
            >
          </v-avatar>
          <span>{{ usuario.nombre }}</span>
          <v-icon>mdi-chevron-down</v-icon>
      </v-btn>
      <v-btn text v-else @click="GoIngreso">
          <v-icon>mdi-account</v-icon>
          <span>Iniciar Sesión</span>
      </v-btn>
      <!-- <v-app-bar-nav-icon  /> -->
    </v-app-bar>
</template>

<script>
    import { mapMutations, mapState } from 'vuex'
    export default {
      data () {
        return {
        
        }
      },
      methods:{
        ...mapMutations(['changeDrawerLeft', 'changeDrawerRight']),
        GoHome(){
          this.$router.push(`/${this.$i18n.locale}/`).catch(err => {})
        },
        GoIngreso(){
          this.$router.push(`/${this.$i18n.locale}/ingreso`).catch(err => {})
        }
      },
      computed: {
        ...mapState(['isAuthenticated', 'dataUser', 'usuario'])
      },
      mounted() {
      },
    }
</script>