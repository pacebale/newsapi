 

import React, { Component } from 'react';
import { Image,Platform, StyleSheet, } from 'react-native';
import { Container, Header, View, DeckSwiper, Card, CardItem, Button, Thumbnail, Text, Left, Body, Icon } from 'native-base';
import Feather from 'react-native-vector-icons/Feather'
import  {createTabNavigator,createAppContainer} from 'react-navigation'
import axios from 'axios'
 
 
import { connect } from "react-redux";
 
import {fetchThunk, artiklesAction,headerThunk} from "../../redux/action"
const cards = [
  {
    text: 'Card One',
    name: 'One',
    image: require('../../../assets/feed_images/1.jpg'),
  }
];
 

 

  class Gold extends Component<Props> {

    static navigationOptions = {
        tabBarIcon: ({tintColor}) => (
            <Icon name="ios-home" style={{color: tintColor}} />

        )
    };

    componentWillMount() {
         
        this.props.fetch_ya()
        
        
         
      }
    render() {
        return (
          <Text>COba</Text>
    //         <Container>
    //      {this.props.fetch_state.map((e, idx) =>{
    // return(
    //     <View key={e.url}>
    //       <DeckSwiper
    //         dataSource={cards}
    //         renderItem={item =>
    //           <Card style={{ elevation: 3 }}>
    //             <CardItem>
    //               <Left>
                   
    //                 <Body>
    //                   <Text>{idx}</Text>
    //                   <Text note>{e.title}</Text>
    //                 </Body>
    //               </Left>
    //             </CardItem>
    //             <CardItem cardBody>
    //               <Image style={{ height: 300, flex: 1 }} source={{ uri: e.urlToImage }} />
    //             </CardItem>
    //             <Button full>
    //         <Text>Selengkapnya</Text>
    //       </Button>
    //           </Card>
    //         }
    //       />
    //     </View>
    //     )}
    //     )}
    //   </Container>
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

const mapStateToProps = (state) => { 
    //   alert(JSON.stringify(state)) 
    return {
        fetch_state: state ? state.articlelist :[]
     
    }  
   
  }

  const mapDispatchToProps =(dispatch) => ({
       
      fetch_ya: () => dispatch(fetchThunk()),
  })
  const Connection = connect(mapStateToProps, mapDispatchToProps)(Gold);
 
  export default Connection;
  