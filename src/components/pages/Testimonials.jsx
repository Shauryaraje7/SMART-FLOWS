import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import '../styles/testimonials.css';
import '../styles/Global.css';




// Import your logo images
import WElogo from '../../assets/WElogo.png';
import K2PartneringSolutions from '../../assets/K2PartneringSolutions.webp';
import Sofrkodetechnologies from '../../assets/Softkode Technologies.png';
import LirikInfotech from '../../assets/Lirik Infotech.png';
import Whiddon from '../../assets/Whiddonlogo.png';
import Dermalogica from '../../assets/dermalogica-logo.png';
import SoutheastDentalPartners from '../../assets/Southeast Dental Partners.png';
import LegacyLaneVentures from '../../assets/Legacy Lane Ventures.jpeg';
import Wyndham from '../../assets/Wyndham.webp';
import insightglobal from '../../assets/insightglobal.svg';

const companyLogos = {
  "Whiddon": Whiddon,
  "Dermalogica": Dermalogica,
  "Southeast Dental Partners": SoutheastDentalPartners,
  "Legacy Lane Ventures": LegacyLaneVentures,
  "Wyndham": Wyndham,
  "Insight Global": insightglobal,
  "WorkiFicient": WElogo,
  "K2 Partnering Solutions": K2PartneringSolutions,
  "Softkode Technologies": Sofrkodetechnologies,
  "Lirik Infotech": LirikInfotech
};

const testimonials = [
  {
    id: 1,
    company: "Whiddon",
    url: "https://www.whiddon.com.au/",
    text: "SmartFlows delivered our product on time with zero critical bugs. Their attention to detail is unmatched in the industry.",
    name: "Whiddon Team",
    role: "Healthcare Solutions",
    rating: "★★★★★"
  },
  {
    id: 2,
    company: "Dermalogica",
    url: "https://www.dermalogica.com/",
    text: "From concept to launch, their team demonstrated exceptional creativity and technical prowess. Our users love the final product!",
    name: "Dermalogica Team",
    role: "Skincare Professionals",
    rating: "★★★★★"
  },
  {
    id: 3,
    company: "Southeast Dental Partners",
    url: "https://southeastdentalpartners.com/",
    text: "The UI/UX work exceeded our expectations. The app performs flawlessly across all devices - a rare combination.",
    name: "Southeast Dental Team",
    role: "Dental Healthcare",
    rating: "★★★★★"
  },
  {
    id: 4,
    company: "Legacy Lane Ventures",
    url: "https://www.legacylaneventures.com/",
    text: "Their development approach brought fresh perspective to our project, resulting in innovative features our customers love.",
    name: "Legacy Lane Team",
    role: "Venture Capital",
    rating: "★★★★☆"
  },
  {
    id: 5,
    company: "Wyndham",
    url: "https://corporate.wyndhamhotels.com/",
    text: "Exceptional service and timely delivery. They understood our hospitality needs perfectly.",
    name: "Wyndham Team",
    role: "Hospitality Group",
    rating: "★★★★⯪"
  },
  {
    id: 6,
    company: "Insight Global",
    url: "https://insightglobal.com/",
    text: "The team's technical expertise and problem-solving skills helped us overcome complex challenges.",
    name: "Insight Global Team",
    role: "Staffing Solutions",
    rating: "★★★★⯪"
  },
  {
    id: 7,
    company: "WorkiFicient",
    url: "http://www.workificient.com/",
    text: "Their agile methodology ensured we stayed on track despite changing requirements.",
    name: "WorkiFicient Team",
    role: "Productivity Solutions",
    rating: "★★★★⯪"
  },
  {
    id: 8,
    company: "K2 Partnering Solutions",
    url: "https://k2partnering.com/",
    text: "A true partnership where they invested in understanding our business goals.",
    name: "K2 Partnering Team",
    role: "Technology Consulting",
    rating: "★★★★★"
  },
  {
    id: 9,
    company: "Softkode Technologies",
    url: "http://softkode.io/",
    text: "The quality of code and documentation was outstanding, making future maintenance easy.",
    name: "Softkode Team",
    role: "Tech Solutions",
    rating: "★★★★⯪"
  },
  {
    id: 10,
    company: "Lirik Infotech",
    url: "http://www.lirik.io",
    text: "Their innovative approach helped us differentiate our product in a competitive market.",
    name: "Lirik Infotech Team",
    role: "Technology Services",
    rating: "★★★★★"
  }
];

const TestimonialSlider = () => {
  useEffect(() => {
    const script1 = document.createElement('script');
    script1.type = 'module';
    script1.src = 'https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js';
    document.body.appendChild(script1);

    const script2 = document.createElement('script');
    script2.noModule = true;
    script2.src = 'https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js';
    document.body.appendChild(script2);
  }, []);

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="container">
        <div className="section-header-testimonials">
          <h2 className="section-title-testimonials">Trusted by <span>Innovators</span></h2>
          <p className="section-subtitle-testimonials">Don't just take our word for it - here's what our partners say</p>
        </div>

        <Swiper
          modules={[EffectCoverflow, Pagination, Navigation]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
            slideShadows: false,
          }}
          pagination={{ clickable: true }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          className="testimonial-slider"
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40
            }
          }}
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id} className="testimonial-slide">
              <div className="testimonial-card">
                <div className="card-header  ">
                  <img
                    src={companyLogos[testimonial.company]}
                    alt={testimonial.company}
                    className={`testimonial-logo ${testimonial.company === 'WorkiFicient' ? 'we-logo' : ''}`}
                    loading="lazy"
                  />
                  <div className="quote-icon">"</div>
                </div>
                <p className="testimonial-text">
                  {testimonial.text}
                </p>
                <div className="client-info">
                  <h4 className="client-name  Allh1 ">{testimonial.name}</h4>
                  <span className="client-role Allh1 ">{testimonial.role}, {testimonial.company}</span>
                  <div className="rating">{testimonial.rating}</div>
                </div>
                <a
                  href={testimonial.url}
                  className="company-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${testimonial.company}`}
                >
                  Visit {testimonial.company}
                </a>
              </div>
            </SwiperSlide>
          ))}

          <div className="testimonial-slider-control">
            <div className="swiper-button-prev slider-arrow">
        
            </div>
            <div className="swiper-button-next slider-arrow">
             
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialSlider;