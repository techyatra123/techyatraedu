"use client";
// import { useRouter } from "next/router";
import RoadmapCard from "../subcomponents/roadmap.card";
const RoadmapData = [
  {
    title: "Frontend Development",
    image: "/roadmap/frontendroadmap.jpg",
    path: "/roadmaps/frontend",
  },
  {
    title: "Artificial Intelligence",
    image: "/roadmap/ai.jpg",
    path: "/roadmaps/ai",
  },
  {
    title: "Data Science",
    image: "/roadmap/datascience.jpg",
    path: "/roadmaps/ai",
  },
  {
    title: "Cyber Security",
    image: "/roadmap/cybersecurity.jpg",
    path: "/roadmaps/ai",
  },
  {
    title: "DevOps",
    image: "/roadmap/devops.png",
    path: "/roadmaps/ai",
  },
  {
    title: "Full Stack Development",
    image: "/roadmap/fullstackroadmap.png",
    path: "/roadmaps/ai",
  },
  {
    title: "UX Design",
    image: "/roadmap/uiuxroadmap.png",
    path: "/roadmaps/ai",
  },
  {
    title: "Backend Development",
    image: "/roadmap/backendroadmap.png",
    path: "/roadmaps/ai",
  },
];
const CareerRoadmapGrid = () => {
  //   const router = useRouter();

  return (
    <div className="p-6 bg-gray-50 min-h-screen px-[120px]">
      <h2 className="text-2xl font-semibold mb-6">Roadmap for you</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {RoadmapData.map((item, index) => (
          <RoadmapCard
            key={index}
            title={item.title}
            imageSrc={item.image || "/images/placeholder.png"}
            path={item.path}
          />
        ))}
      </div>
    </div>
  );
};

export default CareerRoadmapGrid;
