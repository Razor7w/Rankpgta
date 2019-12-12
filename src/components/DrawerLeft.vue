<template>
    <v-navigation-drawer
      v-model="drawer"
      app
      >
      <!-- <v-list dense> -->
        <!-- <v-list-item @click.stop="changeSubDrawerLeft(true)">
          <v-list-item-action>
            <v-icon>mdi-exit-to-app</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Open Temporary Drawer left</v-list-item-title>
          </v-list-item-content>
        </v-list-item> -->
    <!--  <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            {{ $t("app_name") }}
          </v-list-item-title>
          <v-list-item-subtitle>
            Menú
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list> -->
      <v-list dense>
        <v-list-item-content>
          <v-list-item-title class="title ml-2">
            {{ $t("app_name") }}
          </v-list-item-title>
          <v-list-item-subtitle class="ml-4">
            Menú
          </v-list-item-subtitle>
        </v-list-item-content>
        <v-divider></v-divider>
        <template v-for="item in items">
          <v-list-group
            v-if="item.children"
            :key="item.text"
            v-model="item.model"
            :prepend-icon="item.model ? item.icon : item['icon-alt']"
            append-icon=""
          >
            <template v-slot:activator>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>
                    {{ item.text }}
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </template>
            <!-- Inicio child -->
            <v-list-item
              v-for="(child, i) in item.children"
              :key="i"
              link
              @click="changeLanguage(child.lang)"
            >
              <v-list-item-action v-if="child.icon">
                <v-icon>{{ child.icon }}</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>
                 {{ child.text }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <!-- Fin Child -->
          </v-list-group>
          <v-list-item
            v-else
            :key="item.text"
            link
          >
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>
                {{ item.text }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
      <!-- </v-list> -->
    </v-navigation-drawer>
</template>

<script>
    import { mapMutations, mapGetters } from 'vuex'
    export default {
      data () {
      return {
      /*  items: [
          { title: 'Inicio', icon: 'mdi-home' },
          { title: 'Rankings', icon: 'mdi-crown-outline' },
          { title: 'Calendario', icon: 'mdi-calendar' },
          { title: 'Posts', icon: 'mdi-post' },
          { title: 'Players', icon: 'mdi-account' },
        ],
        items2: ['Foo', 'Bar', 'Fizz', 'Buzz']*/
      langs: ['es', 'en'],
      items: [
        { icon: 'mdi-home', text: 'Inicio' },
        { icon: 'mdi-crown-outline', text: 'Rankings' },
        { icon: 'mdi-calendar', text: 'Calendario' },
        { icon: 'mdi-post', text: 'Posts' },
        { icon: 'mdi-account', text: 'Players' },
        { icon: 'mdi-help-circle', text: 'Ayuda' },
        {
          icon: 'mdi-chevron-up',
          'icon-alt': 'mdi-chevron-down',
          text: 'Lenguaje',
          model: false,
          children: [
            { text: 'Español', lang: 'es' },
            { text: 'Ingles' , lang: 'en'},
          ],
        },
      ],
      }
    },
        computed:{
            ...mapGetters(['drawerLeft']),
            drawer:{
                get(){
                  return this.drawerLeft
                },
                set(newValue){
                  this.changeDrawerLeft(newValue)
                  return newValue
                }
            }
        },
        methods:{
            ...mapMutations(['changeSubDrawerLeft',  'changeDrawerLeft']),
            changeLanguage(lang){
              this.$i18n.locale = lang
              this.$router.push({
                params: {lang: lang}
              })
            }
        }
    }
</script>