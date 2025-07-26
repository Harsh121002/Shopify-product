import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import {
    FaStar,
    FaSpa,
    FaSoap,
    FaEye,
    FaHeart,
    FaSmile,
} from "react-icons/fa";

const categories = [
    { name: "Nail polish", items: 20, icon: <FaStar size={40} /> },
    { name: "Health cream", items: 20, icon: <FaSpa size={40} /> },
    { name: "Soft sponge", items: 20, icon: <FaSoap size={40} /> },
    { name: "Eyelash 12in", items: 20, icon: <FaEye size={40} /> },
    { name: "Skincare", items: 20, icon: <FaHeart size={40} /> },
    { name: "Lipstick", items: 20, icon: <FaSmile size={40} /> },
    { name: "Nail polish", items: 20, icon: <FaStar size={40} /> },
    { name: "Health cream", items: 20, icon: <FaSpa size={40} /> },
    //   { name: "Soft sponge", items: 20, icon: <FaSoap size={40} /> },

];

export default function CategorySlider() {
    return (
        <section className="py-16 px-4 md:px-10 bg-white text-center cursor-grab">
            <h2 className="text-3xl font-bold text-gray-800 mb-10">Shop by category</h2>

            <Swiper
                slidesPerView={2}
                spaceBetween={20}
                breakpoints={{
                    640: { slidesPerView: 3 },
                    768: { slidesPerView: 4 },
                    1024: { slidesPerView: 6 },
                }}
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                modules={[Autoplay, Pagination]}
                className="w-full
    [&_.swiper-pagination]:mt-10
    [&_.swiper-pagination-bullet]:bg-pink-500 
    [&_.swiper-pagination-bullet-active]:bg-pink-500"
            >
                {categories.map((cat, idx) => (
                    <SwiperSlide key={idx}>
                        <div className="group relative flex flex-col items-center space-y-2 p-4 transition-transform duration-300 hover:scale-105">
                            <div className="text-pink-500">{cat.icon}</div>
                            <p className="text-gray-800 font-medium">{cat.name}</p>

                            {/* Hoverable wrapper */}
                            <div className="relative h-6 overflow-hidden">
                                <p className="text-pink-500 font-semibold text-sm group-hover:translate-y-[-100%] transition-all duration-300">
                                    {cat.items} ITEMS
                                </p>
                                <p className="text-pink-500 font-semibold text-sm absolute top-6 left-0 right-0 group-hover:underline  group-hover:translate-y-[-100%] transition-all duration-300">
                                    ShopNow
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}
