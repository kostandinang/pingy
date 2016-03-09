import React, {
    Component,
    View,
    Text,
    StyleSheet,
} from 'react-native';

import { MKSpinner } from 'react-native-material-kit';

const LoadingSpinner = MKSpinner.singleColorSpinner().build();

export default class Spinner extends Component {
    render() {
        return (
            <View style={styles.spinnerContainer}>
                <LoadingSpinner strokeWidth={5} strokeColor="#5a411a" style={{width: 50, height: 50}}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    spinnerContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        alignItems: 'center',
        justifyContent: 'center',
        /*backgroundColor: '#ffda4d'*/
    }
});