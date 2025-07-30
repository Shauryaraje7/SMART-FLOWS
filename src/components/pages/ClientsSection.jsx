import React from 'react';
import '../styles/ClientsSection.css';

import K2PartneringSolutions from '../../assets/K2PartneringSolutions.svg';
import Sofrkodetechnologies from '../../assets/Softkode Technologies.svg';
import LirikInfotech from '../../assets/Lirik Infotech.svg';
import Whiddon from '../../assets/Whiddon.svg';
import Dermalogica from '../../assets/dermalogica-logo.svg';
import SoutheastDentalPartners from '../../assets/Southeast Dental Partners.svg';
import LegacyLaneVentures from '../../assets/Legacy_Lane_Ventures-removebg-preview.png';
import Wyndham from '../../assets/Wyndham.svg';
import insightglobal from '../../assets/insightglobal.svg';
import WElogo from '../../assets/WElogo.svg';

export function ClientsSection() {
  const sponsors = [
    { id: 1, logo: K2PartneringSolutions, alt: "K2 Partnering Solutions" },
    { id: 2, logo: Sofrkodetechnologies, alt: "Softkode Technologies" },
    { id: 3, logo: LirikInfotech, alt: "Lirik Infotech" },
    { id: 4, logo: Whiddon, alt: "Whiddon" },
    { id: 5, logo: Dermalogica, alt: "Dermalogica" },
    { id: 6, logo: SoutheastDentalPartners, alt: "Southeast Dental Partners" },
    { id: 7, logo: LegacyLaneVentures, alt: "Legacy Lane Ventures" },
    { id: 8, logo: Wyndham, alt: "Wyndham" },
    { id: 9, logo: insightglobal, alt: "Insight Global" },
    { id: 10, logo: WElogo, alt: "WE Logo" }
  ];

  return (

    <section className="clients-section">
      <div className="section-header-clients">
        <h2 className="section-title-clients">Trusted by <span>Leading Brands</span></h2>
        <p className="section-subtitle-clients">We partner with innovative companies worldwide</p>
      </div>

      <div className="grid-logos-container">
        <div className="grid-logos">
          {sponsors.map((sponsor) => (
            <div key={sponsor.id} className={`grid-logo-item logo-${sponsor.id}`}>
              <img src={sponsor.logo} alt={sponsor.alt} className="logo-image-client" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default ClientsSection;