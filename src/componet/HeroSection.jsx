import React, { useRef, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import Imagesldier from "./Imageslider";

const banners = [
  {
    heading: "Organic care the best skin",
    subheading: "New cosmetic collection 2024",
    discount: "",
    helpline: "(+06) 059 030 095",
    button: "Shop Collection",
    image: "/images/main.webp"
  },
  {
    heading: "Unlock your inner glow",
    subheading: "Enjoy 50% off select items",
    discount: "",
    helpline: "(+06) 059 030 095",
    button: "Shop Collection",
    image: "/images/main2.webp"
  },
  {
    heading: "Uncover the beauty within",
    subheading: "Get 25% Off and shine brighter",
    discount: "",
    helpline: "(+06) 059 030 095",
    button: "Shop Collection",
    image: "/images/main3.webp"
  },
];

const HeroSection = () => {
  const containerRef = useRef(null);
  const [startX, setStartX] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleTouchStart = (e) => {
    setStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    const endX = e.changedTouches[0].clientX;
    const diff = startX - endX;

    if (diff > 30 && currentIndex < banners.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else if (diff < -30 && currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleMouseDown = (e) => {
    setStartX(e.clientX);
  };

  const handleMouseUp = (e) => {
    const endX = e.clientX;
    const diff = startX - endX;

    if (diff > 30 && currentIndex < banners.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else if (diff < -30 && currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        left: currentIndex * window.innerWidth,
        behavior: "smooth",
      });
    }
  }, [currentIndex]);

  return (
    <>
      <motion.div
        className="w-full h-screen overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div
          ref={containerRef}
          className="flex h-full overflow-x-hidden snap-x snap-mandatory touch-pan-x select-none"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          style={{ scrollBehavior: "smooth", userSelect: "none" }}
        >
          {banners.map((banner, index) => (
            <div
              key={index}
              className="relative w-full flex-shrink-0 snap-center"
              style={{ minWidth: "100%", height: "100%" }}
            >
              <img
                src={banner.image}
                alt={`Banner ${index}`}
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
              />
              <div className="absolute top-0 left-0 w-full h-full z-10" />
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="absolute z-20 right-6 md:right-0 top-0 h-full flex flex-col justify-center gap-5 max-w-xl text-gray-700"
              >
                {banner.subheading && (
                  <p className="text-pink-500 text-sm md:text-base mb-2">
                    {banner.subheading}
                  </p>
                )}
                <h1 className="text-4xl md:text-6xl font-bold leading-tight whitespace-pre-line">
                  {banner.heading}
                </h1>
                <p className="mt-6 text-base md:text-lg text-black">
                  Helpline number :{" "}
                  <span className="font-bold underline">{banner.helpline}</span>
                </p>
                <button className="mt-6 w-fit px-6 py-2 bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-md">
                  {banner.button}
                </button>
              </motion.div>
            </div>
          ))}
        </div>
      </motion.div>

      <Imagesldier />
    </>
  );
};

export default HeroSection;
