import {ImageSourcePropType} from 'react-native';
import uuid from 'react-native-uuid';

export const usersArr: UserType[] = [
    {id: uuid.v4() as string, name: 'John', age: 32, city: 'Glasgow', image: require('../common/images/Users/User_1.jpg')},
    {id: uuid.v4() as string, name: 'Helga', age: 29, city: 'Reykjavik', image: require('../common/images/Users/User_5.jpg')},
    {id: uuid.v4() as string, name: 'Bob', age: 22, city: 'Chicago', image: require('../common/images/Users/User_2.jpg')},
    {id: uuid.v4() as string, name: 'Ann', age: 27, city: 'Berlin', image: require('../common/images/Users/User_6.jpg')},
    {id: uuid.v4() as string, name: 'Charlie', age: 18, city: 'Dublin', image: require('../common/images/Users/User_3.jpg')},
    {id: uuid.v4() as string, name: 'Sarah', age: 28, city: 'New York', image: require('../common/images/Users/User_7.jpg')},
    {id: uuid.v4() as string, name: 'William', age: 35, city: 'Warsaw', image: require('../common/images/Users/User_4.jpg')},
    {id: uuid.v4() as string, name: 'Jane', age: 33, city: 'Amsterdam', image: require('../common/images/Users/User_8.jpg')},
];

export const settingsArr: settingsArrItemType[] = ['General', 'Display', 'Sounds', 'Battery', 'Privacy'];

// types
export type UserType = {
    id: string
    name: string
    age: number
    city: string
    image: ImageSourcePropType
}

export type settingsArrItemType = 'General' | 'Display' | 'Sounds' | 'Battery' | 'Privacy'