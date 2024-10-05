<template>
  <q-layout view="hHh LpR lfr">
   <NavBar/>

    <!--on mobile layout add button for opening channel list-->

    <ChannelsDrawer/>
    
    <MembersDrawer/>

    <!-- <MembersDrawer v-on:profile-click="showProfile"/> -->

    <!-- <UserProfile :user="selectedUser" v-if="profile" @close="profile = false"/> -->
    
    <q-page-container>
      <q-page class="column justify-end">
        <q-infinite-scroll reverse class="full-width">
           <!--fill in user's name to jancsika-->
            <q-item v-for="message in messages" :key=message.text v-bind:message :class=" message.mentions != undefined && message.mentions.indexOf('jancsika') > -1 ?  'hovered mentioned' : 'hovered'">
              <q-item-section side>
                <q-avatar size=50px><img src='src/assets/kaguya.png'></q-avatar>
                <!-- <q-avatar v-else rounded :icon="user.icon" ></q-avatar> -->

              </q-item-section>

              <q-item-section>
                <q-item-label><b>{{message.from}}</b></q-item-label>
                <q-item-label lines="4">{{message.text}}</q-item-label>
              </q-item-section>
            </q-item>
            
          
        </q-infinite-scroll>
      </q-page>
    </q-page-container>

    <q-footer class="bg-white text-white" reveal>
      <q-toolbar>
        <q-form @submit.prevent="sendMessage" class="full-width">
          <q-input  @keydown.enter.prevent="sendMessage" outlined bottom-slots v-model="text" label="Type your message..." counter maxlength="200" rounded autogrow class="full-width q-py-lg">
            
            <template v-slot:append>
              <q-btn 
              icon="help" flat ripple >
            
                <q-tooltip anchor="top middle" self="bottom middle" :offset="[10, 10]" class="text-body1" style="overflow: visible;">
                  <div class="tooltip-content">
          <span>/join<br>/invite<br>/revoke<br>/kick<br>/list<br>/cancel<br>/quit</span>
          <div class="image-wrapper">
          <!-- <img src="src\assets\pepper-01.png" class="tooltip-image" /> -->
          </div>
        </div>

                  
                  
                </q-tooltip>
              </q-btn>
    
            </template>
    
            <template v-slot:after>
              <q-btn @click="sendMessage" type="submit" round dense flat icon="send"/>
            </template>
          </q-input>
        </q-form>

        

      </q-toolbar>
    </q-footer>


  </q-layout>




  
</template>

<script lang="ts">
import NavBar from 'src/components/NavBar.vue';
import MembersDrawer from 'src/components/MembersDrawer.vue';
import ChannelsDrawer from 'src/components/ChannelsDrawer.vue';
import { defineComponent, ref } from 'vue';
//import UserProfile from 'src/components/UserProfile.vue';
//import { User } from 'src/components/models'
//import EssentialLink, { EssentialLinkProps } from 'components/EssentialLink.vue';

export default defineComponent({
  
  name: 'MainLayout',

  components:{
    NavBar,
    MembersDrawer,
    ChannelsDrawer,
    //UserProfile
  },

  data () {
    return {

      rigtDrawerOpen: false,
      text: ref(''),
      text1: ref(''),
      ph: ref(''),
      dense: ref(false),
      rightDrawerOpen: ref(true),
      selectedUser: {},
      profile: false,
      messages:[
      {
        text: '@jancsika lorem ipsum',
        from: 'Sanyi',
        mentions: ['jancsika']
      },
      {
        text: 'lorem ipsum',
        from: 'Lajos',
        mentions: []
      },
      {
        text: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        from: 'Eszmeralda',
        mentions: []
        
      }
      ]
      
    }
  },

  methods: {
    toggleMembersDrawer () {
      this.rightDrawerOpen = !this.rightDrawerOpen;
    },
    sendMessage(){
      let message = this.text.trim()

      let commands = ['/join','/invite','/revoke','/kick','/list','/cancel','/quit']

      if (message.startsWith(commands[0])){
        //CREATE/JOIN CHANNEL
        console.log('CREATE/JOIN CHANNEL')
      }
      else if(message.startsWith(commands[1])){
        //INVITE BROSKI
        console.log('INVITE BROSKI')
      }
      else if(message.startsWith(commands[2])){
        //PRIVATE KICK
        console.log('PRIVATE KICK')
      }
      else if(message.startsWith(commands[3])){
        //PUBLIC KICK
        console.log('PUBLIC KICK')
      }
      else if(message.startsWith(commands[4])){
        //LIST MEMBERS
        console.log('MEMBERS')
      }
      else if(message.startsWith(commands[5])){
        //LEAVE CHANNEL
        console.log('LEAVE CHANNEL')
      }
      else if(message.startsWith(commands[6])){
        //DELETE CHANNEL BY OWNER
        console.log('DELETE CHANNEL BY OWNER')
      }


      if (message != '') {
        this.messages.push(
        {text: message,
        from: 'Sanyi',
        mentions:[]
        })
      }
      
      this.text = ''
    },
  }
});
</script>

<style lang="scss">
  .hovered:not(.mentioned):hover {
    background-color: $grey-3
  }
  .mentioned{
    background-color: $yellow-3
  }
  .mentioned:hover{
    background-color: $yellow-4
  }

  .tooltip-content {
  display: flex;
  align-items: center;

}

.image-wrapper {
  position: relative;
  width: 40px;
  height: 0;
}

.tooltip-image {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: -200px;
  width: 300px; 
  height: auto;
}
</style>
