import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';

const Header = () => {
  return (
    <View style={styles.header}>
      <View style={styles.header_left}>
        <IonIcon name="search-outline" style={styles.left_icon} />
        <TextInput
          placeholder="Đăng ký và nhận vo..."
          placeholderTextColor={'#ee4d2d'}
          style={styles.search_input}
        />
        <IonIcon name="camera-outline" style={styles.left_icon} />
      </View>
      <View style={styles.header_right}>
        <IonIcon name="cart-outline" style={styles.right_icon} />
        <IonIcon name="chatbubble-ellipses-outline" style={styles.right_icon} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    flexDirection: 'row',
    width: '100%',
    height: 50,
    top: 50,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: 'transparent',
  },
  header_left: {
    paddingHorizontal: 5,
    flex: 70,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 2,
    backgroundColor: '#fff',
  },
  header_right: {
    flex: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  right_icon: {
    fontSize: 25,
    marginLeft: 20,
    color: '#fff',
  },
  left_icon: {
    fontSize: 20,
    color: 'rgba(0,0,0,0.5)',
  },
  search_input: {
    width: '80%',
    color: '#ee4d2d',
  },
});

export default Header;
