import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';

import Divider from '../../../components/Divider';

export default function Discover() {
  return (
    <View style={styles.wrapper}>
      <View style={styles.top}>
        <View style={styles.qr_code}>
          <IonIcon name="scan-outline" style={{fontSize: 25, color: '#000'}} />
        </View>
        <Divider />
        <View style={styles.shopee_pay}>
          <View style={styles.title}>
            <Image
              source={require('../../../assets/images/banner.png')}
              style={styles.icon}
            />
            <Text style={{color: '#000'}}>ShopeePay</Text>
          </View>
          <Text
            numberOfLines={2}
            ellipsizeMode="tail"
            style={{color: '#000', fontSize: 10}}>
            Giảm 80.000Đ - Liên kết ví ShopeePay ngay hôm nay
          </Text>
        </View>
        <Divider />
        <View style={styles.shopee_coin}>
          <View style={styles.title}>
            <Image
              source={require('../../../assets/images/banner.png')}
              style={styles.icon}
            />
            <Text style={{color: '#000'}}>Shopee Xu</Text>
          </View>
          <Text
            numberOfLines={2}
            ellipsizeMode="tail"
            style={{color: '#000', fontSize: 10}}>
            Đăng ký ngay hôm nay để nhận Shopee Xu
          </Text>
        </View>
      </View>
      <View style={styles.bottom}>
        <Text>Bottom</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    position: 'relative',
    height: 180,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  icon: {
    width: 15,
    height: 15,
    marginRight: 3,
  },
  //top
  top: {
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    width: '92%',
    height: 60,
    top: -12,
    padding: 10,
    paddingLeft: 0,
    borderRadius: 5,
    backgroundColor: '#fff',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  qr_code: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 8,
  },
  shopee_pay: {
    flex: 2,
    paddingHorizontal: 8,
  },
  shopee_coin: {
    flex: 2,
    paddingHorizontal: 8,
  },
  title: {
    flexDirection: 'row',
    // alignItems: 'flex-end',
  },
  //bottom
  bottom: {
    marginTop: 80,
    color: '#000',
  },
});
