<template>
    <v-navigation-drawer
      v-model="drawer"
      app
      clipped
      right
      >
      <v-list dense>
        <v-list-item-content>
          <v-list-item-title class="title ml-2">
          </v-list-item-title>
          <v-list-item-subtitle class="ml-4">
            Opciones
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
          </v-list-group>
          <v-list-item
            v-else
            :key="item.text"
            link
            @click="Accion(item.action)"
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
    import { mapMutations, mapState, mapActions } from 'vuex'
    export default {
      data: () => ({
        items: [
          { icon: 'mdi-account-settings', text: 'Perfil' , action: 'A0'},
          { icon: 'mdi-settings', text: 'Configuración', action: 'A1' },
          { icon: 'mdi-exit-to-app', text: 'Salir', action: 'A2' }
        ]
      }),
      computed:{
            ...mapState(['drawerRight', 'usuario']),
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
            ...mapMutations(['changeSubDrawerRight', 'changeDrawerRight']),
            ...mapActions(['cerrarSesion']),
            Accion(opt){
              switch (opt) {
                case 'A0':
                  break;
                case 'A1':
                  break;
                case 'A2':
                  this.cerrarSesion()
                  break;
                default:
                  break;
              }
            }
      }
    }
</script>