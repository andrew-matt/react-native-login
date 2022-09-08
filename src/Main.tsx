import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen} from './screens/HomeScreen/HomeScreen';
import {UsersScreen} from './screens/UsersScreen/UsersScreen';
import {SettingsScreen} from './screens/SettingsScreen/SettingsScreen';
import {Login} from './login/Login';
import {useAppSelector} from './common/hooks/hooks';

const Tab = createBottomTabNavigator();

export const Main = () => {

    const isLoggedIn = useAppSelector(state => state.login.isLoggedIn);
    const isLoading = useAppSelector(state => state.login.isLoading);

    const showContent = () => {
        if (isLoggedIn) {
            return (
                <Tab.Navigator>
                    <Tab.Screen name="Home" component={HomeScreen}/>
                    <Tab.Screen name="Users" component={UsersScreen}/>
                    <Tab.Screen name="Settings" component={SettingsScreen}/>
                </Tab.Navigator>
            );
        } else {
            return <Login/>;
        }
    };

    return (
        <View style={styles.container}>
            {
                isLoading
                    ? (
                        <View style={styles.loadingContainer}>
                            <ActivityIndicator size="large"/>
                        </View>
                    )
                    : showContent()

            }
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});