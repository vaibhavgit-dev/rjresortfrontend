"use client"
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import shape_2 from '@/assets/img/about/about-4/shape-2.png';

function Page() {
  const animationSettings = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 },
  };

  const [sectionRef1, inView1] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [sectionRef2, inView2] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [sectionRef3, inView3] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <>
      {/* First Section */}
      <motion.div
        ref={sectionRef1}
        {...animationSettings}
        animate={inView1 ? animationSettings.animate : animationSettings.initial}
        className="pt-60 pb-60"
      >
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
      </motion.div>

      {/* Second Section */}
      <motion.div
        ref={sectionRef2}
        {...animationSettings}
        animate={inView2 ? animationSettings.animate : animationSettings.initial}
        className="tp-about-area pt-60 fix pb-40 bg-white"
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-10">
              <div className="tp-about-top-content mb-50">
                <h3 className="tp-about-hotel-title tp-about-top-title-2">
                  Signature Experiences Include:
                </h3>
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
                <i>
                  <p className="mb-0">
                    Experience serenity and rejuvenation in the heart of
                    Darjeeling
                  </p>
                </i>
                <p className="mt-10 mb-5">
                  Restorative massages inspired by time-honored techniques.
                </p>
                <p className="mt-10">
                  Private steam room for an exclusive, immersive experience.
                </p>
                <p className="text-lg mr-5">
                  Whether you're seeking relaxation after a day of adventure or
                  indulging in self-care during your stay, the Spa promises a
                  transformative journey tailored to your needs.
                </p>
                <img
                  src="/assets/img/rjresorts/spa2.jpg"
                  alt="rj resort spa"
                  className="mt-20 w-100 h-80"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="tp-about-4-thumb p-relative mb-40">
                <img
                  className="w-100"
                  src="/assets/img/rjresorts/spa.jpg"
                  alt="thumb"
                  style={{ height: "auto" }}
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Third Section */}
      <motion.div
        ref={sectionRef3}
        {...animationSettings}
        animate={inView3 ? animationSettings.animate : animationSettings.initial}
        className="tp-offer-room-area tp-offer-room-space pt-60 pb-60 mb-5"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div
                className="tp-offer-bg bg-position jarallax p-relative"
                data-background="/assets/img/room/bg-2.jpg"
                style={{
                  backgroundImage: "url(/assets/img/about/home3/09.jpg)",
                }}
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
      </motion.div>

      <div className="pt-60 pb-60"></div>
    </>
  );
}

export default Page;
