import Image from "next/image";
import ab_thumb from '@/assets/img/about/hotel/thumb.jpg';

export default function AboutAreaFive() {
    return (
        <div className="tp-about-area pt-0 mb-0">
            <div className="container">
                <div className="tp-about-hotel-border">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="tp-about-hotel-thumb">
                                <img className="w-100" src="/assets/img/rjresorts/rjresorts2.jpg" alt="rj resort" style={{height:'auto'}} />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="tp-about-hotel-content">
                                <div className="tp-about-title-box mb-35">
                                    <span className="tp-section-three-title-pre">About Our Hotel</span>
                                    <h2 className="tp-about-hotel-title mb-15">See Life From A<br /> Different Perspective.</h2>
                                    <p>In the morning, you can take a walk in the<br />
                                        fresh air-filled forest or stroll through<br />
                                        the herb garden.</p>
                                </div>
                                <div className="tp-about-hotel-btn">
                                    <a className="tp-btn-4" href="#">Why We are Different</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
