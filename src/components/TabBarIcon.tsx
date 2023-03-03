import React from 'react';
import IonIcon from 'react-native-vector-icons/Ionicons';

type TabBarIconProps = {
  focused: boolean;
  color?: string;
  size?: number;
};

export const HomeIcon = ({focused, color, size}: TabBarIconProps) => {
  return (
    <IonIcon
      name={focused ? 'home' : 'home-outline'}
      size={size}
      color={color}
    />
  );
};
export const MallIcon = ({focused, color, size}: TabBarIconProps) => {
  return (
    <IonIcon
      name={focused ? 'home' : 'home-outline'}
      size={size}
      color={color}
    />
  );
};
export const LiveIcon = ({focused, color, size}: TabBarIconProps) => {
  return (
    <IonIcon
      name={focused ? 'videocam' : 'videocam-outline'}
      size={size}
      color={color}
    />
  );
};
export const NotificationsIcon = ({focused, color, size}: TabBarIconProps) => {
  return (
    <IonIcon
      name={focused ? 'notifications' : 'notifications-outline'}
      size={size}
      color={color}
    />
  );
};
export const MyProfileIcon = ({focused, color, size}: TabBarIconProps) => {
  return (
    <IonIcon
      name={focused ? 'person' : 'person-outline'}
      size={size}
      color={color}
    />
  );
};
