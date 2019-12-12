<template>
  <v-app app>
    <DrawerRight/>
    <Header/>
    <DrawerLeft/>
    <SubDrawerLeft/>
    <!-- Content -->
    <v-content>
      <v-tabs
        centered
      >
        <v-tab :to="`/${$i18n.locale}/`">Inicio</v-tab>
        <v-tab>Rankings</v-tab>
        <v-tab>Calendario</v-tab>
        <v-tab>Posts</v-tab>
        <v-tab>Players</v-tab>
      </v-tabs>
      <v-container>
        <router-view :key="$route.fullPath"/>
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
};
</script>
