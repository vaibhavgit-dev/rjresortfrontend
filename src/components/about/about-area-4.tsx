import Image from "next/image";
import shape from '@/assets/img/about/about-4/shape.png';
import brand from '@/assets/img/about/about-4/brand.png';
import ab_img_2 from '@/assets/img/about/about-4/thumb.jpg';
import rotate_shape from '@/assets/img/about/about-4/yers.png';
import shape_2 from '@/assets/img/about/about-4/shape-2.png';
import user_img from '@/assets/img/about/about-4/user.png';

export default function AboutAreaFour() {
    return (
        <>
            {/* about top */}
            <div className="tp-about-top-area fix pt-50">
                <div className="container">
                    <div className="tp-about-top-inner pb-60 d-none">
                        <div className="row align-items-end">
                            <div className="col-lg-8">
                                <div className="tp-about-top-content mb-50">
                                    <h6 className="tp-about-top-subtitle"><span></span> About Rj Resort</h6>
                                    <h2 className="tp-about-top-title">Building your success through our unique <span>story.</span></h2>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="tp-about-top-logo-content">
                                    <div className="tp-about-top-logo mb-30 p-relative">
                                        <Image className="rotate-infinite-2" src={shape} alt="shape" />
                                        <Image className="shape" src={brand} alt="brand" />
                                    </div>
                                    <p>Welcome to RJ Resort city hotel Times
                                        Square, a luxury apartments on
                                        exciting coastline.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* about top */}

            {/* about big thumb */}
            <div className="tp-about-big-thumb jarallax fix p-relative d-none">
                <img className="w-100" src="/assets/img/rjresorts/rjresort1.jpeg" alt="thumb" style={{ height: 'auto' }} />
            </div>
            {/* about big thumb */}

            {/* about bottom */}
            <div className="tp-about-area pt-0 fix pb-0">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-10">
                            <div className="tp-about-top-content mb-70">
                                <h6 className="tp-section-three-title-pre"><span></span> About Rj Resort</h6>
                                <h2 className="tp-about-top-title tp-about-top-title-2">An intimate retreat in <span>Darjeeling’s<br /></span>most iconic address.</h2>
                            </div>
                        </div>
                        <div className="col-lg-2 d-none d-lg-block">
                            <div className="tp-about-4-shape mb-70 text-right">
                                <Image src={shape_2} alt="shape" />
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="tp-about-4-thumb p-relative mb-40">
                                <img className="w-100" src="/assets/img/rjresorts/rjresort1.jpeg" alt="thumb" style={{ height: 'auto' }} />
                                <div className="tp-about-4-expreance">
                                    <div className="p-relative">
                                        <Image className="rotate-infinite" src={rotate_shape} alt="year" />
                                        <div className="tp-about-4-expreance-content text-center">
                                            <span className="year d-block mb-10">
                                            Situated 
                                            </span>
                                            <span className="tp-about-4-expreance-year">on the iconic <br /> "Mall Road"</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="tp-about-4-content mb-40">
                                <p className="mb-15">Nestled on the historic Mall Road and built with the same passion and care as our own home, RJ Resorts Darjeeling is more than a hotel—it’s a story of dedication passed through generations. Opposite the Governor’s House, our boutique property combines warmth, comfort, and attention to detail, offering guests a serene retreat in one of Darjeeling’s most prestigious neighborhoods. </p>
                                <p>Every corner of RJ Resorts reflects our family’s unwavering commitment to hospitality, ensuring that each guest feels cared for and valued. Whether you’re here for a serene getaway, a family escape, or an intimate celebration, RJ Resorts is your gateway to a refined hill station experience.</p>
                                <div className="tp-about-4-client-wrap d-none">
                                    <div className="tp-about-4-client-img mb-10">
                                        <Image src={user_img} alt="user" />
                                    </div>
                                    <div className="tp-about-4-client-review mb-10">
                                        <p><span>3256+</span><br /> Client-Reviews</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* about bottom */}
        </>
    )
}
