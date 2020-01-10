<template>
    <v-footer
      app
      color="indigo"
      class="white--text"
    >
      <span class="overline mr-2">by</span>
      <span class="font-italic font-weight-bold mr-2">Razor7w</span>
      <span class="font-italic font-weight-light overline">1.0.0</span>
      <v-spacer />
      <v-avatar>
        <img
          src="@/assets/eeuu.svg"
          alt="Chile"
          class="mr-2"
          @click="changeLanguage('en')"
        >
      </v-avatar>
      <v-avatar>
        <img
          @click="changeLanguage('es')"
          src="@/assets/chile.svg"
          alt="Chile"
          class="mr-2"
        >
      </v-avatar>
      <span class="mr-2">V Región</span>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
</template>

<script>
  export default {
    data () {
      return {
      }
    },
    methods:{
      changeLanguage(lang){
        this.$i18n.locale = lang
        this.$router.push({
          params: {lang: lang}
        }).catch(err => {})
      }
    }
  }
</script>

<style scoped>
  .v-avatar {
    height: 25px !important;
    min-width: 30px !important;
    width: 25px !important;
  }
</style>