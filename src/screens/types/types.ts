import {NavigationProp, NavigatorScreenParams, useNavigation} from '@react-navigation/native';
// import type {StackScreenProps} from '@react-navigation/stack';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

// https://javascript.plainenglish.io/react-navigation-v6-with-typescript-nested-navigation-part-2-87844f643e37

export type RootStackParamList = {
    Home: undefined;
    Users: undefined;
    SettingsRoot: NavigatorScreenParams<NestedStackType>
};

export type NestedStackType = {
    Settings: undefined
    General: undefined
    Display: undefined
    Sounds: undefined
    Battery: undefined
    Privacy: undefined
}

export type MainDetailsPropsType_ = NativeStackScreenProps<NestedStackType, 'General'>

// export type MainDetailsPropsType = CompositeScreenProps<BottomTabScreenProps<NestedStackType, 'MainDetails'>,
//     StackScreenProps<RootStackParamList>>

type UseNavigationType = NavigationProp<RootStackParamList>

export const useAppNavigation = () => useNavigation<UseNavigationType>();