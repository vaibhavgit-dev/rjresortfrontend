import { Metadata } from "next";
import AboutArea from "@/components/about/about-area";
import AmenitiesArea from "@/components/amenities/amenities-area";
import BlogArea from "@/components/blog/blog-area";
import HotelsGalleryArea from "@/components/gallery/hotels-gallery-area";
import HeroBanner from "@/components/hero-banner/hero-banner";
import HotelOfferRoom from "@/components/hotel/hotel-offer-room";
import HotelRooms from "@/components/hotel/hotel-rooms";
import InstagramArea from "@/components/instagram/instagram-area";
import HotelPackagesArea from "@/components/packages/hotel-packages-area";
import TestimonialArea from "@/components/testimonial/testimonial-area";


export const metadata: Metadata = {
  title: "Modern Hotel - Housey Resort and Hotel Next JS Template",
};

export default function HomeModernHotelPage() {
    return (
      <main>
        
        {/* hero banner area */}
        <HeroBanner/>
        {/* hero banner area */}

        {/* amenities area */}
        <AmenitiesArea/>
        {/* amenities area */}

        {/* about area start */}
        <AboutArea/>
        {/* about area end */}

        {/* hotel room */}
        <HotelRooms/>
        {/* hotel room */}

        {/* hotel offer room */}
        <HotelOfferRoom/>
        {/* hotel offer room */}

        {/* hotel gallery */}
        <HotelsGalleryArea/>
        {/* hotel gallery */}

        {/* hotel packages */}
        <HotelPackagesArea/>
        {/* hotel packages */}

        {/* testimonial area */}
        <TestimonialArea/>
        {/* testimonial area */}

        {/* blog area */}
        <BlogArea/>
        {/* blog area */}

        {/* instagram area */}
        <InstagramArea/>
        {/* instagram area */}
        
      </main>
    );
  }
  