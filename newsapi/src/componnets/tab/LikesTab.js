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
import {Platform, StyleSheet, Text, View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather'
import  {createTabNavigator,createAppContainer} from 'react-navigation'
import {Icon} from "native-base";

export default class LikesTab extends Component<Props> {


    static navigationOptions = {
        tabBarIcon: ({tintColor}) => (
            <Icon name="ios-heart" style={{color: tintColor}} />

        )
    };

    render() {
        return (
            <View style={styles.container}>
                <Text>this is LikesTab</Text>
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
