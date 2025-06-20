import { ArrowUpRight } from "lucide-react";
import RoadmapCard from "./subcomponents/roadmap.card";
import Link from "next/link";
import { motion } from "framer-motion";

const RoadmapData = [
  {
    title: "Computer Science with Artificial Intelligence",
    imageSrc: "/roadmap/ai.jpg",
    path: "/career/ai",
  },
  {
    title: "Data Science",
    imageSrc: "/roadmap/datascience.jpg",
    path: "/career/datascience",
  },
  {
    title: "Ethical Hacking",
    imageSrc: "/roadmap/ethicalhacking.jpg",
    path: "/career/ethicalhacking",
  },
  {
    title: "Cyber Security",
    imageSrc: "/roadmap/cybersecurity.jpg",
    path: "/career/cybersecurity",
  },
];

const CareerRoadmap: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.3 }}
    >
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">Career Roadmap for you</h2>
            <Link
              href="/roadmaps"
              className="text-indigo-600 hover:text-shadow-lg flex flex-row justify-center items-center gap-2 bottom-0"
            >
              View more
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {RoadmapData.map((card, index) => (
              <RoadmapCard
                key={index}
                title={card.title}
                imageSrc={card.imageSrc}
                path={card.path}
              />
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default CareerRoadmap;
