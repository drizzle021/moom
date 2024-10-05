<template>
<q-header elevated>
      <q-toolbar>
        <q-avatar size="40px" text-color="white" class="q-ml-sm" square>
          <img src="src\assets\logo.png" alt="logo">
        </q-avatar>

        <q-avatar
          icon="tag"
          class="q-ml-lg"
        />

        <q-toolbar-title>
          ChannelName
        </q-toolbar-title>

        <q-btn 
          dense 
          flat 
          round 
          icon="account_circle"  
        />

        <q-btn 
          dense 
          flat 
          round 
          icon="group" 
          @click="toggleMembersDrawer" 
        />

        <q-input outlined v-model="text1" label="Search" maxlength="30" rounded class="q-pa-sm" dense bg-color="white" >
          

       </q-input>


      </q-toolbar>
</q-header>
</template>

<script>
  import { defineComponent } from 'vue'
  //import { useStore } from 'src/store'

  export default defineComponent({
    name: 'NavBar',
    components:{},
    setup(){
      //const store = useStore()
      //const toggleMembersDrawer = () => store.commit('ui/toggleMembersDrawer')
      return{
        //toggleMembersDrawer
      }

    }

  })

</script>

<style scoped>
</style>