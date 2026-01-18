// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// import required modules
// import { Pagination } from "swiper";
import { Autoplay, Pagination } from "swiper/modules";

import testimonials from "./data";
import Testimonial from "./Testimonial";
import "./testimonials.css";

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h2>Education</h2>

      <div className="container">
        <Swiper
  modules={[Pagination]}
  spaceBetween={20}
  slidesPerView={1}
  centeredSlides={true}
  pagination={{ clickable: true }}
  breakpoints={{
    768: {
      slidesPerView: 2,
      centeredSlides: false,
    },
    1024: {
      slidesPerView: 3,
      centeredSlides: false,
    },
  }}
>
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <Testimonial testimonial={testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
