import { Metadata } from "next";
import AboutAreaThree from "@/components/about/about-area-3";
import BenefitArea from "@/components/benefit/benefit-area";
import FaqArea from "@/components/faq/faq-area";
import HotelsGalleryArea from "@/components/gallery/hotels-gallery-area";
import HeroBannerThree from "@/components/hero-banner/hero-banner-3";
import LuxuryHotels from "@/components/hotel/luxury-hotels";
import OfferArea from "@/components/offer/offer-area";
import SearchThree from "@/components/search/search-three";
import ServiceArea from "@/components/service/service-area";
import TextSliderArea from "@/components/text-slider/text-slider-area";
import VideoArea from "@/components/video/video-area";


export const metadata: Metadata = {
  title: "Luxury Hotel - Housey Resort and Hotel Next JS Template",
};

export default function LuxuryHotelPage() {
  return (
    <>

      {/* hero banner area start */}
      <HeroBannerThree/>
      {/* hero banner area end */}

      {/* search area start */}
      {/* <SearchThree/> */}
      {/* search area end */}

      {/* about area start */}
      <AboutAreaThree/>
      {/* about area end */}

      {/* benefit area start */}
      <BenefitArea/>
      {/* benefit area end */}

       {/* service area start */}
      <ServiceArea/>
      {/* service area end */}

      {/* hotel area start */}
      <LuxuryHotels/>
      {/* hotel area end */}

      {/* hotel gallery */}
      <HotelsGalleryArea/>
      {/* hotel gallery */}

      {/* video area start */}
      <VideoArea/>
      {/* video area end */}
      
      {/* text slider area start */}
      <TextSliderArea/>
      {/* text slider area end */}

    </>
  )
}
