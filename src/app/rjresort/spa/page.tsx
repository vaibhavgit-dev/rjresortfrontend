import React from "react";
import Link from "next/link";

function page() {
  return (
    <>
      <div className="pt-60 pb-0">
        <div className="container">
          <div className="text-center">
            <h1 className="tp-about-hotel-title mb-4">
              A journey of renewal in the lap of the Himalayas
            </h1>
            <p>
              Escape into a world of serenity at the Spa, where modern wellness
              meets ancient healing traditions. Designed as a tranquil
              sanctuary, the spa offers personalized treatments that soothe both
              body and mind, allowing you to reconnect with yourself in a
              setting of calm and luxury.
            </p>
          </div>
        </div>
      </div>
      <div className="tp-offer-room-area tp-offer-room-space pt-60 pb-60 mb-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div
                className="tp-offer-bg bg-position jarallax p-relative"
                data-background="/assets/img/room/bg-2.jpg"
                style={{ backgroundImage: "url(/assets/img/about/home3/09.jpg)" }}
              >
                <div className="row justify-content-end">
                  <div className="col-xl-5 col-lg-6 col-md-7 col-sm-10 col-12">
                    <div className="tp-offer-info-wrapper">
                      <div className="tp-offer-title-wrap">
                        <span className="tp-offer-title-pre">
                          Exclusive Offer
                        </span>
                        <h2 className="tp-offer-title mb-20">
                          When to Book for the Best Deals
                        </h2>
                      </div>
                      <span className="tp-offer-border mb-15"></span>
                      <p className="tp-offer-para mb-35">
                        Escape into a world of serenity at the Spa, where modern
                        wellness meets ancient healing traditions. Designed as a
                        tranquil sanctuary, the spa offers personalized
                        treatments that soothe both body and mind, allowing you
                        to reconnect with yourself in a setting of calm and
                        luxury.
                      </p>
                      <div className="tp-offer-btn">
                        <Link className="tp-btn-2 tp-btn-3" href="#">
                          Book Now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-30 pb-30"></div>
      <div className="tp-offer-room-area tp-offer-room-space pt-60 pb-60 mt-5 mb-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div
                className="tp-offer-bg bg-position jarallax p-relative"
                data-background="/assets/img/room/bg-2.jpg"
                style={{ backgroundImage: "url(/assets/img/about/home3/11.jpg)" }}
              >
                <div className="row justify-content-start">
                  <div className="col-xl-5 col-lg-6 col-md-7 col-sm-10 col-12">
                    <div className="tp-offer-info-wrapper ms-4">
                      <div className="tp-offer-title-wrap">
                        <span className="tp-offer-title-pre">
                          Exclusive Offer
                        </span>
                        <h2 className="tp-offer-title mb-20">
                          When to Book for the Best Deals
                        </h2>
                      </div>
                      <span className="tp-offer-border mb-15"></span>
                      <p className="tp-offer-para mb-35">
                        Escape into a world of serenity at the Spa, where modern
                        wellness meets ancient healing traditions. Designed as a
                        tranquil sanctuary, the spa offers personalized
                        treatments that soothe both body and mind, allowing you
                        to reconnect with yourself in a setting of calm and
                        luxury.
                      </p>
                      <div className="tp-offer-btn">
                        <Link className="tp-btn-2 tp-btn-3" href="#">
                          Book Now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-60 pb-60"></div>
    </>
  );
}

export default page;
