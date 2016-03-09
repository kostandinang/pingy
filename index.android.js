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
import LoadingSpinner from './src/ui/spinner';
import {Services} from './src/data';

let DEFAULT_COLOR = '#5a411a';
let DEFAULT_BG_COLOR = '#ffda4d';
let INACTIVE_COLOR = '#FA5050';
let ACTIVE_COLOR = '#47FF47';

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
            isServerActive: false,
            url: "",
            statusColor: 'rgba(0,0,0,0)',
            serviceOK: false,
            initial: true
        }
    }

    serverActive() {
        this.setState({isServerActive: true});
        fetch(Services.DEV, {
            method: 'get'
        }).then((res) => {
            if (res.status == 200) {
                this.setState({isServerActive: false, serviceOK: true, statusColor: ACTIVE_COLOR});
            } else {
                this.setState({isServerActive: false, serviceOK: false, statusColor: INACTIVE_COLOR});
            }
        }).catch((res) => {
            this.setState({isServerActive: false, serviceOK: false, statusColor: INACTIVE_COLOR});
        });
        this.setState({initial: false});
    }

    componentWillMount() {
        StatusBarAndroid.setHexColor(DEFAULT_COLOR);
    }

    componentDidMount() {
        this.serverActive();
    }

    render() {
        let loadingView = null;
        if (this.state.isServerActive) {
            loadingView = (
                <View>
                    <LoadingSpinner/>
                </View>
            );
        }
        if (this.state.serviceOK && !this.state.initial) {
            loadingView = (
                <Text style={styles.status}>
                    Service OK
                </Text>
            );
        } else if (!this.state.serviceOK && !this.state.initial) {
            loadingView = (
                <Text style={styles.status}>
                    Service DOWN
                </Text>
            );
        } else {
            loadingView = (
                <Text style={styles.status}>
                    -
                </Text>
            );
        }
        return (
            <View style={[styles.container, {borderBottomColor: this.state.statusColor, borderBottomWidth: 5}]}>
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
                    tintColor={DEFAULT_COLOR}
                    highlightColor={'red'}
                    textInputStyle={{color: DEFAULT_COLOR}}
                    placeholder='Enter your service Name'
                    style={styles.textField}/>
                <StartBTN onPress={() => this.serverActive()}/>
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
        backgroundColor: DEFAULT_BG_COLOR
    },
    title: {
        fontSize: 40,
        textAlign: 'center',
        marginTop: -20,
        marginBottom: 0,
        color: DEFAULT_COLOR,
        fontWeight: 'bold'
    },
    subtitle: {
        fontSize: 10,
        textAlign: 'center',
        marginTop: 2,
        color: DEFAULT_COLOR
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
    },
    status: {
        fontWeight: "bold",
        marginTop: 20,
        color: DEFAULT_COLOR
    }
});

AppRegistry.registerComponent('Pingy', () => Pingy);
