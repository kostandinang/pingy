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
import StatusBarAndroid from 'react-native-android-statusbar';
import MK, {MKButton, MKTextField, MKColor} from 'react-native-material-kit';
import LoadingSpinner from './src/ui/spinner.js';

const StartBTN = new MKButton.Builder()
    .withBackgroundColor("#5a411a")
    .withOnPress(() => {
        //TODO - Navigate
    })
    .withTextStyle({
        color: '#ffda4d',
        fontWeight: 'bold',
    })
    .withStyle({
        width: 200,
        marginTop: 10
    })
    .withText('Ping')
    .build();

class Pingy extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isServerActive: false
        }
    }

    serverActive() {
        setTimeout(() => {
            this.setState({isServerActive: true});
        }, 2000)
    }

    componentWillMount() {
        StatusBarAndroid.setHexColor('#5a411a');
    }

    render() {
        let loadingView = null;
        if (true) {
            loadingView = (
                <LoadingSpinner/>
            );
        }
        this.serverActive();
        return (
            <View style={styles.container}>
                <Image source={require('./assets/imgs/logo.png')}
                       style={styles.icon}/>
                <Text style={styles.title}>
                    Pingy
                </Text>
                <Text style={styles.subtitle}>
                    Test your Service hosted
                    @ Prius Solution
                </Text>
                <MKTextField
                    tintColor={'#5a411a'}
                    highlightColor={'red'}
                    textInputStyle={{color: '#5a411a'}}
                    placeholder='Enter your service Name'
                    style={styles.textField}/>
                <StartBTN/>
                {loadingView}
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
        color: '#5a411a',
        fontWeight: 'bold'
    },
    subtitle: {
        fontSize: 10,
        textAlign: 'center',
        marginTop: 2,
        color: '#5a411a'
    },
    icon: {
        width: 180,
        height: 180
    },
    textField: {
        alignItems: 'center',
        width: 200,
        marginTop: 20,
        marginBottom: 0,
        borderBottomColor: '#b68433',
        borderBottomWidth: 1
    }
});

AppRegistry.registerComponent('Pingy', () => Pingy);
