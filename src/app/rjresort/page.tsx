import { Metadata } from "next";
import TextSliderArea from "@/components/text-slider/text-slider-area";
import VideoArea from "@/components/video/video-area";
import AboutAreaFour from "@/components/about/about-area-4";
import CounterArea from "@/components/counter/counter-area";
import AboutAreaFive from "@/components/about/about-area-5";
import BrandArea from "@/components/brand/brand-area";
import HotelRooms from "@/components/hotel/hotel-rooms";
import GalleryArea from "@/components/gallery/gallery-area";
import OfferArea from "@/components/offer/offer-area";
import ServiceArea from "@/components/service/service-area";
import AmenitiesArea from "@/components/amenities/amenities-area";
import Spa from "@/components/spa/spa";


export const metadata: Metadata = {
  title: "Rj Resort",
};

export default function LuxuryHotelPage() {
  return (
    <>

            {/* about area start */}
            <AboutAreaFour />
            {/* about area end */}
             
            <HotelRooms/>

            {/* hotel about area start */}
            <AboutAreaFive />
            {/* hotel about area end */}
            
            <Spa/>


            <OfferArea/>


            

            {/* video area start */}
            <div className="mt-40"> 
              <VideoArea />
              </div>
            {/* video area end */}

            {/* text slider area start */}
            <TextSliderArea cls='tp-text-spacing' content_2={true} />
            {/* text slider area end */}

            {/* brand area start */}
            {/* <BrandArea cls='tp-brand-border-2' /> */}
            {/* brand area end */}

    </>
  )
}
