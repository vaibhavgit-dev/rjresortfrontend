'use client';
import React from 'react'
import {
    Navigation,
    Autoplay,
    Pagination,
    Scrollbar,
    A11y,
  } from "swiper/modules";
  import { Swiper, SwiperSlide } from "swiper/react";
  
  // Import Swiper styles
  import "swiper/css";
  import "swiper/css/navigation";
  import "swiper/css/pagination";
  import "swiper/css/scrollbar";
import './spa.css'

function Spa() {
  return (
    <>
      <div className='spa-box pt-0 pb-0 bg-white'>
        <div className='row g-0'>
            <div className='col-lg-6 order-2 order-lg-1'>
               <div className='d-flex align-items-center spa-text-box h-100 p-3 p-lg-5'>
                <div className='w-100'>
               <h2 className='tp-about-hotel-title mb-15'>Weeding Mertings & Events</h2>
               <p>RJ Resorts provides versatile event spaces designed to host everything from corporate meetings to intimate celebrations. Each venue is equipped with state-of-the-art amenities and supported by our expert team to ensure every event is flawless.</p>
               <div className="tp-about-hotel-btn mt-30">
                  <a className="tp-btn-4" href="#">Explore More</a>
                </div>
                </div>
               </div>
            </div>
            <div className='col-lg-6 order-1 order-lg-2'>
               <div className='spa-img h-100'>
               <Swiper
                  modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
                  spaceBetween={20}
                  slidesPerView={7}
                  breakpoints={{
                    0: {
                      slidesPerView: 1,
                    },
                    575: {
                      slidesPerView: 1,
                    },
                    767: {
                      slidesPerView: 1,
                    },
                    991: {
                      slidesPerView: 1,
                    },
                  }}
                  loop={true}
                  autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                  }}
                //   pagination={{ clickable: true }}
                  onSwiper={(swiper) => console.log(swiper)}
                  onSlideChange={() => console.log("slide change")}
                >
                  <SwiperSlide>
                    <div className="testi-card">
                      <div className="crypto-logos">
                        <img src="/assets/img/rjresorts/meeting1.JPG" alt="banner" />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="testi-card">
                      <div className="crypto-logos">
                        <img src="/assets/img/rjresorts/meeting2.JPG" alt="banner" />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="testi-card">
                      <div className="crypto-logos">
                        <img src="/assets/img/rjresorts/meeting3.JPG" alt="banner" />
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
               </div>
            </div>
        </div>
        <div className='row g-0'>
        <div className='col-lg-6'>
            <div className='spa-img h-100'>
               <Swiper
                  modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
                  spaceBetween={20}
                  slidesPerView={7}
                  breakpoints={{
                    0: {
                      slidesPerView: 1,
                    },
                    575: {
                      slidesPerView: 1,
                    },
                    767: {
                      slidesPerView: 1,
                    },
                    991: {
                      slidesPerView: 1,
                    },
                  }}
                  loop={true}
                  autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                  }}
                //   pagination={{ clickable: true }}
                  onSwiper={(swiper) => console.log(swiper)}
                  onSlideChange={() => console.log("slide change")}
                >
                  <SwiperSlide>
                    <div className="testi-card">
                      <div className="crypto-logos">
                        <img src="/assets/img/about/home3/04.jpg" alt="banner" />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="testi-card">
                      <div className="crypto-logos">
                        <img src="/assets/img/about/home3/05.jpg" alt="banner" />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="testi-card">
                      <div className="crypto-logos">
                        <img src="/assets/img/about/home3/06.jpg" alt="banner" />
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
               </div>
            </div>
            <div className='col-lg-6'>
            <div className='d-flex align-items-center spa-text-box h-100 p-3 p-lg-5'>
              <div className='w-100'>
               <h2 className='tp-about-hotel-title mb-15'>Spa & Wellness</h2>
               <p>Discover the perfect escape nestled in the hills of Darjeeling. Our serene spa offers a tranquil atmosphere and essential amenities for relaxation. Unwind and revitalize amidst the beauty of the hill station. Experience ultimate tranquility today.</p>
               <div className="tp-about-hotel-btn mt-30">
                  <a className="tp-btn-4" href="#">Explore More</a>
                </div>
                </div>
               </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Spa
