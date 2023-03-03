import React from 'react';
import {View, Image, Text} from 'react-native';

interface ObjectType {
  title: string;
  image: string;
}

interface DiscoverItemProps {
  data: ObjectType[];
}

const DiscoverItem = ({data}: DiscoverItemProps) => {
  return (
    <>
      {data.map(item => {
        return (
          <View>
            <View>
              <Image source={item.image} />
            </View>
            <Text>{item.title}</Text>
          </View>
        );
      })}
    </>
  );
};

export default DiscoverItem;
