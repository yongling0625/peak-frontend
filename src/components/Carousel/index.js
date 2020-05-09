import React, { useRef } from 'react';
import { Carousel } from 'antd';
import { LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons';
import carousel01 from '@/assets/images/carousel/carousel01.jpg';
import carousel02 from '@/assets/images/carousel/carousel02.jpg';
import carousel03 from '@/assets/images/carousel/carousel03.jpg';
import carousel04 from '@/assets/images/carousel/carousel04.jpg';
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
          <img src={carousel02}/>
          <div className={styles.img_font_blue}>精密传动解决方案提供商</div>
        </div>
        <div>
          <img src={carousel01}/>
          <div className={styles.img_font_white}>专业齿轮定制 满足客户个性化需求</div>
        </div>
        <div>
          <img src={carousel03}/>
          <div className={styles.img_font_blue}>智慧型润滑系统 最多可支持40个润滑点</div>
        </div>
        <div>
          <img src={carousel04}/>
          <div className={styles.img_font_blue}>多点同步XYZ组合模组</div>
        </div>
      </Carousel>
      <LeftCircleOutlined className={styles.prev} onClick={() => carouselRef.current.prev()}/>
      <RightCircleOutlined className={styles.next} onClick={() => carouselRef.current.next()}/>
    </div>
  );
}
