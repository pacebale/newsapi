
import React, {Component} from 'react';
import {Image, Text} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'
import {Body, Button, Card, CardItem, Icon, Left, Thumbnail} from "native-base";
import globalStyle from '../../assets/globalStyle'

export default class CardComponent extends Component<Props> {


    static navigationOptions = {
        tabBarIcon: ({tintColor}) => (
            <Icon name="ios-heart" style={{color: tintColor}}/>

        )
    };

    render() {
        const images = {
            "1": require('../../assets/feed_images/1.jpg'),
            "2": require('../../assets/feed_images/2.jpg'),
            "3": require('../../assets/feed_images/1.jpg'),

        };
        return (
            <Card>
                <CardItem>
                    <Left>
                        <Thumbnail source={require('../../assets/avatar/me.png')}/>
                        <Body>
                        <Text style={[globalStyle.blackText,globalStyle.blodText]}>WeiKilla</Text>
                        <Text note> Jan 15, 2018</Text>
                        </Body>
                    </Left>
                </CardItem>
                <CardItem cardBody>
                    <Image source={images[this.props.imageSource]} style={{height: 200, width: null, flex: 1}}/>
                </CardItem>
                <CardItem style={{height: 46}}>
                    <Left>
                        <Button transparent>
                            <AntDesign name='hearto' size={20} style={{color: 'black'}}/>
                        </Button>
                        <Button transparent>
                            <AntDesign name='message1' size={20} style={{color: 'black'}}/>
                        </Button>
                        <Button transparent>
                            <AntDesign name='sharealt' size={20} style={{color: 'black'}}/>
                        </Button>
                    </Left>
                </CardItem>
                <CardItem style={{height: 20}}>
                    <Text>{this.props.likes} likes</Text>
                </CardItem>
                <CardItem>
                    <Body>
                    <Text><Text style={{fontWeight: "900", color: '#000'}}>WeiKilla </Text> Lorem Ipsum is simply dummy
                        text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                        dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it
                        to make a type specimen book. </Text>
                    </Body>
                </CardItem>

            </Card>
        );
    }
}

