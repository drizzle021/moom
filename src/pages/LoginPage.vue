<template>
    <q-layout view="hHh lpR fFf">
  
      <q-header class="bg-primary text-white">
        <q-toolbar>
            <q-avatar size="40px" text-color="white" class="q-ml-sm" square>
                <img src="src\assets\logo.png" alt="logo">
            </q-avatar>
        </q-toolbar>
      </q-header>
  
      <q-page-container>
        <q-page class="bg-primary">
            <div class="q-pa-xl column flex-center">
                <div class="q-gutter-y-md" style="min-width: 600px; max-width: 700px;">
                    <q-card class="background-light">
                        <q-tabs v-model="tab" indicator-color="primary" active-color="primary" align="justify" narrow-indicator dense>
                            <q-tab name="login" label="Log In"  ripple="false"/>
                            <q-tab name="register" label="Register" ripple="false"/>
                        </q-tabs>
                        <q-separator/>

                        <q-tab-panels v-model="tab" class="background-light">
                            <q-tab-panel name="login">
                                <q-form autofocus>
                                    <div class="column flex-start">
                                        <label class="q-mb-sm q-mt-lg">
                                            EMAIL <span class="required-asterisk">*</span>
                                        </label>
                                        <q-input v-model="email" type="email" bg-color="white" borderless/>
                                    </div>

                                    <div class="column flex-start q-mt-lg">
                                        <label class="q-mb-sm">
                                            PASSWORD <span class="required-asterisk">*</span>
                                        </label>
                                        <q-input v-model="password" type="password" bg-color="white" borderless/>
                                    </div>
                                    <div class="row flex-center q-my-lg flex-center">
                                        <q-btn type="submit" text-color="white" class="bg-primary" @click="login">
                                            Log In
                                        </q-btn>
                                    </div>
                                </q-form>
                            </q-tab-panel>
                            <q-tab-panel name="register">

                                <q-form autofocus>
                                    <div class="column flex-start">
                                        <label class="q-mb-sm q-mt-lg">
                                            NAME <span class="required-asterisk">*</span>
                                        </label>
                                        <q-input v-model="name" type="" bg-color="white" borderless/>
                                    </div>
                                    <div class="column flex-start">
                                        <label class="q-mb-sm q-mt-lg">
                                            SURNAME <span class="required-asterisk">*</span>
                                        </label>
                                        <q-input v-model="surname" type="" bg-color="white" borderless/>
                                    </div>
                                    <div class="column flex-start">
                                        <label class="q-mb-sm q-mt-lg">
                                            NICKNAME <span class="required-asterisk">*</span>
                                        </label>
                                        <q-input v-model="nickname" type="" bg-color="white" borderless/>
                                    </div>
                                    <div class="column flex-start">
                                        <label class="q-mb-sm q-mt-lg">
                                            EMAIL <span class="required-asterisk">*</span>
                                        </label>
                                        <q-input v-model="email" type="email" bg-color="white" borderless/>
                                    </div>

                                    <div class="column flex-start q-mt-lg">
                                        <label class="q-mb-sm">
                                            PASSWORD <span class="required-asterisk">*</span>
                                        </label>
                                        <q-input v-model="password" type="password" bg-color="white" borderless/>
                                    </div>
                                    <div class="row flex-center q-my-lg flex-center">
                                        <q-file
                                            v-model="file"
                                            label="upload pfp"
                                            filled
                                            max-files="1"
                                            style="max-width: 300px"
                                        >
                                            <template v-slot:prepend>
                                                <q-icon name="attach_file" />
                                            </template>

                                        </q-file>
                                        <q-btn type="submit" text-color="white" class="bg-primary q-mx-md" @click="register">
                                            Register
                                        </q-btn>
                                    </div>
                                </q-form>

                            </q-tab-panel>

                        </q-tab-panels>
                        

                       
                    </q-card>
                </div>
            </div>
            
        </q-page>
      </q-page-container>

    </q-layout>
  </template>

<script>
import { ref } from 'vue';
//import { useRouter } from 'vue-router'

export default{
    setup(){
        //const router = useRouter()
        return{
            tab: ref('login'),
            file: ref(null),
            name: ref(''),
            surname: ref(''),
            nickname: ref(''),
            email: ref(''),
            password: ref(''),
        }

    },
    methods: {
/*         register(){
            this.router.push({name:'chat'})
        },
        login(){
            this.router.push({name:'chat'})

        } */
    }

}
</script>

<style>
q-tab{
    color:black;
}

.background-light{
    background-color:#E9ebf8
}

.required-asterisk {
    color: red;
}


</style>