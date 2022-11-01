import {Button} from 'react-native';
import {ComponentMeta} from '@storybook/react-native';

export default {
  title: 'React Native Button',
  component: Button,
  args: {
    title: 'Hello world',
  },
} as ComponentMeta<typeof Button>;

export const Basic = {};
