"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export interface EventItem {
  title: string;
  image: string;
}

interface HorizontalScrollingEventsProps {
  events: EventItem[];
  speed: number;
}

export default function HorizontalScrollingEvents({
  events,
  speed,
}: HorizontalScrollingEventsProps) {
  const duplicatedEvents = [...events, ...events, ...events];

  return (
    <div className="relative overflow-hidden my-8 px-7 md:mx-[120px]">
      <motion.div
        className="flex"
        initial={{ x: 0 }}
        animate={{ x: `-${events.length * 320}px` }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: (events.length * speed) / 10,
          ease: "linear",
        }}
      >
        {duplicatedEvents.map((event, index) => (
          <div
            key={index}
            className="min-w-[300px]  mx-2 bg-black rounded-lg shadow-xl overflow-hidden"
          >
            <div className="h-[150px] relative">
              <Image
                src={event.image}
                alt={event.title}
                fill
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
