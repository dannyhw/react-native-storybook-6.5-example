import React from 'react';
import {Button} from 'react-native';

export default {
  title: 'React Native Button',
  component: Button,
  args: {
    title: 'Hello world',
  },
  render: (args: any) => <Button {...args} />,
};

export const Basic = {};
