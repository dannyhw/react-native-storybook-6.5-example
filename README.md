A starter project with react native, and @storybook/react-native@6.0.1-canary.0 with storybook 6.5 support

# getting started

To get all the dependencies run

```
yarn install
```

To run on ios or android

```
yarn start
```

in another terminal run

```
yarn ios
```

or

```
yarn android
```

If you add new stories on the native (ondevice version) you either need to have the watcher running or run the stories loader

To update the stories one time

```
yarn update-stories
```

To watch the stories files

```
yarn storybook-watcher
```
