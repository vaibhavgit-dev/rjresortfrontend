import BackToTop from "@/components/common/back-to-top";
import FooterArea from "@/components/footer/footer-area";
import HeaderDefalut from "@/components/header/header-aurum";
import MainProvider from "@/components/provider/main-provider";


export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <MainProvider>
            <HeaderDefalut/>
            {children}
            <FooterArea/>
            <BackToTop/>
        </MainProvider>
    )
}
