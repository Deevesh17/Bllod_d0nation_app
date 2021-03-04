import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import externalstyle from '../Components/externalstyle';

var cookie

const signup = ({ navigation }) => {

    return (
        <View style={[externalstyle.emergencybackground]}>

            <Animatable.View
                animation="zoomInUp"
                style={[externalstyle.emergencybackground]}
            >
                <View style={[externalstyle.appbackground]}>
                    <Text style={[externalstyle.splash_text]}> Emergency Blood List</Text>
                </View>
                <View style={[{marginLeft: 250 }]}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Emergency_Blood')}
                        style={[externalstyle.CirclepluseeView]}>
                        <View>
                            <Text style={[externalstyle.PluseText]}>+</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </Animatable.View>
        </View >
    );
};

export default signup;