import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay} from "swiper";
import img1 from '../assets/images/award-ais.png'
import img2 from '../assets/images/award-sbd.png'
import img3 from '../assets/images/east.png'
import img4 from '../assets/images/madein.png'
import img5 from '../assets/images/eurosafe.png'
import img6 from '../assets/images/award3.png'

function Partners() {
  return (
  <div className=' md:py-10 bg-blue-300 p-5'>
    <p className='font-semibold text-3xl text-center text-white'>Accreditations + awards</p>
    <Swiper 
            className='md:my-20 mt-10 mx-auto container '
            spaceBetween={10}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            slidesPerView={4}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            modules={[Autoplay]}
          >
            <SwiperSlide>
                <img src={img1} alt="" className='object-cover'/>
            </SwiperSlide>
            <SwiperSlide>
              <img src={img2} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img3} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img4} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img5} alt="" />
            </SwiperSlide>
            <SwiperSlide><img src={img3} alt="" /></SwiperSlide>
            <SwiperSlide><img src={img6} alt="" /></SwiperSlide>
          </Swiper>
  </div>
  )
}

export default Partners