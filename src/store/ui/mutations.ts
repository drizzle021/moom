import { MutationTree } from 'vuex';
import { ExampleStateInterface } from './state';

const mutation: MutationTree<ExampleStateInterface> = {
  toggleMembersDrawer(state:ExampleStateInterface){
    state.membersDrawerState = !state.membersDrawerState
  },

  toggleChannelsDrawer(state:ExampleStateInterface){
    state.channelsDrawerState = !state.channelsDrawerState
  },
  toggleUserProfile(state:ExampleStateInterface){
    state.userProfileState = !state.userProfileState
  },
  
  switchChannel(state:ExampleStateInterface, channel){
    state.selectedChannel = channel
  },
  switchUserProfile(state:ExampleStateInterface, user){
    state.userProfileSelected = user
  },

  addChannel(state:ExampleStateInterface, channel){
    state.channelList.unshift({
      name: channel.name,
      icon: '',
      is_private: channel.publicity 
      // link: ''
      },)

  },
  deleteChannel(state:ExampleStateInterface){
    const channelIndex = state.channelList.findIndex(ch => ch.name === state.selectedChannel);
    if (channelIndex !== -1) {
      state.channelList.splice(channelIndex, 1);  // Remove channel from list
    }
  },

  addMember(state:ExampleStateInterface, user){
    state.memberList.push(user); 
  },
  kickMember(state:ExampleStateInterface, user){
    const memberIndex = state.memberList.findIndex(m => m.name === user.name);
    if (memberIndex !== -1) {
      state.memberList.splice(memberIndex, 1);  // Remove member from list
    }
  }


};

export default mutation;
