import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { FaPlus } from "react-icons/fa";
import { motion } from "framer-motion";

const SkincareGrid = () => {
  const [dropdown, setDropdown] = useState({ index: null, position: null });
  const [activeDot, setActiveDot] = useState(0);
  const [testimonialDot, setTestimonialDot] = useState(0);

  const swiperRef = useRef(null);
  const testimonialRef = useRef(null);

  const products = [
    { name: "Skin serum foundation", price: "$16.00", image: "/images/card1.webp" },
    { name: "Lipstick", price: "$12.00", image: "/images/card2.webp" },
    { name: "Hair Oil", price: "$8.00", image: "/images/card3.webp" },
    { name: "Face Gel", price: "$14.00", image: "/images/card4.webp" },
    { name: "Face Serum", price: "$20.00", image: "/images/card1.webp" },
  ];

  const testimonials = [
    {
      name: "Marsha mellow",
      role: "Store customer",
      image: "/images/p1.webp",
      review:
        "The point of using is that it has a more or less normal as opposed to using making it look like readable english not only five but also the leap into cosmetic.",
      rating: 5,
    },
    {
      name: "Chris p bacon",
      role: "Interior designer",
      image: "/images/p2.webp",
      review:
        "The point of using is that it has a more or less normal as opposed to using making it look like readable english not only five but also the leap into cosmetic.",
      rating: 4,
    },
    {
      name: "Marsha mellow",
      role: "Store customer",
      image: "/images/p3.webp",
      review:
        "The point of using is that it has a more or less normal as opposed to using making it look like readable english not only five but also the leap into cosmetic.",
      rating: 5,
    },
    {
      name: "Chris p bacon",
      role: "Interior designer",
      image: "/images/p4.webp",
      review:
        "The point of using is that it has a more or less normal as opposed to using making it look like readable english not only five but also the leap into cosmetic.",
      rating: 4,
    },
  ];

  const toggleDropdown = (index, position) => {
    if (dropdown.index === index && dropdown.position === position) {
      setDropdown({ index: null, position: null });
    } else {
      setDropdown({ index, position });
    }
  };

  const handleDotClick = (index, totalSlides, ref, setDot) => {
    const swiper = ref.current?.swiper;
    const groupSize = Math.ceil(totalSlides / 3);
    swiper?.slideTo(index * groupSize);
    setDot(index);
  };

  return (
    <div className="w-full px-4 md:px-16 py-10">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Swiper
          ref={swiperRef}
          modules={[Pagination]}
          spaceBetween={20}
          slidesPerView={2.8}
          initialSlide={1}
          breakpoints={{
            0: { slidesPerView: 1.2, initialSlide: 0 },
            768: { slidesPerView: 2.8, initialSlide: 1 },
          }}
          onSlideChange={(swiper) => {
            const i = Math.floor(swiper.activeIndex / Math.ceil(products.length / 3));
            setActiveDot(i);
          }}
        >
          {products.map((product, index) => (
            <SwiperSlide key={index}>
              <div className="relative bg-white shadow-md overflow-hidden">
                <div className="h-full bg-gray-100 relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                
                  <button
                    onClick={() => toggleDropdown(index, "top")}
                    className="animate-pulseRing absolute top-24 left-24 text-pink-500 bg-white p-1 rounded-full shadow-md hover:bg-pink-300"
                  >
                    <FaPlus />
                  </button>
                  <button
                    onClick={() => toggleDropdown(index, "bottom")}
                    className="animate-pulseRing absolute bottom-12 right-11 text-pink-500 bg-white p-1 rounded-full shadow-md hover:bg-pink-300"
                  >
                    <FaPlus />
                  </button>

                  {dropdown.index === index && (
                    <div
                      className={`absolute z-50 w-64 p-3 bg-white shadow-lg rounded-md transition-all duration-200
                      ${dropdown.position === "top" ? "top-32 left-20" : "bottom-24 right-4"}`}
                    >
                      <div
                        className={`absolute w-4 h-4 bg-white rotate-45 shadow-sm
                        ${dropdown.position === "top" ? "-top-2 left-8" : "-bottom-2 right-8"}`}
                      />
                      <div className="flex items-center space-x-3">
                        <img
                          src={product.image}
                          alt="Detail"
                          className="w-14 h-14 object-cover rounded"
                        />
                        <div>
                          <p className="text-pink-600 font-semibold">{product.name}</p>
                          <p className="text-pink-500">{product.price}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

     
        <div className="mt-4 flex justify-center gap-3">
          {[0, 1, 2].map((dot) => (
            <button
              key={dot}
              onClick={() => handleDotClick(dot, products.length, swiperRef, setActiveDot)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeDot === dot ? "bg-pink-500" : "bg-pink-300"
              }`}
            />
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
        className="mt-20 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-semibold mb-8">Happy client say</h2>

        <Swiper
          ref={testimonialRef}
          modules={[Pagination]}
          spaceBetween={30}
          slidesPerView={1.2}
          breakpoints={{
            768: { slidesPerView: 2 },
          }}
          onSlideChange={(swiper) => {
            const i = Math.floor(swiper.activeIndex / Math.ceil(testimonials.length / 3));
            setTestimonialDot(i);
          }}
        >
          {testimonials.map((client, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col md:flex-row items-start p-6 max-w-3xl mx-auto space-y-4 md:space-y-0 md:space-x-6">
                <img
                  src={client.image}
                  alt={client.name}
                  className="w-32 h-32 object-cover"
                  style={{ borderRadius: "9999px 9999px 0 9999px" }}
                />
                <div className="text-left">
                  <div className="flex space-x-1 text-pink-500 mb-3">
                    {[...Array(client.rating)].map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                    {[...Array(5 - client.rating)].map((_, i) => (
                      <span key={i}>☆</span>
                    ))}
                  </div>
                  <p className="text-gray-600 text-sm mb-3">{client.review}</p>
                  <p>
                    <span className="text-pink-600 font-semibold">{client.name}</span>
                    <span className="text-gray-800 font-semibold"> ~ {client.role}</span>
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="mt-4 flex justify-center gap-3">
          {[0, 1, 2].map((dot) => (
            <button
              key={dot}
              onClick={() => handleDotClick(dot, testimonials.length, testimonialRef, setTestimonialDot)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                testimonialDot === dot ? "bg-pink-500" : "bg-pink-300"
              }`}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default SkincareGrid;
