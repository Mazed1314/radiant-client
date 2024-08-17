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
          <div className="flex flex-col md:flex-row">
            <div className="md:w-7/12 flex justify-center items-center">
              <img
                src={img_1}
                className="w-[300px] h-[300px] lg:w-[400px] lg:h-[400px]"
              />
            </div>
            <div className="md:w-5/12 my-auto p-2 mx-4">
              <h1 className="text-2xl text-center text-blue-400 lg:text-5xl font-bold [text-shadow:_0_1px_0_rgb(0_0_0_/_80%)]">
                Baby Crib
              </h1>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col md:flex-row">
            <div className="md:w-7/12 flex justify-center items-center">
              <img
                src={img_2}
                className="w-[300px] h-[300px] lg:w-[400px] lg:h-[400px]"
              />
            </div>
            <div className="md:w-5/12 my-auto p-2 mx-4">
              <h1 className="text-2xl text-center text-blue-400 lg:text-5xl font-bold [text-shadow:_0_1px_0_rgb(0_0_0_/_80%)]">
                Gold Necklace
              </h1>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BannerSlider;
