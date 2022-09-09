import {FlatList, Image, ListRenderItem, StyleSheet, View, Text, Dimensions} from 'react-native';
import {usersArr, UserType} from '../../data/data';

const {width} = Dimensions.get('screen');

export const UsersScreen = () => {

    const render: ListRenderItem<UserType> = ({item}) => {
        return (
            <View style={styles.item}>
                <Image
                    style={styles.image}
                    source={item.image}
                />
                <View style={styles.info}>
                    <Text>{item.name},</Text>
                    <Text>{item.age} years old,</Text>
                    <Text>{item.city}</Text>
                </View>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={usersArr}
                renderItem={render}
                numColumns={2}
                columnWrapperStyle={{justifyContent: 'space-between'}}
                keyExtractor={item => item.id}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
        paddingHorizontal: 5,
    },
    item: {
        display: 'flex',
        flexDirection: 'row',
        width: width / 2 - 15,
        marginHorizontal: 5,
        marginVertical: 10,
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 50,
    },
    info: {
        padding: 5,
    },
});