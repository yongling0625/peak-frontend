import React, { useRef } from 'react';
import { Carousel } from 'antd';
import { LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons';
import carousel01 from '@/assets/images/carousel/carousel01.jpg';
import carousel02 from '@/assets/images/carousel/carousel02.jpg';
import carousel03 from '@/assets/images/carousel/carousel03.jpg';
import carousel04 from '@/assets/images/carousel/carousel04.jpg';
import carousel05 from '@/assets/images/carousel/carousel05.jpg';
import styles from './index.less';

export default () => {

  const carouselRef = useRef();

  return (
    <div style={{position: 'relative'}}>
      <Carousel
        ref={carouselRef}
        effect={'fade'}
        autoplay={true}
        autoplaySpeed={3000}
      >
        <div>
          <img src={carousel01} alt={''}/>
        </div>
        <div>
          <img src={carousel02} alt={''}/>
        </div>
        <div>
          <img src={carousel03} alt={''}/>
        </div>
        <div>
          <img src={carousel04} alt={''}/>
        </div>
        <div>
          <img src={carousel05} alt={''}/>
        </div>
      </Carousel>
      <LeftCircleOutlined className={styles.prev} onClick={() => carouselRef.current.prev()}/>
      <RightCircleOutlined className={styles.next} onClick={() => carouselRef.current.next()}/>
    </div>
  );
}
