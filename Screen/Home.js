import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import externalstyle from '../Components/externalstyle';
import Elevations from "react-native-elevation";


export default class Home extends Component {

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={[externalstyle.appbackground]}>
                <TouchableOpacity onPress={() => navigate('login')}
                    style={[externalstyle.CircleShapeView]}
                >
                    <Text style={[externalstyle.ButtonText]}>Blood donor</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigate('Emergency_Blood')}
                    style={[externalstyle.CircleShapeView]}
                >
                    <View>
                        <Text style={[externalstyle.ButtonText]}>Emergency Blood</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigate('Blood_Camp')}
                    style={[externalstyle.CircleShapeView]}>
                    <View>
                        <Text style={[externalstyle.ButtonText]}>Blood Camp</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )

    }
}
