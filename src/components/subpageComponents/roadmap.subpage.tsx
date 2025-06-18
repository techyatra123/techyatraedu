"use client";
// import { useRouter } from "next/router";
import Card from "../subcomponents/roadmap.card";

const CareerRoadmapGrid = () => {
  //   const router = useRouter();

  return (
    <div className="p-6 bg-gray-50 min-h-screen px-[120px]">
      <h2 className="text-2xl font-semibold mb-6">Roadmap for you</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          {
            title: "Frontend Development",
            image: "/roadmap/frontendroadmap.jpg",
            path: "/career/frontend",
          },
          {
            title: "Artificial Intelligence",
            image: "/roadmap/ai.jpg",
            path: "/career/ai",
          },
          {
            title: "Data Science",
            image: "/roadmap/datascience.jpg",
            path: "/career/ai",
          },
          {
            title: "Cyber Security",
            image: "/roadmap/cybersecurity.jpg",
            path: "/career/ai",
          },
          {
            title: "DevOps",
            image: "/roadmap/devops.png",
            path: "/career/ai",
          },
          {
            title: "Full Stack Development",
            image: "/roadmap/fullstackroadmap.png",
            path: "/career/ai",
          },
          {
            title: "UX Design",
            image: "/roadmap/uiuxroadmap.png",
            path: "/career/ai",
          },
            {
            title: "Backend Development",
            image: "/roadmap/backendroadmap.png",
            path: "/career/ai",
          },
        ].map((item, index) => (
          <Card
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
