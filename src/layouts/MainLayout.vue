<template>
  <q-layout view="hHh LpR lfr">
    <q-header elevated>
      <q-toolbar>
        <q-avatar size="60px" color="secondary" text-color="white" class="q-ml-sm">
                    Logo
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
          @click="toggleRightDrawer" 
        />

        <q-input outlined v-model="text1" label="Search" maxlength="30" rounded class="q-pa-sm" dense bg-color="white" >
          

       </q-input>


      </q-toolbar>
    </q-header>

    <!--on mobile layout add button for opening channel list-->

    <q-drawer 
      show-if-above
      :width="100"
      class="bg-primary"
      >      
      <q-scroll-area style="height: inherit; " >
          <q-list class="column flex-center" >
            <q-item>
              <q-item-section>
                <q-avatar size="60px" color="secondary" text-color="white" icon="add">
                    
                </q-avatar>
              </q-item-section>
            </q-item>

            <q-item v-for="channel in channelList" :key="channel.name" v-bind="channel">
              <q-item-section>
                <q-avatar v-if="channel.icon==null" size="60px" color="secondary" text-color="white">
                  {{ channel.name[0] }}
                </q-avatar>
                <q-avatar v-else size="60px">
                  <img :src="channel.icon">
                </q-avatar>

                <q-tooltip anchor="center right" self="center left" :offset="[10, 10]" transition-show="fade" transition-duration="500"  class="text-body1">
                  {{ channel.name }}
                </q-tooltip>
              </q-item-section>
            </q-item>

          </q-list>

      </q-scroll-area>
      
    </q-drawer>

    <q-drawer v-model="rightDrawerOpen" side="right" :width="400" show-if-above>

      <q-list>
        <q-item-label
          header
        >
          <q-btn
          dense 
          flat  
          icon="add"

          label="add member"

        />

        </q-item-label>
        <q-separator/>

        <q-item v-for="user in userList"
          :key="user.name"
          v-bind="user">
        
          <q-item-section side>
            <q-avatar v-if="user.icon!='person'" size="3rem"><img :src="user.icon"></q-avatar>
            <q-avatar v-else rounded :icon="user.icon" ></q-avatar>

          </q-item-section>

          <q-item-section>
            <q-item-label>{{user.name}}</q-item-label>
            <q-item-label lines="3">{{user.status}}</q-item-label>
          </q-item-section>


          <q-item-section side>
            <q-badge :color= "user.online ? 'green-7' : 'red-7'">
              {{ user.online ? "Online" : "Offline"}}
            </q-badge>
          </q-item-section>


        
        
        </q-item>

      </q-list>
        
    </q-drawer>

    <q-page-container>
      <q-page class="column justify-end">
        <q-infinite-scroll reverse class="full-width">
            <q-item v-for="message in messages" :key=message.text v-bind:message class="hovered">
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
          <q-input  @keydown.enter="sendMessage" outlined bottom-slots v-model="text" label="Type your message..." counter maxlength="200" rounded autogrow class="full-width q-py-lg">
            
            <template v-slot:append>
              <q-btn 
              icon="help" flat ripple="" >
            
                <q-tooltip anchor="top middle" self="bottom middle" :offset="[10, 10]" class="text-body1">
                  /join channelName [private]<br>/invite nickName<br>/revoke nickName<br>/join channelName<br>/kick nickName<br>/list<br>/cancel<br>/quit
                </q-tooltip>
              </q-btn>
    
            </template>
    
            <template v-slot:after>
              <q-btn @click="sendMessage" type="submit" round dense flat icon="send" />
            </template>
          </q-input>
        </q-form>

        

      </q-toolbar>
    </q-footer>


  </q-layout>


  
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { ref } from 'vue';
//import EssentialLink, { EssentialLinkProps } from 'components/EssentialLink.vue';

