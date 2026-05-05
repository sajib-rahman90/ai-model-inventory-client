import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const HomeSlider = () => {
  const [models, setModels] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/random-models")
      .then((res) => res.json())
      .then((data) => setModels(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className=" py-14">
      <div className="max-w-7xl mx-auto px-4">
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          loop={models.length > 3}
          navigation
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          speed={800}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {models.map((model) => (
            <SwiperSlide key={model._id}>
              <div className="relative h-80 w-full rounded-2xl overflow-hidden group cursor-pointer">
                <img
                  src={model.image}
                  alt={model.name}
                  className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-linear-to-t from-gray-800 via-black/40 to-transparent"></div>

                <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 text-white">
                  <h2 className="text-2xl md:text-3xl font-bold tracking-wide">
                    {model.name}
                  </h2>

                  <p className="mt-2 text-sm md:text-base opacity-90">
                    {model.framework || "AI Framework"}
                  </p>
                </div>

                <div className="absolute bottom-0 left-0 w-0 h-1 bg-white group-hover:w-full transition-all duration-500"></div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default HomeSlider;
