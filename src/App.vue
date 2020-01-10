<template>
  <v-app app>
    <DrawerRight v-if="isAuthenticated"/>
    <Header/>
    <DrawerLeft/>
    <!-- <SubDrawerLeft/> -->
    <!-- Content -->
    <v-content>
      <v-tabs v-if=" !($route.name === 'ingreso')"
        centered
      >
        <v-tab :to="`/${$i18n.locale}/`">Inicio</v-tab>
        <v-tab :to="`/${$i18n.locale}/rankings`">Rankings</v-tab>
        <v-tab :to="`/${$i18n.locale}/calendario`">Calendario</v-tab>
        <v-tab :to="`/${$i18n.locale}/publicaciones`">Publicaciones</v-tab>
        <v-tab :to="`/${$i18n.locale}/jugadores`">Jugadores</v-tab>
      </v-tabs>
      <v-container>
        <router-view/>
      </v-container>
    </v-content>
    <!-- /Content -->
    <SubDrawerRight/>
    <Footer/>
  </v-app>
</template>

<script>
import Footer from './components/Footer'
import Header from './components/Header'
import DrawerRight from './components/DrawerRight'
import DrawerLeft from './components/DrawerLeft'
import SubDrawerLeft from './components/SubDrawerLeft'
import SubDrawerRight from './components/SubDrawerRight'
import { mapState } from 'vuex'

export default {
  name: 'App',

  components: {
    Footer,
    Header,
    DrawerRight,
    DrawerLeft,
    SubDrawerLeft,
    SubDrawerRight
  },
  data: () => ({
  }),
  computed: {
        ...mapState(['isAuthenticated'])
  },
};
</script>
