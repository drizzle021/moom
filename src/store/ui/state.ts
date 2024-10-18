import { User, Channel } from 'src/components/models'

export interface ExampleStateInterface {
  membersDrawerState: boolean;
  channelsDrawerState: boolean;
  selectedChannel: null | Channel;
  userProfileState: boolean;
  userProfileSelected: null| User;
  channelList: Channel[];
  memberList: User[];
  loggedInProfile: User;
}

function state(): ExampleStateInterface {
  return {
    membersDrawerState: true,
    channelsDrawerState: true,
    selectedChannel: {
      name: 'lol',
      icon: '',
      is_private: false
    },
    userProfileState: false,
    userProfileSelected: null,
    channelList: [],
    memberList: [],
    loggedInProfile: {  
      name: 'peti',
      status: 'hello!',
      icon: '',
      state: 'online',
    }
  };
}

export default state;
