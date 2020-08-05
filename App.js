import React from 'react';
import { createAppContainer, createSwitchNavigator,} from 'react-navigation';

import WelcomeScreen from './screens/WelcomeScreen';
import { AppDrawerNavigator } from './components/AppDrawerNavigator'
import { AppTabNavigator } from './components/AppTabNavigator'


export default class App extends React.Component {
  render(){
  return (
    <AppContainer/>
  );
}

 switchNavigator = createSwitchNavigator({
  WelcomeScreen:{screen: WelcomeScreen},
 
})
 AppContainer =  createAppContainer(switchNavigator);
}