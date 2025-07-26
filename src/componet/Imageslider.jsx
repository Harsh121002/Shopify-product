import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const Imagesldier = () => {
    const containerRef = useRef(null);
    const [dividerX, setDividerX] = useState(50);
    const [dragging, setDragging] = useState(false);

    const startDrag = () => setDragging(true);
    const stopDrag = () => setDragging(false);

    const onDrag = (e) => {
        if (!dragging) return;
        const container = containerRef.current;
        if (!container) return;

        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const bounds = container.getBoundingClientRect();
        const newX = ((clientX - bounds.left) / bounds.width) * 100;
        setDividerX(Math.min(100, Math.max(0, newX)));
    };

    useEffect(() => {
        if (dragging) {
            window.addEventListener("mousemove", onDrag);
            window.addEventListener("mouseup", stopDrag);
            window.addEventListener("touchmove", onDrag);
            window.addEventListener("touchend", stopDrag);
        } else {
            window.removeEventListener("mousemove", onDrag);
            window.removeEventListener("mouseup", stopDrag);
            window.removeEventListener("touchmove", onDrag);
            window.removeEventListener("touchend", stopDrag);
        }

        return () => {
            window.removeEventListener("mousemove", onDrag);
            window.removeEventListener("mouseup", stopDrag);
            window.removeEventListener("touchmove", onDrag);
            window.removeEventListener("touchend", stopDrag);
        };
    }, [dragging]);

    return (
        <section className="w-full flex flex-col md:flex-row items-center justify-between px-6 py-24 bg-[#fdf9f9]">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="md:w-2/3 max-w-2xl mb-10 ml-24 md:mb-0 text-center md:text-left"
            >
                <h2 className="text-4xl md:text-5xl font-semibold text-gray-700 mb-4">
                    Since <span className="text-pink-500">2023</span><span className="font-normal text-3xl text-gray-700"> / Since 2024</span>
                </h2>
                <p className="text-gray-600 text-sm mb-6">
                    The point of using is that it has a more-or-less normal letters, as opposed to using making it look like readable English survived not only five but also the leap into electronic.
                </p>
                <p className="text-gray-600 text-sm mb-6">
                    The point of using is that it has a more-or-less normal letters, as opposed to using making it look like readable English survived not only five but also the leap into electronic.
                </p>

                <div className="flex flex-col md:flex-row gap-6 mb-6">
                    <div className="flex items-start gap-3">
                        <img src="/images/facemask.avif" alt="face" className="w-6 h-6 text-pink-500" />
                        <div>
                            <p className="font-semibold text-gray-800">Face makeup</p>
                            <p className="text-sm text-gray-600">It uses a dictionary of over</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <img src="/images/tube.avif" alt="face" className="w-6 h-6 text-pink-500" />
                        <div>
                            <p className="font-semibold text-gray-800">Face makeup</p>
                            <p className="text-sm text-gray-600">It uses a dictionary of over</p>
                        </div>
                    </div>
                </div>

                <button className="px-5 mt-4 py-2 bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-md">
                    ABOUT STORY
                </button>
            </motion.div>

            <motion.div
                ref={containerRef}
                className="absolute right-6  md:w-1/3 w-full h-[550px] overflow-hidden mr-12"
                style={{ scrollBehavior: "smooth", userSelect: "none" }}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <div
                    className="absolute top-0 left-0 h-full overflow-hidden transition-all duration-300 ease-in-out"
                    style={{ width: `${dividerX}%`, zIndex: 20 }}
                >
                    <img
                        src="/images/i1.webp"
                        alt="Left"
                        className="w-full h-full object-cover"
                    />
                </div>

                <div
                    className="absolute top-0 right-0 h-full overflow-hidden transition-all duration-300 ease-in-out"
                    style={{ width: `${100 - dividerX}%`, zIndex: 10 }}
                >
                    <img
                        src="/images/i2.webp"
                        alt="Right"
                        className="w-full h-full object-cover"
                    />
                </div>

                <img
                    src="/images/orange.jpg"
                    alt="Sticker"
                    className="absolute bottom-4 -left-4 z-50 w-16 h-16 object-contain rounded"
                />

                <div
                    className="absolute top-0 h-full w-1 bg-white z-30 cursor-ew-resize"
                    style={{ left: `${dividerX}%` }}
                    onMouseDown={startDrag}
                    onTouchStart={startDrag}
                />

                <div
                    className="absolute top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow z-40 cursor-ew-resize"
                    style={{ left: `calc(${dividerX}% - 16px)` }}
                    onMouseDown={startDrag}
                    onTouchStart={startDrag}
                >
                    <div className="w-4 h-4 bg-black rounded-full" />
                </div>
            </motion.div>
        </section>
    );
};

export default Imagesldier;