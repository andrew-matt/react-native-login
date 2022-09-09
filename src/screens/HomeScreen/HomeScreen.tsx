import {Button, Image, View} from 'react-native';
import {setIsLoggedIn} from '../../login/login-reducer';
import {useDispatch} from 'react-redux';

export const HomeScreen = () => {

    const dispatch = useDispatch();

    const onLogOutButtonPress = () => {
        dispatch(setIsLoggedIn(false));
    };

    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Image
                style={{width: 100, height: 100}}
                source={require('../../common/icons/home/home.png')}
            />
            <Button
                onPress={onLogOutButtonPress}
                title="Log out"
                color="#841584"
            />
        </View>
    );
};