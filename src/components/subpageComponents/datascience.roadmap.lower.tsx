"use client";

import Image from "next/image";
import { FC } from "react";
import RoadmapCard from "../subcomponents/roadmap.card";

interface CareerItem {
  title: string;
  description: string;
  skills?: string[];
  scope?: string;
  jobDemand?: string;
}

const moreRoadmap = [
  {
    title: "Frontend Development",
    image: "/roadmap/frontendroadmap.jpg",
    path: "/RoadMaps/frontend",
  },
  {
    title: "Cyber Security",
    image: "/roadmap/cybersecurity.jpg",
    path: "/RoadMaps/ai",
  },
  {
    title: "Artificial Intelligence",
    image: "/roadmap/ai.jpg",
    path: "/RoadMaps/ai",
  },
];

const careerData: CareerItem[] = [
  {
    title: "1. Data Analyst",
    description:
      "Role: Interpret data, generate reports, and provide insights to help businesses make decisions.",
    skills: ["SQL", "Python", "Excel", "Tableau/Power BI", "basic statistics"],
    jobDemand: "High demand across industries like finance, healthcare, and e-commerce.",
  },
  {
    title: "2. Data Scientist",
    description:
      "Role: Build statistical models, develop machine learning algorithms, and analyze complex datasets.",
    skills: ["Python", "R", "SQL", "Machine Learning basics", "data visualization"],
    jobDemand: "Core role in driving data-driven strategy in modern businesses.",
  },
  {
    title: "3. Business Intelligence (BI) Analyst",
    description:
      "Role: Transform raw data into actionable dashboards and reports for business growth.",
    skills: ["Power BI", "Tableau", "SQL", "Excel", "business strategy understanding"],
    jobDemand: "Highly sought after in corporate strategy and performance teams.",
  },
  {
    title: "4. Data Engineer (Entry-Level)",
    description:
      "Role: Build and maintain data pipelines, databases, and data infrastructure.",
    skills: ["Python", "SQL", "cloud storage", "ETL tools"],
    jobDemand: "Key role for enabling data access and processing in organizations.",
  },
  {
    title: "5. Data Science Intern",
    description:
      "Role: Assist in data cleaning, exploration, and preliminary model building.",
    skills: ["Python", "Pandas", "Excel", "visualization tools"],
    jobDemand: "Common entry point into data science roles for freshers.",
  },
  {
    title: "6. Machine Learning Engineer",
    description:
      "Role: Develop and deploy simple machine learning models.",
    skills: ["Python", "Scikit-learn", "TensorFlow basics"],
    jobDemand: "Growing demand in product and automation teams.",
  },
  {
    title: "7. Data Visualization Specialist",
    description:
      "Role: Focus on visual storytelling with data using interactive dashboards and charts.",
    skills: ["Tableau", "Power BI", "Python", "D3.js (optional)"],
    jobDemand: "In demand for enhancing data communication and executive reporting.",
  },
];


const adsection = [
  "/adsfiles/uniglobe.gif",
  "/adsfiles/ncmt.gif",
  "/adsfiles/thamesclz.gif",
];

const CareerScopeDs: FC = () => {
  return (
    <section className="w-full px-4 py-8 max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold text-center text-blue-800 mb-10">
        Career Scope After Artificial Intelligence 
      </h2>
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Main Content */}
        <div className="flex-1">
          <ul className="space-y-6">
            {careerData.map((item, index) => (
              <li
                key={index}
                className="bg-blue-50 p-4 rounded-lg border border-blue-100 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-blue-700 mb-1">
                  {item.title}
                </h3>
                <p className="text-gray-700 mb-1">{item.description}</p>
                {item.skills && (
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">Skills Required:</span>{" "}
                    {item.skills.join(", ")}
                  </p>
                )}
                {item.jobDemand && (
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">Job Demand:</span>{" "}
                    {item.jobDemand}
                  </p>
                )}
                {item.scope && (
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">Scope:</span> {item.scope}
                  </p>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Sidebar */}
        <div className="w-full lg:w-[300px] flex flex-col gap-6">
          {/* Ads */}
          <div className="space-y-4">
            {adsection.map((ad, index) => (
              <div key={index} className="rounded overflow-hidden">
                <Image
                  src={ad}
                  alt={`Ad ${index + 1}`}
                  width={300}
                  height={100}
                  className="w-full h-auto object-cover"
                />
              </div>
            ))}
          </div>

          {/* More Roadmaps */}
          <div className="space-y-4">
            {moreRoadmap.map((card, index) => (
              <div key={index}>
                <RoadmapCard
                  title={card.title}
                  imageSrc={card.image}
                  path={card.path}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerScopeDs;
