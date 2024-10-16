<template>
    <q-btn 
          dense 
          flat 
          round 
          icon="settings" 
        >
        <q-menu>
        <div class="row no-wrap q-pa-md">
          <div class="column">
            <div class="text-h6 q-mb-md">Settings</div>
            <q-toggle v-model="notification" label="Notifications only addressed to me"/>
            <q-option-group
                :options="options"
                type="radio"
                v-model="state"
             />
            <q-btn
              color="primary"
              label="Logout"
              size="md"
              v-close-popup
              @click="logout"
            />
          </div>
        </div>
      </q-menu>
      
      </q-btn>
</template>

<script>

</script>

<script>
 import { defineComponent, ref } from 'vue'

export default defineComponent({
    name: 'SettingsMenu',
    components:{},

    setup(){
      return{
        notification: ref(false),
        state: ref('online'),
        options: [
        { label: 'Online', value: 'online', color: 'green' },
        { label: 'Do not Disturb', value: 'dnd', color: 'red' },
        { label: 'Offline', value: 'offline', color: 'grey' }
      ]
      }

      

    },


})
</script>