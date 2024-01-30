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
            <SwiperSlide><TestimonalCard imgSrc='https://i.pravatar.cc/150?img=3' name='David Randson' comment={'I\'m incredibly impressed with the level of security provided by this vault service. Knowing that my valuables are stored here gives me peace of mind. The state-of-the-art security measures and attentive staff make it a trustworthy choice for anyone seeking top-notch vault security'}/></SwiperSlide>
            <SwiperSlide><TestimonalCard imgSrc='https://i.pravatar.cc/150?img=20' name='Shei Banks' comment={"The vault security offered by this service is second to none. From advanced access control to round-the-clock surveillance, they prioritize the safety of my belongings. I highly recommend their secure vaults for anyone who values the importance of a reliable and robust security system."}/></SwiperSlide>
            <SwiperSlide><TestimonalCard imgSrc='https://i.pravatar.cc/150?img=8' name='Gideon Mavins' comment={'Securing my assets is a top priority, and this vault service has exceeded my expectations. The cutting-edge technology and stringent security protocols in place make me confident in the safety of my valuables. If you\'re looking for a vault service that takes security seriously, this is the one'}/></SwiperSlide>
          </Swiper>

      </div>
    </div>
  )
}

export default Testimonials