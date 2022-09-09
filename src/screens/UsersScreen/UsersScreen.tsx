import {FlatList, Image, ListRenderItem, StyleSheet, View, Text} from 'react-native';
import {usersArr, UserType} from '../../data/data';

export const UsersScreen = () => {

    const render: ListRenderItem<UserType> = ({item}) => {
        return (
            <View>
                <Image
                    style={{width: 100, height: 100, borderRadius: 50}}
                    source={item.image}
                />
                <Text>{item.name}</Text>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={usersArr}
                renderItem={render}
                numColumns={2}
                keyExtractor={item => item.id}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});