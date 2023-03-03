import React from 'react';
// import {View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from '../screens/Home';
import Mall from '../screens/Mall';
import Live from '../screens/Live';
import Notifications from '../screens/Notifications';
import MyProfile from '../screens/MyProfile';
import {
  HomeIcon,
  LiveIcon,
  MallIcon,
  MyProfileIcon,
  NotificationsIcon,
} from './TabBarIcon';
import {TabParamList} from '../types/TabParamList';

const Tab = createBottomTabNavigator<TabParamList>();

const TabBar: React.FC = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          let routeName = route.name;

          if (routeName === 'Home') {
            iconName = <HomeIcon focused={focused} color={color} size={size} />;
          } else if (routeName === 'Mall') {
            iconName = <MallIcon focused={focused} color={color} size={size} />;
          } else if (routeName === 'Live') {
            iconName = <LiveIcon focused={focused} color={color} size={size} />;
          } else if (routeName === 'Notifications') {
            iconName = (
              <NotificationsIcon focused={focused} color={color} size={size} />
            );
          } else if (routeName === 'MyProfile') {
            iconName = (
              <MyProfileIcon focused={focused} color={color} size={size} />
            );
          }

          return iconName;
        },
        tabBarActiveTintColor: '#ee4d2d',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Mall" component={Mall} />
      <Tab.Screen name="Live" component={Live} />
      <Tab.Screen name="Notifications" component={Notifications} />
      <Tab.Screen name="MyProfile" component={MyProfile} />
    </Tab.Navigator>
  );
};

export default TabBar;
