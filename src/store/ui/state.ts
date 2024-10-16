import { User, Channel } from 'src/components/models'

export interface ExampleStateInterface {
  membersDrawerState: boolean;
  channelsDrawerState: boolean;
  selectedChannel: null | string;
  userProfileState: boolean;
  userProfileSelected: null| User;
  channelList: Channel[];
  memberList: User[];
}

function state(): ExampleStateInterface {
  return {
    membersDrawerState: true,
    channelsDrawerState: true,
    selectedChannel: null,
    userProfileState: false,
    userProfileSelected: null,
    channelList: [],
    memberList: []
  };
}

export default state;
