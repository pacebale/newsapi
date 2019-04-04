import React, { Component } from 'react';
import { View, StyleSheet,Image } from 'react-native';
import StarRating from 'react-native-star-rating'
import Feather from 'react-native-vector-icons/Feather'
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';
import { createStackNavigator, createAppContainer } from "react-navigation";

export default class Home extends Component {
  static navigationOptions = {
    title: "Instagram Bob",
    headerTitleStyle :{textAlign: 'center',alignSelf:'center',width: '100%',},
    headerLeft:<Feather name={'camera'} size={24} style={{paddingLeft:12}}/>,
    headerRight:<Feather name={'send'} size={24} style={{paddingRight:12}}/>,
};
  render() {
    return (
       
          <Card style={{flex: 3}}>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'Image URL'}} />
                <Body>
                  <Text>Home satu</Text>
                  <Text note>April 15, 2016</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image source={{uri: 'Image URL'}} style={{height: 200, width: 200, flex: 1}}/>
                <Text>
                  //Your text here
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent textStyle={{color: '#87838B'}}>
                  <Icon name="logo-github" />
                  <Text>1,926 stars</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>
         
    );
  }
}

