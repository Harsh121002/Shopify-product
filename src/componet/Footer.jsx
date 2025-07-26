import React, { useState } from "react";
import {
  FaCcVisa,
  FaCcMastercard,
  FaCcAmex,
  FaCcPaypal,
  FaCcDiscover,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Your first makeup item?",
    answer:
      "Honestly I’m not 100% sure about this one, but I can probably guess either lip gloss or mascara one that our cosmetic.",
  },
  {
    question: "Favorite high end brand?",
    answer: "Our customers love brands like Fenty, MAC, and Charlotte Tilbury.",
  },
];

const instaImages = [
  "/images/i1.webp",
  "/images/i2.webp",
  "/images/i3.webp",
  "/images/i4.webp",
  "/images/i5.webp",
  "/images/i6.webp",
  "/images/i7.webp",
  "/images/i8.webp",
];

export default function Footer() {
  const [openIndex, setOpenIndex] = useState(null);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const toggleFAQ = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  const handleSubscribe = () => {
    if (email.trim()) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <footer className="bg-[#f8f4f2] text-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-8">
        {/* FAQs */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Friendly ask questions</h2>
          {faqs.map((faq, i) => (
            <div key={i} className="mb-4 border-b pb-3">
              <button
                onClick={() => toggleFAQ(i)}
                className={`flex justify-between items-center w-full text-left font-semibold ${
                  i === openIndex ? "text-pink-500" : ""
                }`}
              >
                <span>
                  {String(i + 1).padStart(2, "0")}. {faq.question}
                </span>
                <span>{i === openIndex ? "−" : "+"}</span>
              </button>
              <AnimatePresence>
                {i === openIndex && (
                  <motion.p
                    className="mt-2 text-sm text-gray-600"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {faq.answer}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Instagram */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Follow on instagram</h2>
          <div className="grid grid-cols-4 gap-2">
            {instaImages.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`insta-${i}`}
                className="w-full h-20 object-cover rounded"
              />
            ))}
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Subscribe newsletter</h2>
          <p className="text-sm mb-4">
            Subscribe GET 10% discount get e-mail updates about our latest shop
            & special cosmetic offers
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-grow px-4 py-2 rounded-l-md border outline-none"
            />
            <button
              onClick={handleSubscribe}
              className="bg-pink-500 text-white px-4 py-2 rounded-r-md font-semibold"
            >
              SEND NOW
            </button>
          </div>
          {submitted && (
            <p className="text-green-600 text-sm mt-2">Subscribed successfully!</p>
          )}
          <div className="flex  space-x-3 mt-6 text-2xl">
            <FaCcVisa className="text-[#1A1F71]" size={28}  title="Visa" />
      <FaCcMastercard className="text-[#EB001B]" size={28} title="Mastercard" />
      <FaCcAmex className="text-[#2E77BB]" size={28} title="American Express" />
      <FaCcPaypal className="text-[#003087]" size={28} title="PayPal" />
      <FaCcDiscover className="text-[#FF6000]" size={28} title="Discover" />
          </div>
        </div>
      </div>

      {/* Bottom footer */}
      <div className="bg- py-6 border-t mt-8">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center  ">
          <div className="flex items-center space-x-1 font-bold text-3xl ">
             <img src="/images/logo.avif" className="w-28 "/>
          </div>
          <div className="flex flex-wrap gap-4 mt-4 md:mt-0 text-md">
            <a href="#" className="hover:text-pink-500 font-semibold ">About us</a>
            <a href="#" className="hover:text-pink-500 font-semibold ">Contact us</a>
            <a href="#" className="hover:text-pink-500 font-semibold ">Faq's</a>
            <a href="#" className="hover:text-pink-500 font-semibold ">Privacy policy</a>
            <a href="#" className="hover:text-pink-500 font-semibold ">Refund policy</a>
            <a href="#" className="hover:text-pink-500 font-semibold ">Terms & condition</a>
          </div>
        </div>
      </div>
      <div className="mt-4 md:mt-0 flex justify-center bg-white text-gray-500">© 2025 by spacingtech</div>
    </footer>
  );
}
