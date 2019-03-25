import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text, Badge } from 'native-base';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
export default class Bawah extends Component {
  
 


  render() {
    return (
      
         
      <Footer>
          <FooterTab>
            <Button vertical>
              <Icon name="navigate" />
              <Text>DISCOVER</Text>
            </Button>
            <Button vertical>
            <Icon name='heart' />
              <Text>GOLD</Text>
            </Button>
            <Button vertical active>
            <Icon name='search' />
              <Text>SEARCH</Text>
            </Button>
            <Button vertical>
              <Icon name="person" />
              <Text>PROFILE</Text>
            </Button>
          </FooterTab>
        </Footer>
       
    );
  }
}