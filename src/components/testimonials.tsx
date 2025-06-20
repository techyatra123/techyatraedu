"use client";

import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import { motion } from "framer-motion";
const testimonials = [
  {
    name: "Sushmita Gurung",
    message:
      "Techyatra has been my favorite IT consulting institution since 2024. I have been mesmerised by the services provided by Tech yatra.",
    image: "/testimonialsImage/female.jpg",
  },
  {
    name: "Ajay Yadav",
    message:
      "Techyatra has been my favorite IT consulting institution since 2024. I have been mesmerised by the services provided by Tech yatra.",
    image: "/testimonialsImage/male.jpg",
  },
  {
    name: "Sushant KC",
    message:
      "Techyatra has been my favorite IT consulting institution since 2024. I have been mesmerised by the services provided by Tech yatra.",
    image: "/testimonialsImage/male.jpg",
  },
  {
    name: "Sandhya Pokhrel",
    message:
      "Techyatra has been my favorite IT consulting institution since 2024. I have been mesmerised by the services provided by Tech yatra.",
    image: "/testimonialsImage/female.jpg",
  },
  {
    name: "Sandhya Pokhrel",
    message:
      "Techyatra has been my favorite IT consulting institution since 2024. I have been mesmerised by the services provided by Tech yatra.",
    image: "/testimonialsImage/female.jpg",
  },
];

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.3 }}
      viewport={{ once: true }}
    >
      <section className="bg-gradient-to-b from-[#3a0ca3] to-[#f5d0fe] py-16 px-4 sm:px-6 lg:px-20 text-white">
        <div className="max-w-7xl mx-auto ">
          <p className="text-sm text-purple-200 mb-2">Testimonials</p>
          <div className=" flex justify-between flex-row  mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold mb-12">
              What people have to say about Techyatra Edu
            </h2>
            <div className="flex justify-center mt-10 gap-4">
              <button
                onClick={() => scroll("left")}
                className="bg-white text-black p-2 cursor-pointer rounded-full shadow-md hover:bg-gray-200"
              >
                <ChevronLeft className="w-6 h-5" />
              </button>
              <button
                onClick={() => scroll("right")}
                className="bg-white text-black p-2  cursor-pointer rounded-full shadow-md hover:bg-gray-200"
              >
                <ChevronRight className="w-6 h-5" />
              </button>
            </div>
          </div>

          <div className="relative">
            <div
              ref={scrollRef}
              className="flex gap-6 h-[320px] overflow-x-auto scrollbar-hide scroll-smooth px-2"
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="relative flex-shrink-0 w-[280px] sm:w-[300px] rounded-2xl overflow-hidden shadow-lg bg-black/30 backdrop-blur-sm"
                >
                  <div className="relative h-64 w-full">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div className="absolute  bottom-0 left-0 right-0 p-4  text-white bg-gradient-to-b from-[#0f0e176a] to-[#000000ef]">
                    <div className="flex gap-1 mb-2 justify-center">
                      {Array(5)
                        .fill(null)
                        .map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 text-yellow-400 fill-yellow-400"
                          />
                        ))}
                    </div>
                    <h3 className="font-semibold text-lg">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm mt-1">{testimonial.message}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
