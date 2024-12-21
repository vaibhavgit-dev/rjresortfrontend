import Link from "next/link";
import Image from "next/image";
import logo from '@/assets/img/logo/logo-white.png';
import logo_2 from '@/assets/img/logo/logo3.png';
import { UpArrow, XSvg } from "../svg";

type IProps = {
   top_bg?: string;
   style_2?:boolean;
}

export default function FooterArea({top_bg='tp-pink-bg',style_2}: IProps) {
  return (
    <footer>
         <div className={`tp-footer-area ${top_bg} pt-50`}>
            <div className="container mb-50">
               <div className="row">
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                  <div className="tp-footer-logo mb-25 d-grid justify-content-center">
                           <Link href="/">
                             <Image style={{width:"200px",height:'auto'}} src={style_2?logo_2:logo} alt="logo"/>
                           </Link>
                        </div>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                     <div className={`tp-footer-widget mb-60 ${style_2?'tp-footer-widget-3':''}`}>
                        <div className="tp-footer-widget-content">
                           <div className={`tp-footer-location mb-20 ${style_2?'tp-footer-location-3':''}`}>
                              <a href="https://www.google.com/maps/@41.6758525,-86.2531698,18.17z">84 N. Hill Field St.Scarsdale, NY 10583</a>
                           </div>
                           <div className={`tp-footer-number mb-15 ${style_2?'tp-footer-number-3':''}`}>
                              <span className={`tp-footer-call-title ${style_2?'tp-footer-call-title-3':''}`}>Call For Reservations</span>
                              <a href="tel:+(62)43502476" className="tp-footer-call">+(62) 4350 2476</a>
                           </div>
                           <div className={`tp-footer-btn ${style_2?'tp-footer-btn-3':''}`}>
                              <a href="#">View Map
                                 <span>
                                    <UpArrow/>
                                 </span>
                              </a>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                     <div className={`tp-footer-widget mb-60 ${style_2?'tp-footer-widget-3':''}`}>
                        <h3 className={`tp-footer-widget-title mb-25 ${style_2?'tp-footer-widget-title-3':''}`}>Quick Links</h3>
                        <div className="row">
                           <div className="col-lg-12 col-md-12">
                              <div className={`tp-footer-widget-content ${style_2?'tp-footer-widget-content-3':''}`}>
                                 <ul>
                                    <li><a href="#">About Us</a></li>
                                    <li><a href="#">Careers</a></li>
                                    <li><a href="#">Gallery</a></li>
                                    <li><a href="#">Contact Us</a></li>
                                 </ul>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                     <div className={`tp-footer-widget mb-60 ${style_2?'tp-footer-widget-3':''}`}>
                        <h3 className={`tp-footer-widget-title mb-25 ${style_2?'tp-footer-widget-title-3':''}`}>Booking</h3>
                        <div className="row">
                           <div className="col-lg-12 col-md-12">
                              <div className={`tp-footer-widget-content ${style_2?'tp-footer-widget-content-3':''}`}>
                                 <ul>
                                    <li><a href="#">Book RJ Resort</a></li>
                                    <li><a href="#">Book Aurom</a></li>
                                 </ul>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className={`col-xl-3 col-lg-3 col-md-6 ${style_2?'col-sm-8 mb-60':''}`}>
                     <div className={`tp-footer-widget ${style_2?'tp-footer-widget-3':'tp-footer-widget-space mb-60'}`}>
                        <h3 className="tp-footer-widget-title mb-15">Don’t miss<br/> Our Latest Updated</h3>
                        <p className={`tp-footer-widget-para ${style_2?'tp-footer-widget-para-3':''} mb-10`}>Sign up to our newsletter for exclusive offers.</p>
                        <div className="tp-footer-form mb-20">
                           <form action="#">
                              <div className={`tp-footer-input ${style_2?'tp-footer-input-3':''} p-relative`}>
                                 <input type="email" placeholder="E-mail"/>
                                 <button type="button" className={`tp-footer-input-btn ${style_2?'tp-footer-input-btn-3':''} p-absolute`}>Subscribe</button>
                              </div>
                           </form>
                        </div>
                        <div className="tp-footer-social">
                           <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                           <a href="#"><i className="fa-brands fa-twitter"></i></a>
                           <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                           <a href="#"><XSvg/></a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="tp-footer-botom">
               <div className="container">
                  <div className="tp-footer-bottom-inner">
                     <div className="row">
                        <div className="col-sm-6">
                           <div className={`tp-footer-copyright ${style_2?'tp-footer-copyright-3':''}`}>
                              <p>Copyright © {new Date().getFullYear()} <a href="#">RJ Resort</a>. All Rights Reserved.</p>
                           </div>
                        </div>
                        <div className="col-sm-6">
                           <div className={`tp-footer-develop tp-footer-copyright ${style_2?'tp-footer-copyright-3':''} text-right`}>
                              <ul className="d-flex gap-3 justify-content-end" style={{listStyle: 'none'}}>
                                 <li><a href="#">Terms of servicres</a></li>
                                 <li><a href="#">Privacy Policy</a></li>
                                 <li><a href="#">FAQs</a></li>
                              </ul>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </footer>
  )
}
