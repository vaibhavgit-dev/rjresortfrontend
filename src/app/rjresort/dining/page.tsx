import React from 'react'
import Image from "next/image";
import ab_img_2 from '@/assets/img/about/about-4/thumb.jpg';
import rotate_shape from '@/assets/img/about/about-4/yers.png';
import shape_2 from '@/assets/img/about/about-4/shape-2.png';
import user_img from '@/assets/img/about/about-4/user.png';

function page() {
  return (
    <>
      <div className='dining-box pt-60 pb-60'>
        <div className='container'>
          <div className='text-center'>
          <h1 className='tp-about-hotel-title mb-4'>The White Orchid Restaurant</h1>
          <p className='mb-1'>A celebration of flavors in an elegant setting</p>
          <p>Our signature restaurant, <b>The White Orchid</b>, brings together an array of global and local cuisines in an inviting atmosphere. With
          seating for 60, this multi-cuisine space is perfect for leisurely lunches, intimate dinners, or joyful gatherings.
          </p>
          <div className='pt-30'>
          <img className='w-100' src="/assets/img/about/home3/07.jpg" alt="banner" />
          </div>
          </div>
        </div>
      </div>
      {/* about bottom */}
      <div className="tp-about-area pt-60 fix pb-0 bg-white">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-10">
                            <div className="tp-about-top-content mb-50">
                                <h6 className="tp-section-three-title-pre"><span></span>Rj Resort</h6>
                                <h2 className="tp-about-top-title tp-about-top-title-2">Sundeck Rooftop Café                                </h2>
                            </div>
                        </div>
                        <div className="col-lg-2 d-none d-lg-block">
                            <div className="tp-about-4-shape mb-20 text-right">
                                <Image src={shape_2} alt="shape" />
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-start">
                    <div className="col-lg-6">
                            <div className="mb-40">
                                <p className="mb-0">Perched at the highest point of RJ Resorts, the Sundeck Rooftop Café offers a one-of-a-kind experience. Guests can enjoy freshly
brewed coffee sourced from Blue Tokai, known for its artisanal blends, or savor the finest Darjeeling teas handpicked from the
region’s renowned tea gardens. Whether you're indulging in an all-day breakfast to signature Nepali delicacies, Lebanese bruschetta,
and shakshuka, every moment is accompanied by panoramic views and an inviting ambiance.</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="tp-about-4-thumb p-relative mb-40">
                                <Image className="w-100" src={ab_img_2} alt="thumb" style={{ height: 'auto' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* about bottom */}
            {/* about bottom */}
      <div className="tp-about-area pt-60 fix pb-0">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 order-1 order-lg-2">
                            <div className="tp-about-top-content mb-50">
                                <h6 className="tp-section-three-title-pre"><span></span>Rj Resort</h6>
                                <h2 className="tp-about-top-title tp-about-top-title-2">The White Orchid Restaurant                               </h2>
                            </div>
                        </div>
                        <div className="col-lg-6 d-none d-lg-block order-2 order-lg-1">
                            <div className="tp-about-4-shape mb-20 text-left">
                                <Image src={shape_2} alt="shape" />
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-start">
                    <div className="col-lg-6 order-1 order-lg-2">
                            <div className="mb-40">
                                <p className="mb-0">A celebration of flavors in an elegant setting</p>
                                <p>Our signature restaurant, <b>The White Orchid</b>, brings together an array of global and local cuisines in an inviting atmosphere. With
                                seating for 60, this multi-cuisine space is perfect for leisurely lunches, intimate dinners, or joyful gatherings.</p>
                            </div>
                        </div>
                        <div className="col-lg-6 order-2 order-lg-1">
                            <div className="tp-about-4-thumb p-relative mb-40">
                                <Image className="w-100" src={ab_img_2} alt="thumb" style={{ height: 'auto' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* about bottom */}
    </>
  )
}

export default page