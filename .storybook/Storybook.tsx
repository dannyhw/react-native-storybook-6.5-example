import {getStorybookUI} from '@storybook/react-native';

import './storybook.requires';

const StorybookUIRoot = getStorybookUI({
  shouldPersistSelection: false,
});

export default StorybookUIRoot;
