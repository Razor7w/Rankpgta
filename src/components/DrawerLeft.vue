<template>
    <v-navigation-drawer
      v-model="drawer"
      app
      >
      <v-list dense>
        <!-- <v-list-item @click.stop="changeSubDrawerLeft(true)">
          <v-list-item-action>
            <v-icon>mdi-exit-to-app</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Open Temporary Drawer left</v-list-item-title>
          </v-list-item-content>
        </v-list-item> -->
      </v-list>
    </v-navigation-drawer>
</template>

<script>
    import { mapMutations, mapGetters } from 'vuex'
    export default {
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
            ...mapMutations(['changeSubDrawerLeft',  'changeDrawerLeft'])
        }
    }
</script>