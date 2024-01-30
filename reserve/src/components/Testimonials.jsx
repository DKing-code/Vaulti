import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import TestimonalCard from './TestimonalCard';
import { Autoplay} from "swiper";



function Testimonials() {
  return (
    <div className=' md:py-10 bg-blue-400	 text-white'>

      <div className='flex flex-wrap my-20 gap-y-10 container md:mx-auto p-5'>
        <div className=''>
          <p>Testimonials</p>
          <h1 className='md:text-6xl text-4xl font-light'>What Our Clients <br /> Say About Us</h1>
        </div>

          <Swiper 
            className='lg:w-1/2'
            spaceBetween={10}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            modules={[Autoplay]}
          >
            <SwiperSlide><TestimonalCard imgSrc='https://i.pravatar.cc/150?img=3' name='David Randson'/></SwiperSlide>
            <SwiperSlide><TestimonalCard imgSrc='https://i.pravatar.cc/150?img=20' name='Shei Banks'/></SwiperSlide>
            <SwiperSlide><TestimonalCard imgSrc='https://i.pravatar.cc/150?img=8' name='Gideon Mavins'/></SwiperSlide>
          </Swiper>

      </div>
    </div>
  )
}

export default Testimonials