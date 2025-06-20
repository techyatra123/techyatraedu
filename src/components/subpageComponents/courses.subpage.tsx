"use client";
import RoadmapCard from "../subcomponents/roadmap.card";

type Course = {
  title: string;
  image?: string;
  path: string;
};

const CoursesComponent = ({ CoursesData }: { CoursesData: Course[] }) => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen px-[120px]">
      <h2 className="text-2xl font-semibold mb-6">Our Courses</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {CoursesData.map((item, index) => (
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

export default CoursesComponent;
