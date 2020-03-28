import React from 'react';
import { Carousel } from 'antd';
import carousel01 from '@/assets/images/carousel01.jpg';
import carousel02 from '@/assets/images/carousel02.jpg';
import carousel03 from '@/assets/images/carousel03.jpg';
import carousel04 from '@/assets/images/carousel04.jpg';

export default () => {

  return (
    <Carousel effect="fade" autoplay={true}>
      <div>
        <img src={carousel01}/>
      </div>
      <div>
        <img src={carousel02}/>
      </div>
      <div>
        <img src={carousel03}/>
      </div>
      <div>
        <img src={carousel04}/>
      </div>
    </Carousel>
  );
}
