import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link } from "react-router-dom";

const Bannar = () => {
    const slides = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      title: "Welcome To Our Website",
      description: "Manage your Assets Smartly",
      buttonText: "Join as HR",
      path: "join-as-manager"
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1493246507139-91e8fad9978e",
      title: "Employee?",
      description: "Create your account or login",
      buttonText: "Join as Employee",
      path: "/join-as-employee"
    },
   
  ];

  return (
    <div className="w-full">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        loop={true}
        className="h-125"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="h-full bg-cover bg-center flex items-center justify-center"
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            >
              <div className="bg-black/50 w-full h-full flex flex-col items-center justify-center text-white text-center px-4">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                  {slide.title}
                </h1>

                <p className="text-lg md:text-xl max-w-2xl">
                  {slide.description}
                </p>

                <Link to={slide.path} className="mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg font-semibold duration-300">
                 {slide.buttonText}
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Bannar;