import { StyleSheet } from 'react-native';
import Elevations from "react-native-elevation";
const externalstyle = StyleSheet.create({
    appbackground:
    {
        flex: 258,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    splash_text:
    {
        alignItems: 'center',
        fontSize: 40,
        fontWeight: 'normal',
    },
    CircleShapeView: {
        marginVertical: 30,
        height: 150,
        width: 150,
        marginHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 75,
        backgroundColor: '#22C3EC',
        // shadowOffset: { width: 0, height: 0, },
        // shadowColor: 'black',
        // shadowOpacity: 15
        elevation : 60
    },
    ButtonText: {
        textTransform: 'uppercase',
        color: '#ffffff',
        fontSize: 18,
        fontWeight: 'bold',
    },

});

export default externalstyle;