import React from 'react';
import { Carousel } from 'antd';
import carousel01 from '@/assets/images/carousel/carousel01.jpg';
import carousel02 from '@/assets/images/carousel/carousel02.jpg';
import carousel03 from '@/assets/images/carousel/carousel03.jpg';
import carousel04 from '@/assets/images/carousel/carousel04.jpg';
import styles from './index.less'

export default () => {

  return (
    <Carousel effect={'fade'} autoplay>
      <div>
        <img src={carousel02}/>
      </div>
      <div>
        <img src={carousel01}/>
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
