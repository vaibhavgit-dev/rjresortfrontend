import { Metadata } from "next";
import TextSliderArea from "@/components/text-slider/text-slider-area";
import VideoArea from "@/components/video/video-area";
import AboutAreaFour from "@/components/about/about-area-4";
import CounterArea from "@/components/counter/counter-area";
import AboutAreaFive from "@/components/about/about-area-5";
import TeamArea from "@/components/team/team-area";
import BrandArea from "@/components/brand/brand-area";
import AboutAreaTwo from "@/components/about/about-area-2";


export const metadata: Metadata = {
  title: "Luxury Hotel - rj_resort Resort and Hotel Next JS Template",
};

export default function LuxuryHotelPage() {
  return (
    <>

            {/* about area start */}
            <AboutAreaFour />
            {/* about area end */}

            {/* counter area start */}
            <CounterArea />
            {/* counter area end */}

            {/* text slider area start */}
            <TextSliderArea cls='tp-text-spacing' content_2={true} />
            {/* text slider area end */}

            {/* video area start */}
            <VideoArea />
            {/* video area end */}

            {/* hotel about area start */}
            <AboutAreaFive />
            {/* hotel about area end */}

            {/* brand area start */}
            <BrandArea cls='tp-brand-border-2' />
            {/* brand area end */}

    </>
  )
}
