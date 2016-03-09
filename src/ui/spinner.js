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
                <LoadingSpinner strokeWidth={3} strokeColor="#5a411a" style={{width: 30, height: 30}}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    spinnerContainer: {
        position: 'absolute',
        left: 0,
        bottom: 35,
        right: 0,
        alignItems: 'center',
        justifyContent: 'center',
        /*backgroundColor: '#ffda4d'*/
    }
});