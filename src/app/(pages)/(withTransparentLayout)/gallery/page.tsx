import { Metadata } from "next";
import BreadcrumbArea from "@/components/breadcrumb/breadcrumb-area";
import GalleryArea from "@/components/gallery/gallery-area";
import shape from "@/assets/img/breadcrumb/shape.png";

export const metadata: Metadata = {
  title: "Gallery Page - rj_resort",
};

export default function GalleryPage() {
  return (
    <div>
      {/* breadcrumb area start */}
      <BreadcrumbArea subtitle="Rj Resort" title="Gallery" />
      {/* breadcrumb area end */}
      <div className="">
      <ul
        className="nav nav-pills pt-20 pb-20 justify-content-center gap-2"
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
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="pills-contact-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-contact"
            type="button"
            role="tab"
            aria-controls="pills-contact"
            aria-selected="false"
          >
            Hotels
          </button>
        </li>
      </ul>
      <div className="tp-breadcrumb-title-wrap text-center">
        <div className="tp-breadcrumb-shape">
          <img src="/assets/img/breadcrumb/shape.png" alt="shape"/>
        </div>
      </div>
      <div className="tab-content" id="pills-tabContent">
        <div
          className="tab-pane fade show active"
          id="pills-home"
          role="tabpanel"
          aria-labelledby="pills-home-tab"
          tabindex="0"
        >
          {/* gallery area start */}
          <GalleryArea />
          {/* gallery area end */}
        </div>
        <div
          className="tab-pane fade"
          id="pills-profile"
          role="tabpanel"
          aria-labelledby="pills-profile-tab"
          tabindex="0"
        >
          Gallery-2
        </div>
        <div
          className="tab-pane fade"
          id="pills-contact"
          role="tabpanel"
          aria-labelledby="pills-contact-tab"
          tabindex="0"
        >
          Gallery-3
        </div>
      </div>
      </div>
    </div>
  );
}
