import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

import SwiperComp from '../../../components/Swiper';
import DotsSwiper from '../../../components/DotsSwiper';

const HomeSwiper = () => {
  return (
    <View style={styles.wrapper}>
      <SwiperComp dot={<DotsSwiper />} activeDotColor="#ee4d2d">
        <View style={styles.slide}>
          <Image
            source={require('../../../assets/images/banner.png')}
            style={styles.banner_img}
          />
        </View>
        <View style={styles.slide}>
          <Image
            source={require('../../../assets/images/banner.png')}
            style={styles.banner_img}
          />
        </View>
        <View style={styles.slide}>
          <Image
            source={require('../../../assets/images/banner.png')}
            style={styles.banner_img}
          />
        </View>
      </SwiperComp>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    height: 200,
  },
  slide: {
    flex: 1,
    // justifyContent: 'center',
  },
  banner_img: {
    height: 200,
  },
});

export default HomeSwiper;
