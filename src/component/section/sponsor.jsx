import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import sponsor2 from "../../assets/images/glovo.png";
import sponsor3 from "../../assets/images/mtn.png";
import sponsor1 from "../../assets/images/telecel.png";

const sponsorList = [
  {
    imgUrl: sponsor3,
    imgAlt: "sponsor rajibraj91 rajibraj",
  },
  {
    imgUrl: sponsor2,
    imgAlt: "sponsor rajibraj91 rajibraj",
  },
  {
    imgUrl: sponsor1,
    imgAlt: "sponsor rajibraj91 rajibraj",
  },
  {
    imgUrl: sponsor2,
    imgAlt: "sponsor rajibraj91 rajibraj",
  },
  {
    imgUrl: sponsor1,
    imgAlt: "sponsor rajibraj91 rajibraj",
  },
  {
    imgUrl: sponsor2,
    imgAlt: "sponsor rajibraj91 rajibraj",
  },
];

const Sponsor = () => {
  return (
    <div className="sponsor-section section-bg">
      <div className="container">
        <div className="section-wrapper">
          <div className="sponsor-slider">
            <Swiper
              spaceBetween={20}
              slidesPerView={2}
              loop={"true"}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
              breakpoints={{
                0: {
                  width: 0,
                  slidesPerView: 1,
                },
                768: {
                  width: 768,
                  slidesPerView: 3,
                },
                1200: {
                  width: 1200,
                  slidesPerView: 5.5,
                },
              }}
            >
              {sponsorList.map((val, i) => (
                <SwiperSlide key={i}>
                  <div className="sponsor-iten">
                    <div className="sponsor-thumb">
                      <img
                        style={{ height: "80px" }}
                        src={`${val.imgUrl}`}
                        alt={`${val.imgAlt}`}
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsor;
