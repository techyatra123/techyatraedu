"use client";

import Image from "next/image";
import { motion } from "framer-motion";
export default function JoinSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.3 }}
    >
      <section className="bg-gradient-to-b from-[#5340f7] to-[#2b44e4b0]  text-white py-10 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10">
          <div className="flex-1 text-center md:text-left">
            <p className="text-sm md:text-base font-medium mb-2">Join us</p>
            <h2 className="text-2xl md:text-3xl font-semibold leading-snug">
              Connect with us and explore your preferred
              <span className="text-white"> courses, colleges and scopes</span>
            </h2>
            <p className="text-md mt-4 max-w-md mx-auto md:mx-0">
              Explore Nepal’s schools, colleges, and educational paths —
              empowering students with knowledge to make informed and confident
              future choices.
            </p>
          </div>

          <div className="flex-1 flex justify-center">
            <Image
              src="/svgs/joinus.svg"
              alt="Join Us Illustration"
              width={400}
              height={100}
              className="w-full h-auto max-w-md md:max-w-lg"
            />
          </div>
        </div>
      </section>
    </motion.div>
  );
}
