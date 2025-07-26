// components/StorySection.jsx
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";

const stories = [
  {
    image: "/images/story1.webp",
    date: "06 APR, 2024",
    title:
      "How often do you shop for makeup do you like to pick up an item here and there has?",
    author: "Andrew johns",
  },
  {
    image: "/images/story2.webp",
    date: "06 APR, 2024",
    title:
      "What cosmetic brands have you always wanted to try but cosmetic still haven’t?",
    author: "Andrew johns",
  },
  {
    image: "/images/story3.webp",
    date: "13 MAR, 2024",
    title:
      "Do you belong to any online makeup apply first, concealer foundation communities?",
    author: "Andrew johns",
  },
  {
    image: "/images/story4.webp",
    date: "06 APR, 2024",
    title:
      "How often do you shop for makeup do you like to pick up an item here and there has?",
    author: "Andrew johns",
  },
  {
    image: "/images/story5.webp",
    date: "06 APR, 2024",
    title:
      "What cosmetic brands have you always wanted to try but cosmetic still haven’t?",
    author: "Andrew johns",
  },
  {
    image: "/images/story6.webp",
    date: "13 MAR, 2024",
    title:
      "Do you belong to any online makeup apply first, concealer foundation communities?",
    author: "Andrew johns",
  },
  {
    image: "/images/story7.webp",
    date: "06 APR, 2024",
    title:
      "How often do you shop for makeup do you like to pick up an item here and there has?",
    author: "Andrew johns",
  },
  {
    image: "/images/story8.webp",
    date: "06 APR, 2024",
    title:
      "What cosmetic brands have you always wanted to try but cosmetic still haven’t?",
    author: "Andrew johns",
  },
  {
    image: "/images/story1.webp",
    date: "13 MAR, 2024",
    title:
      "Do you belong to any online makeup apply first, concealer foundation communities?",
    author: "Andrew johns",
  },
];

const StorySection = () => {
  const swiperRef = useRef(null);

  const handleDotClick = (index) => {
    if (swiperRef.current && swiperRef.current.swiper) {
      const swiper = swiperRef.current.swiper;
      const totalSlides = swiper.slides.length;
      const groupSize = Math.ceil(totalSlides / 3); // split into 3 groups
      swiper.slideTo(index * groupSize);
    }
  };

  return (
    <section className="py-12 px-4 md:px-12 lg:px-20 bg-white relative overflow-hidden">
      {/* Heading */}
      <div className="relative mb-10 flex justify-center">
        <motion.h2
          initial={{ y: 80, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center text-gray-800 z-10"
        >
          Latest our story
        </motion.h2>
        <motion.img
          src="/images/story1.webp"
          alt="Background"
          initial={{ scale: 1.2, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 0.15 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="absolute top-[-40px] w-48 h-48 object-cover z-0 blur-md opacity-30"
        />
      </div>

      {/* Swiper */}
      <Swiper
        ref={swiperRef}
        slidesPerView={1}
        spaceBetween={20}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        modules={[Pagination, Autoplay]}
      >
        {stories.map((story, index) => (
          <SwiperSlide key={index}>
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white hover:shadow-xl transition duration-300 rounded-lg"
            >
              {/* Image Hover Effect Only */}
              <div className="overflow-hidden rounded-t-lg">
                <img
                  src={story.image}
                  alt="Story"
                  className="w-full h-64 object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-pink-500 text-sm font-semibold mb-2">
                  {story.date}
                </p>
                <h3 className="text-gray-800 font-semibold mb-3 leading-snug">
                  {story.title}
                </h3>
                <p className="text-gray-500 text-sm mb-4">By {story.author}</p>
                <button className="bg-pink-500 hover:bg-pink-600 text-white px-5 py-2 rounded-md text-sm">
                  READ MORE
                </button>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Pagination Dots (Only 3) */}
      <div className="mt-6 flex justify-center gap-3">
        {[0, 1, 2].map((dotIndex) => (
          <button
            key={dotIndex}
            onClick={() => handleDotClick(dotIndex)}
            className="w-3 h-3 rounded-full bg-gray-300 hover:bg-pink-500 transition-all duration-300"
          />
        ))}
      </div>
    </section>
  );
};


export default StorySection;