const userList = [
  {
    name: 'User 1',
    status: 'first-user',
    icon: 'person',
    online: true,
    //change online to 3 states online, offline, DnD
    // link: ''
  },
  {
    name: 'User 2',
    status: 'second-user',
    icon: 'src/assets/kotori.jpg',
    online: true,
    // link: ''
  },
  {
    name: 'User 2',
    status: 'second-user',
    icon: 'src/assets/kaguya.png',
    online: false,
    // link: ''
  },
  {
    name: 'User 1',
    status: 'first-user',
    icon: 'src/assets/kurumi.jpg',
    online: true,
    // link: ''
  },
  {
    name: 'User 2',
    status: 'second-user',
    icon: 'src/assets/kotori.jpg',
    online: true,
    // link: ''
  },
  {
    name: 'User 2',
    status: 'second-user',
    icon: 'src/assets/kaguya.png',
    online: false,
    // link: ''
  },
  {
    name: 'User 1',
    status: 'first-user',
    icon: 'person',
    online: true,
    // link: ''
  },
  {
    name: 'User 2',
    status: 'second-user',
    icon: 'src/assets/kotori.jpg',
    online: true,
    // link: ''
  },
  {
    name: 'User 2',
    status: 'second-user',
    icon: 'src/assets/kaguya.png',
    online: false,
    // link: ''
  },
  {
    name: 'User 1',
    status: 'first-user',
    icon: 'person',
    online: true,
    // link: ''
  },
  {
    name: 'User 2',
    status: 'second-user',
    icon: 'src/assets/kotori.jpg',
    online: true,
    // link: ''
  },
  {
    name: 'User 2',
    status: 'second-user',
    icon: 'src/assets/kaguya.png',
    online: false,
    // link: ''
  },
  {
    name: 'User 1',
    status: 'first-user',
    icon: 'person',
    online: true,
    // link: ''
  },
  {
    name: 'User 2',
    status: 'second-user',
    icon: 'src/assets/kotori.jpg',
    online: true,
    // link: ''
  },
  {
    name: 'User 2',
    status: 'second-user',
    icon: 'src/assets/kaguya.png',
    online: false,
    // link: ''
  },
];


const channelList = [
{
    name: 'Channel 1',
    //caption: 'first-channel',
    icon: null,
    // link: ''
  },
  {
    name: 'Channel 2',
    //caption: 'second-channel',
    icon: 'src/assets/kotori.jpg',
    // link: ''
  },
  {
    name: 'Channel 2',
    //caption: 'second-channel',
    icon: 'src/assets/kotori.jpg',
    // link: ''
  },
  {
    name: 'Channel 2',
    //caption: 'second-channel',
    icon: 'src/assets/kotori.jpg',
    // link: ''
  },
  {
    name: 'Channel 2',
    //caption: 'second-channel',
    icon: 'src/assets/kotori.jpg',
    // link: ''
  },
  {
    name: 'Channel 2',
    //caption: 'second-channel',
    icon: 'src/assets/kotori.jpg',
    // link: ''
  },
  {
    name: 'Channel 2',
    //caption: 'second-channel',
    icon: 'src/assets/kotori.jpg',
    // link: ''
  },
  {
    name: 'Channel 2',
    //caption: 'second-channel',
    icon: 'src/assets/kotori.jpg',
    // link: ''
  },
  {
    name: 'Channel 2',
    //caption: 'second-channel',
    icon: 'src/assets/kotori.jpg',
    // link: ''
  },
  {
    name: 'Channel 2',
    //caption: 'second-channel',
    icon: 'src/assets/kotori.jpg',
    // link: ''
  },
  {
    name: 'Channel 2',
    //caption: 'second-channel',
    icon: 'src/assets/kotori.jpg',
    // link: ''
  },
  {
    name: 'Channel 2',
    //caption: 'second-channel',
    icon: 'src/assets/kotori.jpg',
    // link: ''
  },
  {
    name: 'Channel 2',
    //caption: 'second-channel',
    icon: 'src/assets/kotori.jpg',
    // link: ''
  },
];



export default defineComponent({
  
name: 'MainLayout',

  data () {
    return {
      channelList,
      userList,
      rigtDrawerOpen: false,
      text: ref(''),
      text1: ref(''),
      ph: ref(''),
      dense: ref(false),
      rightDrawerOpen: ref(true),
      messages:[
      {
        text: 'lorem ipsum',
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
    toggleRightDrawer () {
      this.rightDrawerOpen = !this.rightDrawerOpen;
    },
    sendMessage(){
      if (this.text.trim() != '') {
        this.messages.push(
        {text: this.text.trim(),
        from: 'Sanyi',
        mentions:[]
        })
      }
      
      this.text = ''
    }
  }
});
</script>

<style lang="scss">
  .hovered:hover{
    background-color: $grey-3
  }
</style>
