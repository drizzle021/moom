<template>
     <q-dialog v-model="userProfileState" class="full-width" @escape-key="closeDialog" no-backdrop-dismiss no-shake>
      <q-card>
        <q-card-section>
          <div class="text-h6">{{ selectedUser.name }}</div>
        </q-card-section>
        <q-card-section>
          <div class="text-h6">{{ selectedUser.state }}</div>
        </q-card-section>
        <q-card-actions>
          <q-btn flat label="Close" @click="closeDialog"/>
        </q-card-actions>
      </q-card>
    </q-dialog>
</template>

<script>
 import { defineComponent } from 'vue'

export default defineComponent({
    name: 'UserProfile',
    components:{},

    computed: {     // same as method - but cached
      userProfileState:{
        get(){
          return this.$store.state.ui.userProfileState
        },
      },
      selectedUser:{
        get(){
          return this.$store.state.ui.userProfileSelected
        },
      }
    },
    methods:{
      closeDialog(){
        this.$store.commit('ui/toggleUserProfile')
      }
    }
})
</script>