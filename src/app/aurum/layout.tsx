import BackToTop from "@/components/common/back-to-top";
import FooterArea from "@/components/footer/footer-area";
import MainProvider from "@/components/provider/main-provider";
import HeaderTopArea from "@/components/header/components/header-top-area";
import HeaderDefalut from "@/components/header/header-aurum";


export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <MainProvider bodyBg="tp-home-3-bg">
            {/* header top area */}
            <HeaderTopArea />
            {/* header top area */}
            <HeaderDefalut />
            {children}
            <FooterArea style_2={true} top_bg="tp-falured-bg-2"/>
            <BackToTop/>
        </MainProvider>
    )
}
