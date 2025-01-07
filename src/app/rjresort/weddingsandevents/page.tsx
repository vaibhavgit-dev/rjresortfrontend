"use client"
import React from "react";
import { motion } from "framer-motion";

function page() {
  return (
    <>
      {/* Hero Section */}
      <div className="pt-60 pb-0">
        <div className="container">
          <div className="text-center">
            <motion.h1
              className="tp-about-hotel-title mb-4"
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Where moments become memories.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              RJ Resorts provides versatile event spaces designed to host
              everything from corporate meetings to intimate celebrations. <br /> Each
              venue is equipped with state-of-the-art amenities and supported by
              our expert team to ensure every event is flawless.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Event Section 1 */}
      <div className="event-box pt-60 pb-0 overflow-hidden">
        <div className="container-fluid ps-0">
          <div className="row">
            <div className="col-lg-6">
              <motion.div
                className="event-img"
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
              >
                <img
                  className="w-100"
                  src="/assets/img/rjresorts/meeting1.JPG"
                  alt="Event Venue"
                />
              </motion.div>
            </div>
            <div className="d-flex align-items-center col-lg-6">
              <motion.div
                className="tp-about-hotel-content event-text-box ps-5"
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
              >
                <div className="w-100">
                <h6 className="tp-section-three-title-pre">
                  <span></span>Wedding at RJ Resort
                </h6>
                <h2 className="tp-about-top-title tp-about-top-title-2 mb-4">
                  Spaces Include
                </h2>
                <ul className="ps-4 mb-4">
                  <li><b>The Manor Conference Hall</b>: A 1,000 sq. ft. space accommodating up to 100 guests.</li>
                  <li><b>The White Orchid Restaurant & Sundeck Rooftop Café</b>: Perfect for private dining, sundowners, and casual gatherings.</li>
                </ul>
                <div className="tp-about-hotel-btn">
                  <a className="tp-btn-4" href="#">
                    ENQUIRE NOW
                  </a>
                </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Event Section 2 */}
      <div className="event-box pt-60 pb-60 overflow-hidden">
        <div className="container-fluid pe-0">
          <div className="row">
            <div className="d-flex align-items-center col-lg-6">
              <motion.div
                className="tp-about-hotel-content event-text-box ps-5"
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
              >
                <div className="w-100">
                <h6 className="tp-section-three-title-pre">
                  <span></span>Event at RJ Resort
                </h6>
                <h2 className="tp-about-top-title tp-about-top-title-2 mb-4">
                  Event Features
                </h2>
                <ul className="ps-4 mb-4">
                  <li>Flexible layouts tailored to your needs</li>
                  <li>Advanced AV equipment for seamless experiences</li>
                </ul>
                <div className="tp-about-hotel-btn">
                  <a className="tp-btn-4" href="#">
                    ENQUIRE NOW
                  </a>
                </div>
                </div>
              </motion.div>
            </div>
            <div className="col-lg-6">
              <motion.div
                className="event-img"
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
              >
                <img
                  className="w-100"
                  src="/assets/img/rjresorts/meeting3.JPG"
                  alt="Event Features"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
