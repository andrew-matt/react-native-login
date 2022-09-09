import {Dimensions, FlatList, ListRenderItem, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {settingsArr, settingsArrItemType} from '../../../data/data';
import {useAppNavigation} from '../../types/types';

const {width} = Dimensions.get('screen');

export const SettingsScreen = () => {

    const navigation = useAppNavigation();

    const render: ListRenderItem<settingsArrItemType> = ({item}) => {

        const onTouchableOpacityPressHandler = () => {
            navigation.navigate('SettingsRoot', {screen: item});
        };

        return (
            <View>
                <TouchableOpacity style={styles.item} onPress={onTouchableOpacityPressHandler}>
                    <Text style={styles.text}>{item}</Text>
                </TouchableOpacity>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={settingsArr}
                renderItem={render}
                keyExtractor={index => index.toString()}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    item: {
        borderRadius: 10,
        marginTop: 10,
        padding: 10,
        width: width - 20,
        backgroundColor: 'lightgrey',
    },
    text: {
        fontSize: 18,
    },
});