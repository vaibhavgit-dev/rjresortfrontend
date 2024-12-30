import Image from "next/image"
import ab_img_1 from '@/assets/img/about/home3/01.jpg';
import ab_img_2 from '@/assets/img/about/home3/02.jpg';
import Link from "next/link";

export default function AboutAreaThree() {
    return (
        <div className="tp-about-area pt-80 pb-80">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 pb-3 order-2 order-lg-1">
                        <div className="wow fadeInUp" data-wow-delay=".3s" data-wow-duration="1s">
                            <h5 className="tp-section-three-title-pre">RJ Resort</h5>
                            <h2 className="tp-section-three-title mb-15">RJ Resort, Darjeeling</h2>
                            <p className="tp-about-para mb-20">An intimate retreat in Darjeeling’s most iconic address.</p>
                            <p className="tp-about-para mb-40">Nestled on the historic Mall Road and built with the same passion and care as our own home, RJ Resorts Darjeeling is more than a hotel—it’s a story of dedication passed through generations. Opposite the Governor’s House, our boutique property combines warmth, comfort, and attention to detail, offering guests a serene retreat in one of Darjeeling’s most prestigious neighborhoods.</p>
                            <div className="tp-about-3-btn">
                                <Link className="tp-btn-4" href="#">Learn More</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-10 pb-40 order-1 order-lg-2">
                        <div className="tp-about-3-thumb-wrap p-relative">
                            <img className="tp-about-3-thumb" data-parallax='{"y": -60, "smoothness": 20}' src="/assets/img/rjresorts/rjresort1.jpeg" alt="about" style={{height:'auto'}} />
                            <img className="tp-about-3-thumb-2 d-none d-sm-block" data-parallax='{"y": 80, "smoothness": 20}' src="/assets/img/rjresorts/rjresorts2.jpg" alt="about" style={{height:'auto'}} />
                        </div>
                    </div>
                </div>
                <div className="row g-lg-5 mt-lg-5">
                    <div className="col-lg-6 pb-3 order-2">
                        <div className="wow fadeInUp ps-lg-5" data-wow-delay=".3s" data-wow-duration="1s">
                            <h5 className="tp-section-three-title-pre">Aurum</h5>
                            <h2 className="tp-section-three-title mb-15">Aurum, Siliguri</h2>
                            <p className="tp-about-para mb-20">Where celebrations reach unparalleled grandeur and luxury finds its home.</p>
                            <p className="tp-about-para mb-40">Situated just three minutes from Bagdogra Airport, <span className="font-bold">Aurum by RJ Resorts</span> is Siliguri’s landmark destination for luxurious stays, grand celebrations, and seamless conventions. With <span className="font-bold">one of the largest event spaces in North Bengal</span> and an emphasis on impeccable service, Aurum is tailored for both business and leisure travelers.</p>
                            <div className="tp-about-3-btn">
                                <Link className="tp-btn-4" href="#">Explore More</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-10 pb-40 order-1">
                        <div className="tp-about-3-thumb-wrap p-relative">
                            <img className="tp-about-3-thumb" data-parallax='{"y": -60, "smoothness": 20}' src="/assets/img/aurum/aurum1.jpeg" alt="about" style={{height:'auto'}} />
                            <img className="tp-about-3-thumb-2 d-none d-sm-block" data-parallax='{"y": 20, "smoothness": 20}' src="/assets/img/aurum/aurum12.JPG" alt="about" style={{height:'auto'}} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
