import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import externalstyle from '../Components/externalstyle';

export default class Home extends Component {

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={[externalstyle.appbackground]}>
                <Text style={[externalstyle.splash_text]}> Blood Camp Page </Text>
            </View>
        )

    }
}
