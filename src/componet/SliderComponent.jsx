import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { FaPlay, FaTimes } from "react-icons/fa";

const slides = [
  {
    type: "image",
    img: "/images/beauty1.webp",
    title: "Beauty a shine",
    btn: "BUY NOW",
  },
  {
    type: "video",
    img: "/images/beauty2.webp",
    title: "Watch now",
    videoUrl: "https://www.youtube.com/embed/CF08u1qeHQ8",
  },
  {
    type: "image",
    img: "/images/beauty3.webp",
    title: "Lips for at royal",
    btn: "BUY NOW",
  },
];

export default function SliderComponent() {
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <div className="relative px-6 py-12">
      {/* Slider */}
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{ clickable: true }}
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="pb-12"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div className="relative overflow-hidden shadow-md group">
              <img
                src={slide.img}
                alt={slide.title}
                className="w-full h-full object-cover"
              />

              {/* Video Slide */}
              {slide.type === "video" ? (
                <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col items-center justify-center text-white">
                  <button
                    onClick={() => setActiveVideo(slide.videoUrl)}
                    className="bg-white text-pink-500 p-4 rounded-full hover:scale-110 transition"
                  >
                    <FaPlay />
                  </button>
                  <p className="text-xl font-bold mt-4">{slide.title}</p>
                </div>
              ) : (
                <div
                  className={`absolute inset-0 flex flex-col justify-center ${
                    i === 0
                      ? "items-end text-right pr-6"
                      : "items-start text-left p-6"
                  }`}
                >
                  <h3 className="text-gray-800 text-4xl font-bold mb-4 leading-tight">
                    {slide.title.includes(" ") ? (
                      <>
                        {slide.title.split(" ")[0]} <br />{" "}
                        {slide.title.split(" ").slice(1).join(" ")}
                      </>
                    ) : (
                      slide.title
                    )}
                  </h3>

                  <button
                    // onClick={() =>
                    //   window.open("https://youtu.be/CF08u1qeHQ8", "_blank")
                    // }
                    className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 text-sm font-semibold rounded transition-all duration-300"
                  >
                    {slide.btn}
                  </button>
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Video Popup Overlay */}
      {activeVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center">
          <div className="relative w-[90%] max-w-4xl">
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute -top-4 -right-4 bg-white text-black rounded-full p-2 shadow-md hover:rotate-90 transition"
            >
              <FaTimes size={20} />
            </button>
            <div className="aspect-video w-full">
              <iframe
                src={activeVideo}
                title="video"
                className="w-full h-full rounded-lg"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
