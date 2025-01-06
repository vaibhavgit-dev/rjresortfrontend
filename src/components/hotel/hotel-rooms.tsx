import { getModernHotels } from "@/api/hotel";
import HotelSlider from "./hotel-slider";



export default async function HotelRooms() {
   const allHotels =  await getModernHotels();
   return (
      <div className="tp-suites-area pt-60 pb-60 bg-white">
         <div className="container">
            <div className="row">
               <div className="col-lg-12">
                  <div className="tp-section-title-wrapper mb-10 text-left">
                     <div className="d-flex justify-content-between align-items-end">
                        <div>
                        <h6 className="tp-section-three-title-pre wow fadeInUp" data-wow-delay=".3s" data-wow-duration="1s">RJ Resort Suites</h6>
                        <h2 className="tp-about-hotel-title  wow fadeInUp" data-wow-delay=".4s" data-wow-duration="1s">Discover Tranquility in<br /> Our Relax Rooms</h2>
                        </div>
                        <div className="tp-about-hotel-btn">
                  <a className="tp-btn-4 mb-3" href="#">See More</a>
                </div>
                     </div>
                  </div>
               </div>
               <div className="col-lg-12">
                  <HotelSlider hotels={allHotels}/>
               </div>
            </div>
         </div>
      </div>
   )
}
