import React from "react";

function page() {
  return (
    <>
      <div className="pt-60 pb-0">
        <div className="container">
          <div className="text-center">
            <h1 className="tp-about-hotel-title mb-4">
              Where moments become memories.
            </h1>
            <p>
              RJ Resorts provides versatile event spaces designed to host
              everything from corporate meetings to intimate celebrations. Each
              venue is equipped with state-of-the-art amenities and supported by
              our expert team to ensure every event is flawless.
            </p>
          </div>
        </div>
      </div>
      <div className="event-box pt-60 pb-0 overflow-hidden">
        <div className="container-fluid ps-0">
          <div className="row">
            <div className="col-lg-6">
              <div className="event-img">
                <img
                  className="w-100"
                  src="/assets/img/about/home3/04.webp"
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="tp-about-hotel-content event-text-box ps-5">
                <h6 className="tp-section-three-title-pre">
                  <span></span>Weeding Rj Resort
                </h6>
                <h2 className="tp-about-top-title tp-about-top-title-2">
                  Spaces Include
                </h2>
                <ul className="ps-4 mb-4">
                  <li><b>The Manor Conference Hall</b>: A 1,000 sq. ft. space accommodating up to 100 guests.
                  </li>
                  <li><b>The White Orchid Restaurant & Sundeck Rooftop Café</b>: Perfect for private dining, sundowners, and casual gatherings.
                  </li>
                </ul>
                <div className="tp-about-hotel-btn">
                  <a className="tp-btn-4" href="#">
                  ENQUIRE NOW
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="event-box pt-60 pb-60 overflow-hidden">
        <div className="container-fluid pe-0">
          <div className="row">
          <div className="col-lg-6">
              <div className="tp-about-hotel-content event-text-box ps-5">
                <h6 className="tp-section-three-title-pre">
                  <span></span> Event Rj Resort
                </h6>
                <h2 className="tp-about-top-title tp-about-top-title-2">
                  Event Features
                </h2>
                <ul className="ps-4 mb-4">
                  <li>Flexible layouts tailored to your needs</li>
                  <li>Advanced AV equipment for seamless experiences.</li>
                </ul>
                <div className="tp-about-hotel-btn">
                  <a className="tp-btn-4" href="#">
                  ENQUIRE NOW
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="event-img">
                <img
                  className="w-100"
                  src="/assets/img/about/home3/04.webp"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
