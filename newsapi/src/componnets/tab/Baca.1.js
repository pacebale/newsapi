/**
 * Description:
 * Date: 2019/3/17
 * Time: 10:37
 *
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text,WebView, View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather'
import  {createTabNavigator,createAppContainer,goBack} from 'react-navigation'
import {Container, Header, Left, Body, Right, Button, Icon, Title} from "native-base";

export default class Baca extends Component<Props> {

    static navigationOptions = {
        tabBarIcon: ({tintColor}) => (
            <Icon name="ios-search" style={{color: tintColor}} />

        )
    };


    render() {
        const { navigation } = this.props;
        const url = navigation.getParam('url', 'NO-URL'); 
        const { goBack } = this.props.navigation;
        // {alert(JSON.stringify(url))}
        return (
            
            <Container>
            <Header>
              <Left>
                <Button transparent  onPress={() => goBack()}>
                
                  <Icon name='arrow-back' />
                </Button>
              </Left>
              <Body>
                <Title>Header</Title>
              </Body>
               
            </Header>
            <WebView
        source={{uri: url}}
        style={{marginTop: 20}}
      />
          </Container>
               
            
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
});
