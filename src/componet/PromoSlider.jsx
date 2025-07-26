import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const promoSlides = [
    {
        title: "Beauty a shine",
        button: "BUY NOW",
        image: "/images/beauty1.webp",
        type: "promo",
    },
    {
        title: "Watch now",
        image: "/images/beauty2.webp",
        type: "video",
    },
    {
        title: "Lips for at royal",
        button: "BUY NOW",
        image: "/images/beauty3.webp",
        type: "promo",
    },
];

export default function PromoSlider() {
    return (
        <section className="py-10 bg-white px-4 md:px-10">
            <Swiper
                slidesPerView={1}
                spaceBetween={20}
                breakpoints={{
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
                autoplay={{ delay: 3500, disableOnInteraction: false }}
                modules={[Autoplay]}
                className="w-full"
            >
                {promoSlides.map((slide, idx) => (
                    <SwiperSlide key={idx}>
                        <div
                            className="relative h-72 rounded-xl overflow-hidden shadow-md"
                            style={{
                                backgroundImage: `url(${slide.image})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-white/70 via-white/50 to-transparent p-6 flex flex-col justify-center">
                                {slide.type === "promo" ? (
                                    <>
                                        <h3 className="text-2xl font-bold text-gray-800 mb-4">
                                            {slide.title}
                                        </h3>
                                        <button className="bg-pink-500 text-white px-4 py-2 font-medium rounded hover:bg-pink-600 transition">
                                            {slide.button}
                                        </button>
                                    </>
                                ) : (
                                    <div className="flex flex-col items-center justify-center h-full text-center">
                                        <a
                                            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="bg-white p-4 rounded-full shadow-md mb-4 hover:scale-105 transition-transform"
                                        >
                                            <svg className="w-6 h-6 text-pink-500" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M8 5v14l11-7z" />
                                            </svg>
                                        </a>

                                        <p className="text-white text-xl font-bold">{slide.title}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}
