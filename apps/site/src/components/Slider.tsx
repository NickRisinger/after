'use client';

import { useRef, ReactNode, Children } from 'react';
import { Swiper, SwiperSlide, SwiperRef, SwiperProps } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

interface SliderProps
  extends Omit<SwiperProps, 'navigation' | 'pagination' | 'modules'> {
  children: ReactNode;
}

export default function Slider({ children, ...props }: SliderProps) {
  const swiperElRef = useRef<SwiperRef>(null);

  return (
    <div className="">
      <Swiper
        ref={swiperElRef}
        {...props}
        navigation={true}
        pagination={{
          type: 'fraction',
        }}
        modules={[Pagination, Navigation]}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {Children.map(children, (child) => (
          <SwiperSlide>{child}</SwiperSlide>
        ))}
      </Swiper>

      <div className="">
        <div className=""></div>
        <span className=""></span>
        <div className=""></div>
      </div>
    </div>
  );
}
