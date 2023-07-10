import React, {useState, useEffect} from 'react'
import './Gallery.css'
import {Swiper, SwiperSlide, useSwiper} from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Thumbs, Controller} from 'swiper';
import "swiper/swiper.min.css";
import "swiper/css"

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Gallery({img1, img2, img3, img4, flavor}) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [swiper, setSwiper] = useState(null);


  useEffect(()=>{
    if(swiper){
       swiper.slideTo(0,0);
    }
  }, [flavor])
  return (
    <div className="ghost__gallery">
        <Swiper 
            onSwiper={setSwiper}
            className='swiper-container'
            modules={[Thumbs, Navigation]}
            spaceBetween={50}
            loop={true}
            slidesPerView={1}
            thumbs={{swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null}}
            navigation
      
        >
            <SwiperSlide style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
          
          <img className="ghost__gallery_img-display" src={img1}/>
      
          </SwiperSlide>
        
            <SwiperSlide  style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
          
            <img className="ghost__gallery_img-display" src={img2}/>
        
            </SwiperSlide>
            <SwiperSlide  style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
          
            <img className="ghost__gallery_img-display" src={img3}/>
        
            </SwiperSlide>
            <SwiperSlide  style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
          
            <img className="ghost__gallery_img-display" src={img4}/>
        
            </SwiperSlide>
        </Swiper>

        <Swiper
            onSwiper={setThumbsSwiper}
            className="swiper-thumbnail-container"
            slidesPerView={4}
            modules={[Thumbs]}
            watchSlidesProgress>
                <SwiperSlide style={{display: "flex", alignItems: "center", justifyContent: "center", cursor:"pointer"}}>
                <img className="ghost__gallery_img-thumb first" src={img1}/>
                </SwiperSlide>
                <SwiperSlide style={{cursor: "pointer"}}>
                <img className="ghost__gallery_img-thumb" src={img2}/>
                </SwiperSlide>
                <SwiperSlide style={{cursor: "pointer"}}>
                <img className="ghost__gallery_img-thumb" src={img3}/>
                </SwiperSlide>
                <SwiperSlide style={{cursor: "pointer"}}>
                <img className="ghost__gallery_img-thumb" src={img4}/>
                </SwiperSlide>
        </Swiper>
    </div>
  )
}
