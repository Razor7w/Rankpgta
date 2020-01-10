<template>
    <v-navigation-drawer
      v-model="drawer"
      fixed
      temporary
    />
</template>

<script>
    import { mapState, mapMutations } from 'vuex'
    export default {
        computed:{
            ...mapState(['subDrawerLeft']),
            drawer:{
                get(){
                    return this.subDrawerLeft
                },
                set(newValue){
                    this.changeSubDrawerLeft(newValue)
                    return newValue
                }
            }
        },
        methods:{
            ...mapMutations(['changeSubDrawerLeft'])
        }
    }
</script>