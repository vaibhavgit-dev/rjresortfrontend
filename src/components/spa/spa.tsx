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
      <div className='spa-box pt-50 pb-0'>
        <div className='row g-0'>
            <div className='col-lg-6 order-2 order-lg-1'>
               <div className='spa-text-box h-100 p-3 p-lg-5'>
               <h5 className="tp-section-three-title-pre">Rj Resort Weeding Mertings & Events</h5>
               <h2 className='tp-about-hotel-title mb-15'>Weeding Mertings & Events</h2>
               <p>welcomes its guests to a pleasant dining experience with exquisitely hand crafted delicacies. Indulge in the art of fine dining from the royal kitchens of India and savour global cuisines. Each restaurant has an interesting tale to tell on account of its origin or inspiration. Noormahal Palace offers a range of settings and cuisines. These are royal dining experiences to remember.</p>
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
                        <img src="/assets/img/about/home3/01.jpg" alt="banner" />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="testi-card">
                      <div className="crypto-logos">
                        <img src="/assets/img/about/home3/02.jpg" alt="banner" />
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
                        <img src="/assets/img/about/home3/01.jpg" alt="banner" />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="testi-card">
                      <div className="crypto-logos">
                        <img src="/assets/img/about/home3/02.jpg" alt="banner" />
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
               </div>
            </div>
            <div className='col-lg-6'>
            <div className='spa-text-box h-100 p-3 p-lg-5'>
            <h5 className="tp-section-three-title-pre">Rj Resort Spa & Wellness</h5>
               <h2 className='tp-about-hotel-title mb-15'>Spa & Wellness</h2>
               <p>welcomes its guests to a pleasant dining experience with exquisitely hand crafted delicacies. Indulge in the art of fine dining from the royal kitchens of India and savour global cuisines. Each restaurant has an interesting tale to tell on account of its origin or inspiration. Noormahal Palace offers a range of settings and cuisines. These are royal dining experiences to remember.</p>
               </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Spa
