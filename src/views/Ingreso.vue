<template>
    <v-layout justify-center>
        <v-flex  xs12 sm8 md6 xl4>
            <v-card>
                <v-card-text class="display-1 text-uppercase white--text text-center" :class="registro ? 'accent' : 'primary' ">
                    <span v-if="!registro">Ingreso</span>
                    <span v-else>Registro</span>
                </v-card-text>
                <v-card-text>
                    <v-btn block color="error" @click="google">
                        <v-icon left>mdi-google</v-icon>
                        Google
                    </v-btn>
                    <v-btn block color="info" class="mt-2" @click="facebook">
                        <v-icon left>mdi-facebook</v-icon>
                        Facebook
                    </v-btn>
                </v-card-text> 
                <v-card-text>
                    <v-btn v-if="!registro" block color="" @click="registro = true">
                        ¿No tienes cuenta? Registrate aquí
                    </v-btn>
                    <v-btn v-else block color="" @click="registro = false">
                        ¿Ya tienes cuenta? Ingresa aquí
                    </v-btn>
                </v-card-text>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
import { firebase, auth } from "@/firebase";
import { mapActions } from 'vuex'
import router from '@/router'
    export default {
        data: () => ({
            registro: false
        }),
        methods: {
            ...mapActions(['setUsuario']),
            facebook(){
                const provider = new firebase.auth.FacebookAuthProvider();

                this.ingresar(provider);

            },
            google(){
                const provider = new firebase.auth.GoogleAuthProvider();

                this.ingresar(provider);
            },
            async ingresar(provider){
                firebase.auth().languageCode = 'es';
                try { 
                    const result = await firebase.auth().signInWithPopup(provider)
                    const user = result.user;
                    this.setUsuario(user)
                    router.replace({name: 'home'})
                }catch (error){
                    console.log(error)
                }
            }
        },
        mounted() {
        },
    }
</script>