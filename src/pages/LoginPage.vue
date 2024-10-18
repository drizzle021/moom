<template>
    <q-layout view="hHh lpR fFf">
  <q-page-container>
    <q-page class="bg-primary full-bg row flex-center">
      <div class="q-pa-md column flex-center relative-container form-wrapper">
        <div class="q-gutter-md form-container">
          <q-card class="background-light">
            <q-tabs v-model="tab" indicator-color="primary" active-color="primary" align="justify" narrow-indicator dense>
              <q-tab name="login" label="Log In" ripple="false" />
              <q-tab name="register" label="Register" ripple="false" />
            </q-tabs>
            <q-separator />
            <q-tab-panels v-model="tab" class="background-light">
              <q-tab-panel name="login" style="min-width: 400px;max-width:400px">
                <q-form>
                  <div class="q-gutter-y-sm q-mt-lg">
                    <label class="q-mb-xs "> EMAIL <span class="required-asterisk">*</span> </label>
                    <q-input v-model="email" type="email" bg-color="white" borderless />
                  </div>
                  <div class="q-gutter-y-sm q-mt-lg">
                    <label class="q-mb-xs"> PASSWORD <span class="required-asterisk">*</span> </label>
                    <q-input v-model="password" type="password" bg-color="white" borderless />
                  </div>
                  <div class="row flex-center q-my-md">
                    <q-btn type="submit" text-color="white" class="bg-primary" @click="loginUser"> Log In </q-btn>
                  </div>
                </q-form>
              </q-tab-panel>
              <q-tab-panel name="register" style="min-width: 400px;max-width:400px">
                <q-form>
                  <div class="q-gutter-y-sm q-mt-lg">
                    <label class="q-mb-xs "> NAME <span class="required-asterisk">*</span> </label>
                    <q-input v-model="name" bg-color="white" borderless />
                  </div>
                  <div class="q-gutter-y-sm q-mt-lg">
                    <label class="q-mb-xs "> SURNAME <span class="required-asterisk">*</span> </label>
                    <q-input v-model="surname" bg-color="white" borderless />
                  </div>
                  <div class="q-gutter-y-sm q-mt-lg">
                    <label class="q-mb-xs "> NICKNAME <span class="required-asterisk">*</span> </label>
                    <q-input v-model="nickname" bg-color="white" borderless />
                  </div>
                  <div class="q-gutter-y-sm q-mt-lg">
                    <label class="q-mb-xs "> EMAIL <span class="required-asterisk">*</span> </label>
                    <q-input v-model="email" type="email" bg-color="white" borderless />
                  </div>
                  <div class="q-gutter-y-sm q-mt-lg">
                    <label class="q-mb-xs"> PASSWORD <span class="required-asterisk">*</span> </label>
                    <q-input v-model="password" type="password" bg-color="white" borderless />
                  </div>
                  <div class="row flex-center q-my-md">
                    <q-file v-model="file" label="upload pfp" filled max-files="1" class="q-mx-auto">
                      <template v-slot:prepend>
                        <q-icon name="attach_file" />
                      </template>
                    </q-file>
                    <q-btn type="submit" text-color="white" class="bg-primary q-mx-md" @click="registerUser"> Register </q-btn>
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
import { useRouter } from 'vue-router'


export default{
    setup(){
      const router = useRouter();

      // login and redirect user to channels
      const loginUser = () => {
        router.push('/'); 
      }
      const registerUser = () => {
        router.push('/'); 
      }
        return{
            tab: ref('login'),
            file: ref(null),
            name: ref(''),
            surname: ref(''),
            nickname: ref(''),
            email: ref(''),
            password: ref(''),
            loginUser,
            registerUser
        }

    },
}
</script>

<style scoped lang="scss">



.full-bg{
    background-image: url('src/assets/moombg.jpg') !important;
    background-repeat: no-repeat !important;
    background-size: contain !important;
    background-color: $primary;
    background-position: center !important;
    height: 100vh;
}
@media (max-width: 1024px) {
  .full-bg {
    background-image: none !important;
  }
}

q-tab{
    color:black;
}

.background-light{
    background-color:#E9ebf8;
}

.required-asterisk {
    color: red;
}


</style>