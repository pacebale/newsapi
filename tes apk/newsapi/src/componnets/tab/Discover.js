

import React, {Component} from 'react';
import {ScrollView, StyleSheet, Dimensions, Image} from 'react-native';
import { Container, List, Right, ListItem,Button,Content,Header, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon } from 'native-base';
import axios from 'axios'
 
import globalStyle from '../../../assets/globalStyle'
import { connect } from "react-redux";
 
import {fetchThunk, linkAction,artiklesAction,headerThunk} from "../../redux/action"
 

class Discover extends Component<Props> {

    static navigationOptions = {
        tabBarIcon: ({tintColor}) => (
            <Icon name="ios-compass" style={{color: tintColor}}/>

        )
    };
    

    linkklik() {
       
        return (
          <WebView
        source={`https://www.kompas.com/`}
        style={{marginTop: 20}}
      />
        )
      
    }


    componentWillMount() {
         
        this.props.fetch_ya()
        
        
         
      }

    render() {
         return (
             
            <Container>
        {/* {alert(JSON.stringify(this.props.link_state))} */}
        <Content>
          <List>
{this.props.fetch_state.map((e, idx) =>{
    return(
            <ListItem key={e.url} thumbnail>
              <Left>
                <Thumbnail square source={{ uri: e.urlToImage }} />
              </Left>
              <Body>
                <Text>{e.title}</Text>
                <Text note numberOfLines={1}>{e.description}</Text>
              </Body>
              <Right>
                <Button onPress={() => {this.props.klik_ya(e.url),
            this.props.navigation.navigate('Baca',{
              url: e.url,
              otherParam: 'anything you want here',
            })}}>
                  <Text>Baca</Text>
                </Button>
                {/* <Button onPress={() =>
            this.props.klik_ya(e.url)}>
                  <Text>Baca</Text>
                </Button> */}
              </Right>
            </ListItem>

)}
)}

          </List>
        </Content>
      </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
});


const mapStateToProps = (state) => { 
    //   alert(JSON.stringify(state)) 
    return {
        fetch_state: state ? state.articlelist :[],
       
     
    }  
   
  }

  const mapDispatchToProps =(dispatch) => ({
       
      fetch_ya: () => dispatch(fetchThunk()),
      klik_ya: (url) => dispatch(linkAction(url)),
  })
  const Connection = connect(mapStateToProps, mapDispatchToProps)(Discover);
 
  export default Connection;
  