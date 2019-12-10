<template>
    <v-navigation-drawer
      v-model="drawer"
      app
      clipped
      right
    >
      <v-list dense>
        <!--<v-list-item @click.stop="changeSubDrawerRight(true)">
          <v-list-item-action>
            <v-icon>mdi-exit-to-app</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Open Temporary Drawer right</v-list-item-title>
          </v-list-item-content>
        </v-list-item> -->
      </v-list>
    </v-navigation-drawer>
</template>

<script>
    import { mapMutations, mapGetters } from 'vuex'
    export default {
        computed:{
            ...mapGetters(['drawerRight']),
            drawer:{
                get(){
                    return this.drawerRight
                },
                set(newValue){
                    this.changeDrawerRight(newValue)
                    return newValue
                }
            }
        },
        methods:{
            ...mapMutations(['changeSubDrawerRight', 'changeDrawerRight'])
        }
    }
</script>