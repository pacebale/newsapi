import React, { Component } from 'react';
import { Container, Header, Content} from 'native-base';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather'
 import Carousel from 'react-native-snap-carousel';
import { createStackNavigator,createBottomTabNavigator, createAppContainer } from "react-navigation";
import Home from './home'
import  Cari from './tab/Cari'
 
import  Discover from '../componnets/tab/Discover'
import  Gold from '../componnets/tab/Gold'
import  Profile from './tab/Profile'
import  Baca from './tab/Baca'
import Login from './login'
export default class Main extends Component<Props> {
  
  static navigationOptions = {
      title: "ZOMATO",
      header: null
  };

  render() {
    return (
        
        
        
        <AppTabNavigator />
         
         
           
      
    );
  }
}


const AppTabNavigator = createAppContainer(createBottomTabNavigator({
  List:{
    screen:Discover
},
Slide:{
    screen:Gold
},
Cari:{
    screen:Cari
},
 

Profile:{
    screen:Profile
},
Baca:{
    screen:Baca
}
}, {
  initialRouteName:"List",
  
},{
  animationEnabled: true,
  swipeEnabled: true,
  tabBarOptions:{
      showLabel: false,
      activeTintColor: '#000',
      inactiveTintColor: '#d1cece',
      style:{
          ...Platform.select({
              android:{
                  backgroundColor: 'white'
              }
          })
      }

  }
}));


const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
  },
  welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
  },
  instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
  },
});
