import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useQuery } from "@tanstack/react-query";

const BannerSlider = () => {
  const img_1 =
    "https://www.hatchery.com.sg/cdn/shop/collections/Hatchery-Cribs-babyletto-lolly-white-natural-baby-cot-with-nursing-chair-in-calming-nursery_ce6ea24a-d7ac-468d-8ac5-7e7ba2d105c5.jpg?v=1669187709";
  const img_2 = "https://5.imimg.com/data5/SX/FB/MY-49476835/gold-necklace.jpg";
  const img_3 =
    "https://images.ctfassets.net/6m9bd13t776q/68McpGdDJ9Nk25h3Ozf991/e447f04a5d0c23883a7ed058280b1aad/stroller-guide-hero-Stocksy-6021335.png?q=80";
  const img_4 =
    "https://www.hhaircon.com.au/wp-content/uploads/2020/08/split-system-air-conditioner.jpg";
  const img_5 =
    "https://steelhorseleather.com/cdn/shop/files/Vintage_Leather_Bags_Banner_9af001cf-ef2d-4209-8e0b-c7b3445d1ef9_1920x1011.jpg?v=1642526279";
  return (
    <div className="bg-transparent my-8">
      <Swiper
        modules={[Autoplay, Navigation, Pagination, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <div className="">
            <img src={img_1} className="w-full h-[300px] lg:h-[400px]" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="">
            <img src={img_2} className="w-full h-[300px] lg:h-[400px]" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="">
            <img src={img_3} className="w-full h-[300px] lg:h-[400px]" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="">
            <img src={img_4} className="w-full h-[300px] lg:h-[400px]" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="">
            <img src={img_5} className="w-full h-[300px] lg:h-[400px]" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BannerSlider;
