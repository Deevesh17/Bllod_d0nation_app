import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    Platform,
    StyleSheet,
    StatusBar,
    Alert
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import externalstyle from '../Components/externalstyle';

const login = ({ navigation }) => {

    const [data, setData] = React.useState({
        userName: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        isValidUser: true,
        isValidPassword: true,
    });
    const textInputChange = (val) => {
        if (val.trim().length >= 4) {
            setData({
                ...data,
                userName: val,
                check_textInputChange: true,
                isValidUser: true
            });
        } else {
            setData({
                ...data,
                userName: val,
                check_textInputChange: false,
                isValidUser: false
            });
        }
    }
    const handlePasswordChange = (val) => {
        if (val.trim().length >= 8) {
            setData({
                ...data,
                password: val,
                isValidPassword: true
            });
        } else {
            setData({
                ...data,
                password: val,
                isValidPassword: false
            });
        }
    }
    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }
    const handleValidUser = (val) => {
        if (val.trim().length >= 4) {
            setData({
                ...data,
                isValidUser: true
            });
        } else {
            setData({
                ...data,
                isValidUser: false
            });
        }
    }
    const loginHandle =  async (userName, password) => {
        console.log(userName);
        console.log(password);
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        console.log(myHeaders);

        var raw = JSON.stringify({ "usr": "Administrator", "pwd": "2417" });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        var responce =  await fetch("http://192.168.43.108:8001/api/method/login", requestOptions).catch(error => console.log('error', error));
        var resp = await responce.json()
        var hedcoo = responce["headers"]["map"]["set-cookie"].split(";")[0]
        console.warn(resp)
        console.warn(hedcoo)
    }
    return (
        <View style={[externalstyle.container]}>
            <View style={[externalstyle.header]}>
                <Text style={[externalstyle.text_header]}>Welcome!</Text>
            </View>
            <Animatable.View
                animation="fadeInUpBig"
                style={[externalstyle.footer]}
            >

                <View style={[externalstyle.footer]}>
                    <Text style={[externalstyle.text_footer]}>UserName</Text>
                    <View style={[externalstyle.action]}>
                        <FontAwesome
                            name="user-o"
                            color="#05375a"
                            size={20}
                        />
                        <TextInput
                            placeholder="Username"
                            style={[externalstyle.textInput]}
                            onChangeText={(val) => textInputChange(val)}
                            onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}
                            autoCapitalize="none"
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
                    {data.isValidUser ? null :
                        <Animatable.View animation="fadeInLeft" duration={500}>
                            <Text style={[externalstyle.errorMsg]}>Username must be 4 characters long.</Text>
                        </Animatable.View>
                    }
                    <Text style={[externalstyle.text_footer, {
                        marginTop: 35
                    }]}>Password</Text>
                    <View style={[externalstyle.action]}>
                        <FontAwesome
                            name="lock"
                            color="#05375a"
                            size={20}
                        />
                        <TextInput
                            placeholder="Password"
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
                    {data.isValidPassword ? null :
                        <Animatable.View animation="fadeInLeft" duration={500}>
                            <Text style={[externalstyle.errorMsg]}>Password must be 8 characters long.</Text>
                        </Animatable.View>
                    }
                    <TouchableOpacity>
                        <Text style={{color: '#009387', marginTop: 15}}>Forgot password?</Text>
                    </TouchableOpacity>
                    <View style={[externalstyle.button]}>
                        <TouchableOpacity
                            style={[externalstyle.signIn]}
                            onPress={() => { loginHandle(data.userName, data.password) }}
                        >
                            <LinearGradient
                                colors={['#08d4c4', '#01ab9d']}
                                style={[externalstyle.signIn]}
                            >
                                <Text style={[externalstyle.textSign, {
                                    color: '#fff'
                                }]}>Sign In</Text>
                            </LinearGradient>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => navigation.navigate('Signup')}
                            style={[externalstyle.signIn, {
                                borderColor: '#009387',
                                borderWidth: 1,
                                marginTop: 15
                            }]}
                        >
                            <Text style={[externalstyle.textSign, {
                                color: '#009387'
                            }]}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </Animatable.View>

        </View>
    );
};
export default login;