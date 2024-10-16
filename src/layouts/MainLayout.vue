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
          <q-infinite-scroll reverse @load="onLoad" :offset="100">
            <!--fill in user's name to jancsika-->
            <MessageComponent
              v-for="message in messages"
              :key="message.text"
              :message="message"
            />
              
            
          </q-infinite-scroll>
      </q-page>
    </q-page-container>

    <q-footer class="bg-white text-white" reveal>
      <q-toolbar>
        <q-form @submit.prevent="sendMessage" class="full-width">
          <q-input  @keydown.enter.prevent="sendMessage" outlined bottom-slots v-model="text" label="Type your message..." counter maxlength="2000" rounded autogrow class="full-width q-py-lg">
            
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
import { useQuasar } from 'quasar'
import MessageComponent from 'src/components/MessageComponent.vue';



export default defineComponent({
  
  name: 'MainLayout',

  components:{
    NavBar,
    MembersDrawer,
    ChannelsDrawer,
    MessageComponent
    //UserProfile
  },
  setup(){
    const $q = useQuasar(); 
    return{

      messageNotif(from:string) {
        $q.notify({
          message: from,
          //caption: '5 minutes ago',
          color: 'secondary'
        })
      }
    }
  },

  data () {
    return {
      text: ref(''),
      text1: ref(''),
      ph: ref(''),
      dense: ref(false),
      selectedUser: {},
      profile: false,
      messages:[
      {
        id: 1,
        text: '@jancsika lorem ipsum',
        from: 'Sanyi',
        mentions: ['jancsika']
      },
      {
        id: 2,
        text: 'lorem ipsum',
        from: 'Lajos',
        mentions: []
      },
      {
        id: 3,
        text: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        from: 'Eszmeralda',
        mentions: []
        
      },
      {
        id: 4,
        text: 'lorem ipsum',
        from: 'Lajos',
        mentions: []
      },
      {
        id: 5,
        text: 'lorem ipsum',
        from: 'Lajos',
        mentions: []
      },
      {
        id: 4,
        text: 'lorem ipsum',
        from: 'Lajos',
        mentions: []
      },
      {
        id: 5,
        text: 'lorem ipsum',
        from: 'Lajos',
        mentions: []
      },
      {
        id: 4,
        text: 'lorem ipsum',
        from: 'Lajos',
        mentions: []
      },
      {
        id: 5,
        text: 'lorem ipsum',
        from: 'Lajos',
        mentions: []
      },
      {
        id: 4,
        text: 'lorem ipsum',
        from: 'Lajos',
        mentions: []
      },
      {
        id: 5,
        text: 'lorem ipsum',
        from: 'Lajos',
        mentions: []
      },
      {
        id: 4,
        text: 'lorem ipsum',
        from: 'Lajos',
        mentions: []
      },
      {
        id: 5,
        text: 'lorem ipsum',
        from: 'Lajos',
        mentions: []
      },
      {
        id: 4,
        text: 'lorem ipsum',
        from: 'Lajos',
        mentions: []
      },
      {
        id: 5,
        text: 'lorem ipsum',
        from: 'Lajos',
        mentions: []
      },
      {
        id: 4,
        text: 'lorem ipsum',
        from: 'Lajos',
        mentions: []
      },
      {
        id: 5,
        text: 'lorem ipsum',
        from: 'Lajos',
        mentions: []
      },{
        id: 4,
        text: 'lorem ipsum',
        from: 'Lajos',
        mentions: []
      },
      {
        id: 5,
        text: 'lorem ipsum',
        from: 'Lajos',
        mentions: []
      },
      ],
      page:1
      
    }
  },




  methods: {
    sendMessage(){
      let message = this.text.trim()

      let commands = ['/join','/invite','/revoke','/kick','/list','/cancel','/quit']

      if (message.startsWith(commands[0])){
        //CREATE/JOIN CHANNEL
        console.log('CREATE/JOIN CHANNEL')
        let publicity = true;
        let channelName = message.split(' ');
        if (channelName[channelName.length - 1] == '[private]'){
          publicity = false;
          channelName = channelName.slice(1,-1);
        }
        else{
          publicity = true;
          channelName = channelName.slice(1);
        }

        const channel =  {
              name: channelName.join(' '),
              //caption: 'first-channel',
              icon: null,
              is_private: publicity
              // link: ''
            }

        this.$store.commit('ui/addChannel', channel);
        //  this.addChannelNotif(this.channelName.trim());


      }
      else if(message.startsWith(commands[1])){
        //INVITE BROSKI
        console.log('INVITE BROSKI');
        let userName = message.split(' ')[1];
        
        const user = {
          name: userName,
          status: '',
          icon: '',
          state: '',
        }

        this.$store.commit('ui/addMember', user);
      }
      else if(message.startsWith(commands[2])){
        //PRIVATE KICK
        console.log('PRIVATE KICK')
      }
      else if(message.startsWith(commands[3])){
        //PUBLIC KICK
        console.log('PUBLIC KICK')
        let userName = message.split(' ')[1];
        
        const user = {
          name: userName,
          status: '',
          icon: '',
          state: '',
        }
        this.$store.commit('ui/kickMember', user);

      }
      else if(message.startsWith(commands[4])){
        //LIST MEMBERS
        console.log('MEMBERS');
        this.$store.commit('ui/toggleMembersDrawer');

      }
      else if(message.startsWith(commands[5])){
        //LEAVE CHANNEL
        console.log('LEAVE CHANNEL');
        this.$store.commit('ui/deleteChannel');
      }
      else if(message.startsWith(commands[6])){
        //DELETE CHANNEL BY OWNER
        console.log('DELETE CHANNEL BY OWNER')
        this.$store.commit('ui/deleteChannel');

      }

      else{
        if (message != '') {
        const newMessage = {
        id: 7,
        text: message,
        from: 'Sanyi',
        mentions:[]
        }

        this.messages.push(newMessage);

        this.messageNotif(newMessage.from);

      }
      }
      
      
      this.text = ''
    },
    
    onLoad(){
      setTimeout(() => {
        const messages = [
          {id:this.page*3+1,
            text:'new Message',
            from:'abc',
            mentions:[]
          },
          {id:this.page*3+2,
            text:'new Message',
            from:'abc',
            mentions:[]
          },
          {id:this.page*3+3,
            text:'new Message',
            from:'abc',
            mentions:[]
          },
        ];
        this.messages=[...messages,...this.messages];
        this.page+=1;
      },1000)


    }
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
