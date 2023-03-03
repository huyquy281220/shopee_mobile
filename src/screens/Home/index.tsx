import React from 'react';
import {View, StatusBar} from 'react-native';

// import {HomeScreenProps} from '../../types/screen';
import HomeSwiper from './component/Swiper';
import Header from './component/Header';
import Discover from './component/Discover';
import ScrollToRefresh from '../../components/ScrollToRefresh';

const Welcome = () => {
  return (
    <ScrollToRefresh>
      <StatusBar translucent={true} backgroundColor={'transparent'} />
      <HomeSwiper />
      <Header />
      <Discover />
    </ScrollToRefresh>
  );
};

export default Welcome;
