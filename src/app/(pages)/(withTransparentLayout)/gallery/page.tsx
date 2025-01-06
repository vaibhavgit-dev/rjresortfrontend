import { Metadata } from "next";
import BreadcrumbArea from "@/components/breadcrumb/breadcrumb-area";
import GalleryArea from "@/components/gallery/gallery-area";

export const metadata: Metadata = {
    title: "Gallery Page - rj_resort",
}

export default function GalleryPage() {
    return (
        <div>

            {/* breadcrumb area start */}
            <BreadcrumbArea subtitle="Rj Resort" title="Gallery" />
            {/* breadcrumb area end */}

            {/* gallery area start */}
            <GalleryArea />
            {/* gallery area end */}
        </div>
    )
}
