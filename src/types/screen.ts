import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {TabParamList} from './TabParamList';

export type HomeScreenProps = {
  navigation: NativeStackNavigationProp<TabParamList, 'Home'>;
};

export type MallScreenProps = {
  navigation: NativeStackNavigationProp<TabParamList, 'Mall'>;
};
export type LiveScreenProps = {
  navigation: NativeStackNavigationProp<TabParamList, 'Live'>;
};
export type NotificationsScreenProps = {
  navigation: NativeStackNavigationProp<TabParamList, 'Notifications'>;
};
export type MyProfileScreenProps = {
  navigation: NativeStackNavigationProp<TabParamList, 'MyProfile'>;
};
