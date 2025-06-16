import { ArrowUpRight } from "lucide-react";
import Card from "./subcomponents/roadmap.card"; 

const cards = [
  {
    title: "Computer Science with Artificial Intelligence",
    imageSrc: "/roadmap/ai.jpg", 
  },
  {
    title: "Data Science",
    imageSrc: "/roadmap/datascience.jpg",
  },
  {
    title: "Ethical Hacking",
    imageSrc: "/roadmap/ethicalhacking.jpg",
  },
  {
    title: "Cyber Security",
    imageSrc: "/roadmap/cybersecurity.jpg",
  },
];

const CareerRoadmap: React.FC = () => {
  return (
    <section className="py-12 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Career Roadmap for you</h2>
          <a href="#" className="text-indigo-600 hover:underline flex flex-row justify-center items-center gap-2 bottom-0">
            View more
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <Card key={index} title={card.title} imageSrc={card.imageSrc} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareerRoadmap;
