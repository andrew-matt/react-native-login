import {Image, StyleSheet, View} from 'react-native';

export const PrivacyScreen = () => {
    return (
        <View style={styles.container}>
            <Image
                style={{width: 100, height: 100}}
                source={require('../../../common/icons/settings/privacy.png')}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});