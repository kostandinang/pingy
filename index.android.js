/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
    AppRegistry,
    Component,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';
var StatusBarAndroid = require('react-native-android-statusbar');

class Pingy extends Component {

    componentWillMount() {
        StatusBarAndroid.setHexColor('#5a411a');
    }

    render() {
        return (
            <View style={styles.container}>
                <Image source={require('./assets/imgs/logo.png')}
                       style={styles.icon}/>
                <Text style={styles.title}>
                    Pingy
                </Text>
                <Text style={styles.subtitle}>
                    Test your service
                    </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffda4d'
    },
    title: {
        fontSize: 40,
        textAlign: 'center',
        marginTop: -20,
        marginBottom: 0,
        color: '#5a411a'
    },
    subtitle: {
        fontSize: 15,
        textAlign: 'center',
        margin: 0,
        color: '#5a411a'
    },
    icon: {
        width: 180,
        height: 180
    }
});

AppRegistry.registerComponent('Pingy', () => Pingy);
