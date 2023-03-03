import React, {ReactNode} from 'react';
import Swiper from 'react-native-swiper';

type SwiperProps = {
  children: ReactNode;
  horizontal?: boolean;
  loop?: boolean;
  autoplay?: boolean;
  showsButtons?: boolean;
  showsPagination?: boolean;
  dot?: ReactNode;
  activeDotColor?: string;
  onIndexChanged?: (index: number) => void;
};

const SwiperComp = ({
  children,
  loop,
  autoplay,
  horizontal,
  ...props
}: SwiperProps) => {
  return (
    <Swiper horizontal={horizontal} loop={loop} autoplay={autoplay} {...props}>
      {children}
    </Swiper>
  );
};

export default SwiperComp;
