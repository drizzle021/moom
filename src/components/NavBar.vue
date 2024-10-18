<template>
<q-header class="z-top" elevated>
      <q-toolbar>

        <q-btn flat @click="toggleChannelsDrawer">
          <q-avatar size="40px" text-color="white" class="q-ml-sm" square>
          <img src="src\assets\logo.png" alt="logo">
        </q-avatar>

        </q-btn>
        
        <q-avatar
          icon="tag"
          class="q-ml-lg"
        />

        <q-toolbar-title>
          {{selectedChannel.name}}
        </q-toolbar-title>

        <q-btn 
          dense 
          flat 
          round 
          icon="account_circle" 
          @click="openProfile"  
        />

        <q-btn 
          dense 
          flat 
          round 
          icon="group" 
          @click="toggleMembersDrawer" 
        />

        <SettingsMenu></SettingsMenu>

        

        <!-- <q-input outlined v-model="text1" label="Search" maxlength="30" rounded class="q-pa-sm" dense bg-color="white" >
          

       </q-input> -->


      </q-toolbar>
</q-header>
</template>

<script>
  import { defineComponent, computed } from 'vue'
  import { useStore } from 'src/store'
  import SettingsMenu from 'src/components/SettingsMenu.vue';


  export default defineComponent({
    name: 'NavBar',
    components:{SettingsMenu},
    
    setup(){
      const store = useStore()
      const selectedChannel = computed(() => store.state.ui.selectedChannel)
      const toggleMembersDrawer = () => store.commit('ui/toggleMembersDrawer')
      const toggleChannelsDrawer = () => store.commit('ui/toggleChannelsDrawer')
      return{
        toggleMembersDrawer,
        toggleChannelsDrawer,
        
        selectedChannel

      }
      

    },
    computed: {
      loggedInProfile:{
        get(){
          return this.$store.state.ui.loggedInProfile
        },
      },
    },
    methods:{
      openProfile(){
        this.$store.commit('ui/switchUserProfile', this.loggedInProfile)
        this.$store.commit('ui/toggleUserProfile')
      },
    }

  })

</script>

<style scoped>
</style>