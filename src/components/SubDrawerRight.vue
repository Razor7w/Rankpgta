<template>
    <v-navigation-drawer
      v-model="drawer"
      fixed
      right
      temporary
    />
</template>

<script>
    import { mapState, mapMutations } from 'vuex'
    export default {
        computed:{
            ...mapState(['subDrawerRight']),
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