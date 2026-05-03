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
              <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition duration-300 overflow-hidden">
                <div>
                  <img
                    src={model.image}
                    alt={model.name}
                    className="h-56 w-full object-cover"
                  />
                </div>

                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {model.name}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                    {model.description || "AI Model"}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default HomeSlider;
