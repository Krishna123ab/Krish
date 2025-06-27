import {useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Import images
import img5 from "../assets/WhatsApp Image 2025-03-27 at 16.39.45_aeae9c8d.jpg";
import img1 from "../assets/WhatsApp Image 2025-03-27 at 16.39.44_5564fb0a.jpg";
import img2 from "../assets/WhatsApp Image 2025-03-27 at 16.39.44_6bf142e2.jpg";
import img3 from "../assets/WhatsApp Image 2025-03-27 at 16.46.13_08874163.jpg";
import img4 from "../assets/WhatsApp Image 2025-03-27 at 16.39.43_e6cf3bad.jpg";

const images = [img4,img2, img1,img5];

export const Demo = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="mb-5 px-10">
      <h1 className="text-3xl lm:text-3xl bg-gradient-to-r from-[red] to-[black]  text-transparent bg-clip-text font-bold text-center mt-28 mb-14">Screenshots of App</h1>

      {/* Swiper Slider */}
      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        loop={true}
        navigation={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        className="mySwiper"
        speed={1050}
        modules={[Navigation, Pagination, Autoplay]}  
        breakpoints={{
          2200: { slidesPerView: 4 },
          1025: { slidesPerView: 3 },
          880: { slidesPerView: 2 },
          600: { slidesPerView: 2 },
          486:{slidesPerView:1},
          405:{slidesPerView:1},
          370:{slidesPerView:1},
          320:{slidesPerView:1}
        }}
      >
        {images.map((img, index) => (
          <SwiperSlide key={index} onClick={() => setIsModalOpen(true)}>
            <img
              src={img}
              alt={`img${index + 1}`}
              className="w-full border-[1.4px] border-zinc-300 h-96 object-contain rounded-lg shadow-md cursor-pointer"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Fullscreen Modal with Swiper */}
      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black/60 backdrop-blur-md bg-opacity-80 z-50">
          <div className="relative w-full max-w-6xl">
            {/* Close Button */}
            <button
              className="absolute -top-10 right-3 bg-white text-black w-8 h-8 rounded-full text-xl z-50"
              onClick={() => setIsModalOpen(false)}
            >
              ✖
            </button>

            {/* Fullscreen Swiper with 3 images per view */}
            <Swiper
              slidesPerView={3}
              spaceBetween={20}
              loop={true}
              navigation={true}
              pagination={{ clickable: true }}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              speed={1050}
              className="mySwiper"
              modules={[Navigation, Pagination, Autoplay]}
              breakpoints={{
          2200: { slidesPerView: 4 },
          1025: { slidesPerView: 3 },
          880: { slidesPerView: 2 },
          600: { slidesPerView: 2 },
          486:{slidesPerView:1},
          405:{slidesPerView:1},
          370:{slidesPerView:1},
          320:{slidesPerView:1}
        }}
            >
              {images.map((img, index) => (
                <SwiperSlide key={index} onClick={() => setSelectedImage(img)}>
                  <img
                    src={img}
                    alt={`fullscreen-img${index + 1}`}
                    className="w-full h-[80vh] object-contain cursor-pointer"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}

      {/* Zoomed Fullscreen Image */}
      {selectedImage && (
        <div
          className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-90 z-50"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Zoomed"
            className="max-w-full max-h-full object-contain"
          />
        </div>
      )}
    </div>
  );
};
