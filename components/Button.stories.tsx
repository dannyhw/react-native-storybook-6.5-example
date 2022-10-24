import React from 'react';
import {Button} from 'react-native';
import {ComponentMeta} from '@storybook/react-native';

export default {
  title: 'React Native Button',
  component: Button,
  args: {
    title: 'Hello world',
  },
  render: (args: any) => <Button {...args} />,
} as ComponentMeta<typeof Button>;

export const Basic = {};
