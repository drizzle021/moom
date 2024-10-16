import { MutationTree } from 'vuex';
import { ExampleStateInterface } from './state';

const mutation: MutationTree<ExampleStateInterface> = {
  toggleMembersDrawer(state:ExampleStateInterface){
    state.membersDrawerState = !state.membersDrawerState
  },

  toggleChannelsDrawer(state:ExampleStateInterface){
    state.channelsDrawerState = !state.channelsDrawerState
  },
  switchChannel(state:ExampleStateInterface, channel){
    state.selectedChannel = channel
  }
};

export default mutation;
