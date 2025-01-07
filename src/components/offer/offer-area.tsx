import Image from "next/image";
import Link from "next/link";

const offerData = [
  {
    id: 1,
    imgSrc: "/assets/img/rjresorts/dining1.JPG",
    title: "The White Orchid Restaurant",
    discount: "Read More",
    delay: ".3s",
  },
  {
    id: 2,
    imgSrc: "/assets/img/rjresorts/rjresort1.jpeg",
    title: "Sundeck Rooftop Café",
    discount: "Read More",
    delay: ".4s",
  },
];

type IProps = {
  allOffers?: boolean;
};

export default function OfferArea({ allOffers = false }: IProps) {
  const offerItems = allOffers ? offerData : offerData.slice(0, 2);
  return (
    <div
      className={`tp-offer-area pt-60 pb-${allOffers ? '0' : '0'}`}
      style={{ backgroundImage: allOffers ? "none" : "url(/assets/img/offer/offer-bg.jpg)" }}
    >
      <div className="container">
        <div className="row">
          {!allOffers && (
            <div className="col-lg-12">
              <div className="tp-room-title-wrap mb-25">
                <div className="d-flex justify-content-between align-items-end">
                  <div>
                  <h2 className="tp-section-three-title mb-15">Rj Resort Dining</h2>
                  </div>
                  <div className="tp-about-hotel-btn">
                  <a className="tp-btn-4 mb-3" href="#">See More</a>
                </div>
                </div>
              </div>
            </div>
          )}

          {offerItems.map((offer) => (
            <div key={offer.id} className="col-lg-6 col-md-6 col-sm-6 mb-30">
              <div
                className="tp-offer-three-wrap p-relative wow fadeInUp"
                data-wow-delay={offer.delay}
                data-wow-duration="1s"
              >
                <div className="tp-offer-three-thumb">
                  <Image
                    className="w-100"
                    src={offer.imgSrc}
                    alt="offer"
                    width={384}
                    height={440}
                  />
                </div>
                <div className="tp-offer-three-content p-absolute text-center">
                  <h4 className="tp-offer-three-title pb-65">
                    
                    {offer.title }
                    
                  </h4>
                  <Link className="tp-offer-three-btn" href="/contact">
                    {offer.discount}
                  </Link>
                </div>
              </div>
            </div>
          ))}

          {/* {!allOffers && (
            <div className="col-lg-12">
              <div className="tp-offer-discount pt-5 pb-10 text-center">
                <p>
                  <span className="tp-offer-awesome mr-10">AWESOME</span>
                  <span className="discount">Get 20% discount</span>
                  on hotels booking with above websites.
                </p>
              </div>
            </div>
          )} */}
        </div>
      </div>
    </div>
  );
}
