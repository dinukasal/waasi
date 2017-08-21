import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
import Home from '../containers/Home';
import Colors from '../themes/Colors'

class NavigationRouter extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene initial key="home"
                 navigationBarStyle={{backgroundColor: Colors.background, borderBottomColor: 'white'}}
                 component={Home}
                 title="waasi"
                 titleStyle={{color: Colors.textColor, fontWeight: 'bold'}}
          />
        </Scene>
      </Router>
    );
  }
}
const styles = StyleSheet.create({
  leftIcon: {
    height: 30,
    width: 30
    //color:Colors.textColor
  }
});

export default NavigationRouter;