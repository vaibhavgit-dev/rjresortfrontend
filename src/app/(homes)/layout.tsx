import BackToTop from "@/components/common/back-to-top";
import HeaderThree from "@/components/header/header-main";
import FooterArea from "@/components/footer/footer-area";
import MainProvider from "@/components/provider/main-provider";
import HeaderTopArea from "@/components/header/components/header-top-area";


export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <MainProvider bodyBg="tp-home-3-bg">
            {/* header top area */}
                <HeaderTopArea />
            {/* header top area */}
            <HeaderThree />
            {children}
            <FooterArea style_2={true} top_bg="tp-falured-bg-2"/>
            <BackToTop/>
        </MainProvider>
    )
}
