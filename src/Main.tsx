import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen} from './screens/HomeScreen/HomeScreen';
import {UsersScreen} from './screens/UsersScreen/UsersScreen';
import {SettingsRootScreen} from './screens/SettingsRootScreen/SettingsRootScreen';
import {Login} from './login/Login';
import {useAppSelector} from './common/hooks/hooks';
import Ionicons from '@expo/vector-icons/Ionicons';
import {RouteProp} from '@react-navigation/core/lib/typescript/src/types';
import {ParamListBase} from '@react-navigation/native';

const Tab = createBottomTabNavigator();

export const Main = () => {

    const isLoggedIn = useAppSelector(state => state.login.isLoggedIn);
    const isLoading = useAppSelector(state => state.login.isLoading);

    const screenOptions = (route: RouteProp<ParamListBase>) => {
        return {
            headerShown: false,
            tabBarIcon: ({focused, color, size}: { focused: boolean, color: string, size: number }) => {
                let iconName;

                if (route.name === 'Home') {
                    iconName = focused
                        ? 'ios-home'
                        : 'ios-home-outline';
                } else if (route.name === 'Users') {
                    iconName = focused ? 'ios-person' : 'ios-person-outline';
                } else if (route.name === 'SettingsRoot') {
                    iconName = focused ? 'ios-settings' : 'ios-settings-outline';
                }

                return <Ionicons name={iconName as keyof typeof Ionicons.glyphMap} size={size} color={color}/>;
            },
            tabBarActiveTintColor: '#3478f6',
            tabBarInactiveTintColor: 'gray',
        };
    };

    const showContent = () => {
        if (isLoggedIn) {
            return (
                <Tab.Navigator screenOptions={(route) => screenOptions(route.route)}>
                    <Tab.Screen name="Home" component={HomeScreen}/>
                    <Tab.Screen name="Users" component={UsersScreen}/>
                    <Tab.Screen name="SettingsRoot" component={SettingsRootScreen} options={{title: 'Settings'}}/>
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