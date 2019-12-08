<template>
  <v-app app>
    <v-navigation-drawer
      v-model="drawerRight"
      app
      clipped
      right
    >
      <v-list dense>
        <v-list-item @click.stop="right = !right">
          <v-list-item-action>
            <v-icon>mdi-exit-to-app</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Open Temporary Drawer right</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!--<v-app-bar
      app
      clipped-right
      color="indigo"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>{{ $t("app_name") }}</v-toolbar-title>
      <v-spacer />
      <v-app-bar-nav-icon @click.stop="drawerRight = !drawerRight" />
    </v-app-bar> -->
    <Header/>

    <v-navigation-drawer
      v-model="drawer"
      app
      >
      <v-list dense>
        <v-list-item @click.stop="left = !left">
          <v-list-item-action>
            <v-icon>mdi-exit-to-app</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Open Temporary Drawer left</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-navigation-drawer
      v-model="left"
      fixed
      temporary
    />

    <v-content>
      <v-container
      >
      <router-view :key="$route.fullPath"/>
      </v-container>
    </v-content>

    <v-navigation-drawer
      v-model="right"
      fixed
      right
      temporary
    />

    <Footer/>
  </v-app>
</template>

<script>
//import HelloWorld from './components/HelloWorld';
import Footer from './components/Footer'
import Header from './components/Header'

export default {
  name: 'App',

  components: {
    //HelloWorld,
    Footer,
    Header
  },
  props: {
      source: String,
  },
  data: () => ({
    drawer: false,
    drawerRight: false,
    right: false,
    left: false,
  }),
};
</script>
