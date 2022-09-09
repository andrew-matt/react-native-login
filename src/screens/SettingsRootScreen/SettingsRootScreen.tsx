import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SettingsScreen} from './SettingsScreen/SettingsScreen';
import {GeneralScreen} from './GeneralScreen/GeneralScreen';
import {DisplayScreen} from './DisplayScreen/DisplayScreen';
import {SoundsScreen} from './SoundsScreen/SoundsScreen';
import {BatteryScreen} from './BatteryScreen/BatteryScreen';
import {PrivacyScreen} from './PrivacyScreen/PrivacyScreen';

const Stack = createNativeStackNavigator();

export const SettingsRootScreen = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name={'Settings'} component={SettingsScreen}/>
            <Stack.Screen name={'General'} component={GeneralScreen}/>
            <Stack.Screen name={'Display'} component={DisplayScreen}/>
            <Stack.Screen name={'Sounds'} component={SoundsScreen}/>
            <Stack.Screen name={'Battery'} component={BatteryScreen}/>
            <Stack.Screen name={'Privacy'} component={PrivacyScreen}/>
        </Stack.Navigator>
    );
};