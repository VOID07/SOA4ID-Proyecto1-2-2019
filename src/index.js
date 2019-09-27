import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { ActionSheetProvider, connectionActionSheet } from '@expo/react-native-action-sheet'
import { createAppContainer } from 'react-navigation'
//import { createStackNavigator } from 'react-navigation-stack';

import Grid from "./screens/Grid"
import withProvider from './redux/withProvider'
import Home from './screens/home-screen'

/*
export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}*/
class AppView extends Component {
  render() {
    return (
      <ActionSheetProvider>
        <View style={styles.container}>
          <Home/>
        </View>
      </ActionSheetProvider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
/*
const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    GridS: Grid,
  },
  {
    initialRouteName: 'Grid',
  }
);

const AppContainer = createAppContainer(RootStack);

*/

export default withProvider(AppView)