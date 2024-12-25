import HeaderTwo from "@/components/header/header-rj";
import BackToTop from "@/components/common/back-to-top";
import FooterTwo from "@/components/footer/footer-two";


export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <HeaderTwo />
            {children}
            <FooterTwo/>
            <BackToTop/>
        </>
    )
}
