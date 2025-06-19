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
    title: "Artificial Intelligence",
    image: "/roadmap/ai.jpg",
    path: "/RoadMaps/ai",
  },
  {
    title: "Data Science",
    image: "/roadmap/datascience.jpg",
    path: "/RoadMaps/datascience",
  },
];

const careerData: CareerItem[] = [
  {
    title: "1. Frontend Developer",
    description: "Role: Build user-facing parts of websites and web applications.",
    skills: ["HTML", "CSS", "JavaScript", "React", "Angular", "Vue"],
    jobDemand: "Very high worldwide, including remote opportunities.",
  },
  {
    title: "2. UI/UX Developer",
    description:
      "Role: Bridge the gap between UI/UX design and development by translating designs into code.",
    skills: ["HTML", "CSS", "JavaScript", "Figma", "design understanding"],
  },
  {
    title: "3. Web Designer",
    description:
      "Role: Focus on the visual aspects of websites with basic coding.",
    skills: ["HTML", "CSS", "Figma", "Photoshop", "Illustrator"],
  },
  {
    title: "4. Mobile Frontend Developer",
    description:
      "Role: Build mobile-friendly user interfaces, sometimes using frameworks like React Native or Flutter.",
    skills: ["HTML", "CSS", "JavaScript", "React Native (optional)"],
  },
  {
    title: "5. WordPress Developer",
    description:
      "Role: Create and customize websites using WordPress themes and plugins.",
    skills: ["HTML", "CSS", "WordPress", "basic PHP"],
  },
  {
    title: "6. Email Template Developer",
    description: "Role: Design responsive email templates for marketing.",
    skills: ["HTML", "CSS (email-specific best practices)"],
  },
  {
    title: "7. Freelance Frontend Developer",
    description:
      "Scope: Work independently on global freelance platforms like Upwork, Fiverr, and Freelancer.",
  },
  {
    title: "8. Frontend Testing/QA Specialist",
    description:
      "Role: Focus on frontend usability, responsiveness, and cross-browser compatibility.",
    skills: ["Basic frontend", "Selenium", "Cypress (optional)"],
  },
];

const adsection = [
  "/adsfiles/uniglobe.gif",
  "/adsfiles/ncmt.gif",
  "/adsfiles/thamesclz.gif",
];

const CareerScope: FC = () => {
  return (
    <section className="w-full px-4 py-8 max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold text-center text-blue-800 mb-10">
        Career Scope After Frontend Training
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

export default CareerScope;
