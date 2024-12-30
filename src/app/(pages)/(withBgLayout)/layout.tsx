import BackToTop from "@/components/common/back-to-top";
import FooterArea from "@/components/footer/footer-area";
import Headerdefault from "@/components/header/header-default";
import MainProvider from "@/components/provider/main-provider";


export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <MainProvider>
            <Headerdefault />
            {children}
            <FooterArea style_2={true} top_bg="tp-falured-bg-2"/>
            <BackToTop/>
        </MainProvider>
    )
}
