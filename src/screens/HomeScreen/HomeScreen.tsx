import {Button, Text, View} from 'react-native';
import {setIsLoggedIn} from '../../login/login-reducer';
import {useDispatch} from 'react-redux';

export const HomeScreen = () => {

    const dispatch = useDispatch();

    const onLogOutButtonPress = () => {
        dispatch(setIsLoggedIn(false));
    };

    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Home!</Text>
            <Button
                onPress={onLogOutButtonPress}
                title="Log out"
                color="#841584"
            />
        </View>
    );
};