import {ImageSourcePropType} from 'react-native';
import uuid from 'react-native-uuid';

export const usersArr: UserType[] = [
    {id: uuid.v4() as string, name: 'John', image: require('../common/images/Users/User_1.jpg')},
    {id: uuid.v4() as string, name: 'Helen', image: require('../common/images/Users/User_5.jpg')},
    {id: uuid.v4() as string, name: 'Bob', image: require('../common/images/Users/User_2.jpg')},
    {id: uuid.v4() as string, name: 'Ann', image: require('../common/images/Users/User_6.jpg')},
    {id: uuid.v4() as string, name: 'Charlie', image: require('../common/images/Users/User_3.jpg')},
    {id: uuid.v4() as string, name: 'Sarah', image: require('../common/images/Users/User_7.jpg')},
    {id: uuid.v4() as string, name: 'William', image: require('../common/images/Users/User_4.jpg')},
    {id: uuid.v4() as string, name: 'Jane', image: require('../common/images/Users/User_8.jpg')},
];

export const settingsArr: settingsArrItemType[] = ['General', 'Display', 'Sounds', 'Battery', 'Privacy'];

// types
export type UserType = {
    id: string
    name: string
    image: ImageSourcePropType
}

export type settingsArrItemType = 'General' | 'Display' | 'Sounds' | 'Battery' | 'Privacy'