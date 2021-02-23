import React from 'react';
import {
    View,
    Text,
    Button,
    TouchableOpacity,
    Dimensions,
    TextInput,
    Platform,
    StyleSheet,
    ScrollView,
    StatusBar,
    Alert
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import externalstyle from '../Components/externalstyle';



const signup = ({ navigation }) => {

    const [data, setData] = React.useState({
        username: '',
        email: '',
        password: '',
        confirm_password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        confirm_secureTextEntry: true,
    });

    const emailchange = (val) => {
        if (val.length !== 0) {
            setData({
                ...data,
                email: val,
                check_textInputChange: true
            });
        } else {
            setData({
                ...data,
                email: val,
                check_textInputChange: false
            });
        }
    }
    const textInputChange = (val) => {
        if (val.length !== 0) {
            setData({
                ...data,
                username: val,
                email: val,
                check_textInputChange: true
            });
        } else {
            setData({
                ...data,
                username: val,
                email: val,
                check_textInputChange: false
            });
        }
    }

    const handlePasswordChange = (val) => {
        setData({
            ...data,
            password: val
        });
    }

    const handleConfirmPasswordChange = (val) => {
        setData({
            ...data,
            confirm_password: val
        });
    }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }

    const updateConfirmSecureTextEntry = () => {
        setData({
            ...data,
            confirm_secureTextEntry: !data.confirm_secureTextEntry
        });
    }
    const signupfunc = (username, email, password, confirm_password) => {
        if( username.length ==0 && email.length == 0)
        {
            Alert.alert('Wrong Input!', 'Username and email are not to be empty.', [
                { text: 'Okay' }
            ]);
        }
        else if(password != confirm_password) {
            Alert.alert('Wrong Input!', 'Password and Confirm Password mismatch.', [
                { text: 'Okay' }
            ]);
        }
        else if(password.length < 8 || confirm_password < 8)
        {
            Alert.alert('Wrong Input!', 'password must be greater than 8.', [
                { text: 'Okay' }
            ]);
        }
        else
        {
            navigation.navigate("login");
        }
    }

    return (
        <View style={[externalstyle.container]}>
            <StatusBar backgroundColor='#009387' barStyle="light-content" />
            <View style={[externalstyle.header]}>
                <Text style={[externalstyle.text_header]}>Register Now!</Text>
            </View>
            <Animatable.View
                animation="fadeInUpBig"
                style={[externalstyle.footer]}
            >
                <ScrollView>
                    <Text style={[externalstyle.text_footer]}>Username</Text>
                    <View style={[externalstyle.action]}>
                        <FontAwesome
                            name="user-o"
                            color="#05375a"
                            size={20}
                        />
                        <TextInput
                            placeholder="Your Username"
                            style={[externalstyle.textInput]}
                            autoCapitalize="none"
                            autoCompleteType = "name"
                            onChangeText={(val) => textInputChange(val)}
                        />
                        {data.check_textInputChange ?
                            <Animatable.View
                                animation="bounceIn"
                            >
                                <Feather
                                    name="check-circle"
                                    color="green"
                                    size={20}
                                />
                            </Animatable.View>
                            : null}
                    </View>
                    <Text style={[externalstyle.text_footer, { marginTop: 35 }]}>Email</Text>
                    <View style={[externalstyle.action]}>
                        <FontAwesome
                            name="envelope"
                            color="#05375a"
                            size={20}
                        />
                        <TextInput
                            placeholder="email"
                            style={[externalstyle.textInput]}
                            autoCapitalize="none"
                            keyboardType = "email-address"
                            autoCompleteType = "email"
                            onChangeText={(val) => emailchange(val)}
                        />
                        {data.check_textInputChange ?
                            <Animatable.View
                                animation="bounceIn"
                            >
                                <Feather
                                    name="check-circle"
                                    color="green"
                                    size={20}
                                />
                            </Animatable.View>
                            : null}
                    </View>

                    <Text style={[externalstyle.text_footer, {
                        marginTop: 35
                    }]}>Password</Text>
                    <View style={[externalstyle.action]}>
                        <Feather
                            name="lock"
                            color="#05375a"
                            size={20}
                        />
                        <TextInput
                            placeholder="Your Password"
                            secureTextEntry={data.secureTextEntry ? true : false}
                            style={[externalstyle.textInput]}
                            autoCapitalize="none"
                            onChangeText={(val) => handlePasswordChange(val)}
                        />
                        <TouchableOpacity
                            onPress={updateSecureTextEntry}
                        >
                            {data.secureTextEntry ?
                                <Feather
                                    name="eye-off"
                                    color="grey"
                                    size={20}
                                />
                                :
                                <Feather
                                    name="eye"
                                    color="grey"
                                    size={20}
                                />
                            }
                        </TouchableOpacity>
                    </View>

                    <Text style={[externalstyle.text_footer, {
                        marginTop: 35
                    }]}>Confirm Password</Text>
                    <View style={[externalstyle.action]}>
                        <Feather
                            name="lock"
                            color="#05375a"
                            size={20}
                        />
                        <TextInput
                            placeholder="Confirm Your Password"
                            secureTextEntry={data.confirm_secureTextEntry ? true : false}
                            style={[externalstyle.textInput]}
                            autoCapitalize="none"
                            onChangeText={(val) => handleConfirmPasswordChange(val)}
                        />
                        <TouchableOpacity
                            onPress={updateConfirmSecureTextEntry}
                        >
                            {data.secureTextEntry ?
                                <Feather
                                    name="eye-off"
                                    color="grey"
                                    size={20}
                                />
                                :
                                <Feather
                                    name="eye"
                                    color="grey"
                                    size={20}
                                />
                            }
                        </TouchableOpacity>
                    </View>
                    <View style={[externalstyle.textPrivate]}>
                        <Text style={[externalstyle.color_textPrivate]}>
                            By signing up you agree to our
                </Text>
                        <Text style={[externalstyle.color_textPrivate, { fontWeight: 'bold' }]}>{" "}Terms of service</Text>
                        <Text style={externalstyle.color_textPrivate}>{" "}and</Text>
                        <Text style={[externalstyle.color_textPrivate, { fontWeight: 'bold' }]}>{" "}Privacy policy</Text>
                    </View>
                    <View style={[externalstyle.button]}>
                        <TouchableOpacity
                            style={[externalstyle.signIn]}
                            onPress={() => {signupfunc(data.username, data.email, data.password, data.confirm_password) }}
                        >
                            <LinearGradient
                                colors={['#08d4c4', '#01ab9d']}
                                style={[externalstyle.signIn]}
                            >
                                <Text style={[externalstyle.textSign, {
                                    color: '#fff'
                                }]}>Sign Up</Text>
                            </LinearGradient>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => navigation.goBack()}
                            style={[externalstyle.signIn, {
                                borderColor: '#009387',
                                borderWidth: 1,
                                marginTop: 15
                            }]}
                        >
                            <Text style={[externalstyle.textSign, {
                                color: '#009387'
                            }]}>Sign In</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </Animatable.View>
        </View>
    );
};

export default signup;