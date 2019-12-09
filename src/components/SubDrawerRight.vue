<template>
    <v-navigation-drawer
      v-model="drawer"
      fixed
      right
      temporary
    />
</template>

<script>
    import { mapGetters, mapMutations } from 'vuex'
    export default {
        computed:{
            ...mapGetters(['subDrawerRight']),
            drawer:{
                get(){
                    return this.subDrawerRight
                },
                set(newValue){
                    this.changeSubDrawerRight(newValue)
                    return newValue
                }
            }
        },
        methods:{
            ...mapMutations(['changeSubDrawerRight'])
        }
    }
</script>