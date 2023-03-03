import React from 'react';
import {View, StyleSheet} from 'react-native';

export default function Divider() {
  return <View style={styles.divider} />;
}

const styles = StyleSheet.create({
  divider: {
    width: 1,
    height: '80%',
    backgroundColor: '#ccc',
  },
});
