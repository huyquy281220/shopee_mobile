import React from 'react';
import {View, StyleSheet} from 'react-native';

// interface DotsProps {
//   backgroundColor: string;
// }

const DotsSwiper = () => {
  return <View style={styles.dot} />;
};

const styles = StyleSheet.create({
  dot: {
    width: 8,
    height: 8,
    marginHorizontal: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    borderRadius: 5,
  },
});

export default DotsSwiper;
