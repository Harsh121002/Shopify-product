import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FaStar, FaHeart, FaShoppingBag, FaEye } from "react-icons/fa";
import { motion } from "framer-motion";

const products = [
  {
    title: "Gel cream primer",
    price: "$30.00",
    image: "/images/l11.webp",
    hoverImage: "/images/l12.webp",
    colors: ["#d2b48c", "#a0522d", "#8b4513"],
    rating: 4,
    countdownEnd: new Date(Date.now() + 86400000),
  },
  {
    title: "Body liquid illuminator",
    price: "$30.00",
    image: "/images/l21.webp",
    hoverImage: "/images/l22.webp",
    colors: ["#ffc0cb", "#f0d3c8", "#e9a3b0"],
    rating: 3,
    countdownEnd: new Date(Date.now() + 7200000),
  },
  {
    title: "Lipstick",
    price: "$22.00",
    image: "/images/l31.webp",
    hoverImage: "/images/l32.webp",
    colors: ["#3d0c0c", "#a60303", "#d91e18"],
    rating: 5,
    countdownEnd: new Date(Date.now() + 43200000),
  },
  {
    title: "Soft satin lipstick",
    price: "$30.00",
    image: "/images/l41.webp",
    hoverImage: "/images/l42.webp",
    colors: ["#d2a679", "#a05c3b", "#7b3f00"],
    rating: 4,
    countdownEnd: new Date(Date.now() + 18000000),
  },
];

const TimerBox = ({ value, label }) => (
  <div className="text-center px-2">
    <div className="text-sm font-bold">{value}</div>
    <div className="text-[10px] text-gray-500">{label}</div>
  </div>
);

const ProductCard = ({ product }) => {
  const [selectedColor, setSelectedColor] = useState(null);
  const [hover, setHover] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      const difference = new Date(product.countdownEnd) - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / (1000 * 60)) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [product.countdownEnd]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="flex flex-col items-center gap-2"
    >
      <motion.div
        className="bg-white shadow-md overflow-hidden transition group w-full relative"
        whileHover={{ scale: 1.03 }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {hover && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="absolute top-3 right-3 flex flex-col space-y-2 z-10"
          >
            {[FaHeart, FaShoppingBag, FaEye].map((Icon, i) => (
              <motion.button
                key={i}
                className="bg-white p-2 rounded shadow hover:text-pink-500"
                whileTap={{ scale: 0.9 }}
                whileHover={{ rotate: 5 }}
              >
                <Icon />
              </motion.button>
            ))}
          </motion.div>
        )}

        <div className="h-72 w-full flex justify-center items-center">
          <img
            src={hover ? product.hoverImage : product.image}
            alt={product.title}
            className="object-contain h-full transition-transform duration-500"
          />
        </div>

        <div className="p-2">
          <div className="flex justify-center">
            <TimerBox value={timeLeft.days} label="DAY" />
            <TimerBox value={String(timeLeft.hours).padStart(2, "0")} label="HRS" />
            <TimerBox value={String(timeLeft.minutes).padStart(2, "0")} label="MIN" />
            <TimerBox value={String(timeLeft.seconds).padStart(2, "0")} label="SEC" />
          </div>
        </div>
      </motion.div>

      <div className="text-center px-2 py-3">
        <div className="flex justify-center gap-1 mb-1">
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              className={i < product.rating ? "text-yellow-500" : "text-gray-300"}
              size={12}
            />
          ))}
        </div>

        <h3 className="text-gray-800 font-semibold text-sm mb-1">
          {product.title}
        </h3>
        <div className="text-pink-500 font-bold text-sm mb-2">
          {product.price}
        </div>

        <div className="flex justify-center gap-2">
          {product.colors.map((color, index) => (
            <motion.button
              key={index}
              whileTap={{ scale: 0.9 }}
              className={`w-5 h-5 rounded-full border-2 ${
                selectedColor === index ? "border-black scale-110" : "border-gray-300"
              } transition-transform`}
              style={{ backgroundColor: color }}
              onClick={() => setSelectedColor(index)}
            ></motion.button>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default function ProductSlider() {
  const [activeCategory, setActiveCategory] = useState("SOFT BRONZER");

  const categories = ["SOFT BRONZER", "FACE BRUSH", "NAIL POLISH"];

  const handleClick = (category) => {
    setActiveCategory(category);
  };

  return (
    <section className="bg-[#f7f2f2] py-10 px-4">
      <div className="flex items-center justify-between px-6 mx-16 md:px-12 py-6 bg-[#f7f3f2]">
        <h2 className="text-3xl font-bold text-gray-800">Featured products</h2>
        <div className="flex space-x-3 text-sm font-semibold">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleClick(category)}
              className={`px-6 py-2 transition ${
                activeCategory === category
                  ? "bg-pink-500 text-white"
                  : "text-gray-800 hover:text-pink-500"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
        pagination={{ clickable: true }}
        navigation
        modules={[Pagination, Navigation]}
        className="max-w-7xl mx-auto"
      >
        {products.map((product, index) => (
          <SwiperSlide key={index}>
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
