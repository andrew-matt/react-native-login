import {Button, Dimensions, StyleSheet, TextInput, View} from 'react-native';
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {setIsLoading, setIsLoggedIn} from './login-reducer';

const {width} = Dimensions.get('screen');

export const Login = () => {

    const dispatch = useDispatch();

    const [login, onChangeLogin] = useState('123');
    const [password, onChangePassword] = useState('123');

    const onLogInButtonPress = () => {
        if (login === '123' && password === '123') {
            dispatch(setIsLoading(true));
            setTimeout(() => {
                dispatch(setIsLoggedIn(true));
                dispatch(setIsLoading(false));
            }, 2000);
        } else {
            alert('wrong login or password')
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                onChangeText={onChangeLogin}
                value={login}
                placeholder={'login'}
                secureTextEntry
            />
            <TextInput
                style={styles.input}
                onChangeText={onChangePassword}
                value={password}
                placeholder={'password'}
                secureTextEntry
            />
            <Button
                onPress={onLogInButtonPress}
                title="Log in"
                color="#841584"
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
    input: {
        borderStyle: 'solid',
        borderWidth: 2,
        borderRadius: 10,
        marginVertical: 10,
        padding: 10,
        width: width * 0.75,
    },
});