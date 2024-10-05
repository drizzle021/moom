<template>
        <q-drawer v-model="rightDrawerOpen" side="right" :width="400" show-if-above>

<q-list>
  <q-item-label
    header
  >
    <q-btn
    dense 
    flat  
    icon="add"
    @click="addMemberDialog = true"

    label="add member"

  />

  </q-item-label>
  <q-separator/>

  <q-item v-for="member in membersList"
    :key="member.name"
    v-bind="member"
    clickable
    @click="showProfile(member)"
    >
  
    <q-item-section side>
      <q-avatar v-if="member.icon!='person'" size="3rem"><img :src="member.icon"></q-avatar>
      <q-avatar v-else rounded :icon="member.icon" ></q-avatar>
    </q-item-section>

    <q-item-section>
      <q-item-label>{{member.name}}</q-item-label>
      <q-item-label lines="3">{{member.status}}</q-item-label>
    </q-item-section>


    <q-item-section side>
      <q-badge :color= "member.state == 'online' ? 'green-7' : member.state == 'offline' ? 'grey-7' : 'red-7'">
        {{ member.state == 'online' ? 'Online' : member.state == 'offline' ? 'Offline' : 'DnD'}}
      </q-badge>
    </q-item-section>


    
  
  </q-item>

</q-list>
  
</q-drawer>


<q-dialog v-model="addMemberDialog">
  <q-card style="min-width: 350px">
    <q-card-section>
      <div class="text-h6">User Nickname</div>
    </q-card-section>
  
    <q-form @submit.prevent="addMember">
      <q-card-section class="q-pt-none">
        <q-input dense v-model="nickname" autofocus @keyup.enter="addMemberDialog = false" />
      </q-card-section>

      <q-card-actions align="right" class="text-primary">
        <q-btn flat label="Cancel" v-close-popup />
        <q-btn type="submit" flat label="Add Member" v-close-popup/>
      </q-card-actions>
    </q-form>
  </q-card>
 
</q-dialog>

<MemberMenu/>



      


</template>

<script>
  import { defineComponent, ref } from 'vue'
  import MemberMenu from './MemberMenu.vue';

  const membersList = [
  {
    name: 'User 1',
    status: 'first-user',
    icon: 'person',
    state: 'online',
    //change online to 3 states online, offline, DnD
    // link: ''
  },
  {
    name: 'User 2',
    status: 'second-user',
    icon: 'src/assets/kotori.jpg',
    state: 'online',
    // link: ''
  },
  {
    name: 'User 3',
    status: 'second-user',
    icon: 'src/assets/kaguya.png',
    state: 'offline',
    // link: ''
  },
  {
    name: 'User 4',
    status: 'first-user',
    icon: 'src/assets/kurumi.jpg',
    state: 'dnd',
    // link: ''
  },
];


  export default defineComponent({
    name: 'MembersDrawer',
    components:{MemberMenu},

    setup(){
      return{
        addMemberDialog: ref(false),
        nickname: ref('')
      }

    },
    data(){
      return{
        membersList,
        
      }
    },
    methods: {

      addMember () {
        console.log(this.nickname)

        // ADD PROPER VERIFICATION OF NAMES AND INFORM THE USER
        if (this.nickname.trim() != '') {
          this.membersList.push({
            name: this.nickname.trim(),
            status: 'added user',
            icon: 'person',
            state: 'online',
            // link: ''
          },)
        }
        this.nickname=''
        console.log(this.membersList)
      },
    }


  })



</script>

<style scoped>
</style>