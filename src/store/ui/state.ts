export interface ExampleStateInterface {
  membersDrawerState: boolean;
  channelsDrawerState: boolean;
  selectedChannel: null | string;
}

function state(): ExampleStateInterface {
  return {
    membersDrawerState: true,
    channelsDrawerState: true,
    selectedChannel: null,
  };
}

export default state;
