const contactItemData = [
    {
      id: 1,
      icon: "fa-sharp fa-solid fa-phone",
      title: "Phone",
      content: (
        <span>
          Darjeeling <a href="tel:+913542254411">+91 354-2254411</a><br />
          Siliguri <a href="tel:+917602169903">+91 7602169903</a>
        </span>
      ),
    },
    {
      id: 2,
      icon: "fa-regular fa-envelope",
      title: "Email",
      content: <a href="#">support@rjresort.com</a>,
    },
    {
      id: 3,
      icon: "fa-sharp fa-regular fa-location-dot",
      title: "Locations",
      content: (
        <span>Darjeeling: <a href="https://maps.app.goo.gl/zX7DNRXNCPhDeysz9">
        The "Mall" Opp Governor House 
      </a><br /><br />
      Siliguri: <a href="https://maps.app.goo.gl/t8u1i4kzUpohXd699">
      NH 31 Bagdogra Behind Gateway Ford 
      </a>
      </span>
        
      ),
    },
  ];
  
  export default function ContactItemArea() {
    return (
      <div className="tp-contact-item-area">
        <div className="container container-1430">
          <div className="tp-contact-bg">
            <div className="row">
              <div className="col-lg-12">
                <div className="tp-contact-content mb-35 text-center">
                  <span className="tp-contact-subtitle tp-contact-subtitle-2 mb-20">
                    Contact Us
                  </span>
                  <h2 className="tp-contact-title tp-contact-title-2">
                    Leave our team a message.
                  </h2>
                </div>
              </div>
              {contactItemData.map((item) => (
                <div key={item.id} className="col-lg-4 col-md-6">
                  <div className="tp-contact-item mb-40">
                    <span className="tp-contact-icon">
                      <i className={item.icon}></i>
                    </span>
                    <div className="tp-contact-text">
                      <h5>{item.title}</h5>
                      {item.content}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
  