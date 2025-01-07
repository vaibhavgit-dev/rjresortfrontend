import { Metadata } from "next";
import BreadcrumbArea from "@/components/breadcrumb/breadcrumb-area";
import GalleryArea from "@/components/gallery/gallery-area";
import GalleryAreaAurum from "@/components/gallery/gallery-area-aurum";

export const metadata: Metadata = {
  title: "Gallery - RJ Resort",
};

export default function GalleryPage() {
  return (
    <div>
      {/* Breadcrumb Area */}
      <BreadcrumbArea title="Gallery" />

      {/* Tab Navigation */}
      <div className="pt-20 pb-20">
        <ul
          className="nav nav-pills justify-content-center gap-2"
          id="pills-tab"
          role="tablist"
        >
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active"
              id="pills-home-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-home"
              type="button"
              role="tab"
              aria-controls="pills-home"
              aria-selected="true"
            >
              RJ Resort
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="pills-profile-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-profile"
              type="button"
              role="tab"
              aria-controls="pills-profile"
              aria-selected="false"
            >
              Aurum
            </button>
          </li>
        </ul>

        {/* Shape Below Tabs */}
        <div className="tp-breadcrumb-title-wrap text-center">
          <div className="tp-breadcrumb-shape">
            <img src="/assets/img/breadcrumb/shape.png" alt="Shape" />
          </div>
        </div>

        {/* Tab Content with Fix */}
        <div className="tab-content" id="pills-tabContent">
          <div
            className="tab-pane fade show active"
            id="pills-home"
            role="tabpanel"
            aria-labelledby="pills-home-tab"
            style={{ minHeight: "300px", padding: "20px" }} // Maintain consistent space
          >
            {/* Gallery Area - RJ Resort */}
            <GalleryArea />
          </div>
          <div
            className="tab-pane fade"
            id="pills-profile"
            role="tabpanel"
            aria-labelledby="pills-profile-tab"
            style={{ minHeight: "300px", padding: "20px" }} // Maintain consistent space
          >
            {/* Gallery Area - Aurum */}
            <GalleryAreaAurum />
          </div>
        </div>
      </div>
    </div>
  );
}
