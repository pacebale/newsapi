 

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather'
import  {createTabNavigator,createAppContainer} from 'react-navigation'
import {Icon} from "native-base";

export default class Profile extends Component<Props> {

    static navigationOptions = {
        tabBarIcon: ({tintColor}) => (
            <Icon name="person" style={{color: tintColor}} />

        )
    };

    render() {
        return (
            <View style={styles.container}>
                <Text>this is ProfileTab</Text>
            </View>
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
