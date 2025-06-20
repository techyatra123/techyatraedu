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
    path: "/roadmaps/frontend",
  },
  {
    title: "Cyber Security",
    image: "/roadmap/cybersecurity.jpg",
    path: "/roadmaps/ai",
  },
  {
    title: "Data Science",
    image: "/roadmap/datascience.jpg",
    path: "/roadmaps/ai",
  },
];

const careerData: CareerItem[] = [
  {
    title: "1. AI/ML Engineer",
    description:
      "Role: Develop machine learning models, handle datasets, and automate decision-making.",
    skills: [
      "Python",
      "TensorFlow",
      "Scikit-Learn",
      "Pandas",
      "NumPy",
      "basic algorithms",
    ],
    jobDemand: "High demand globally for AI talent across industries.",
  },
  {
    title: "2. Data Analyst",
    description:
      "Role: Analyze large datasets to find patterns, trends, and insights.",
    skills: ["SQL", "Python", "Power BI/Tableau", "Excel", "basic statistics"],
    jobDemand: "Strong demand in business, healthcare, finance, and tech.",
  },
  {
    title: "3. Data Scientist",
    description:
      "Role: Work with complex data to build predictive models and perform data-driven decision-making.",
    skills: [
      "Python",
      "R",
      "SQL",
      "Machine Learning basics",
      "data visualization",
    ],
    jobDemand:
      "Critical role in AI-driven decision-making and product strategy.",
  },
  {
    title: "4. Machine Learning Engineer",
    description:
      "Role: Design and deploy machine learning models into production environments.",
    skills: [
      "Python",
      "TensorFlow",
      "PyTorch",
      "APIs",
      "software engineering principles",
    ],
    jobDemand: "In-demand in AI-driven product companies and startups.",
  },
  {
    title: "5. AI Developer for Chatbots and NLP",
    description:
      "Role: Develop chatbots, voice assistants, and Natural Language Processing (NLP) solutions.",
    skills: ["Python", "NLP libraries (spaCy, NLTK)", "chatbot frameworks"],
    jobDemand: "Growing market with increasing use of conversational AI.",
  },
  {
    title: "6. Computer Vision Developer",
    description:
      "Role: Work on image processing, object detection, facial recognition, etc.",
    skills: ["OpenCV", "TensorFlow", "deep learning"],
    jobDemand: "High demand in healthcare, security, automotive, and robotics.",
  },
  {
    title: "7. AI Software Engineer",
    description: "Role: Build software that integrates AI components.",
    skills: ["Python", "APIs", "cloud platforms (AWS, Azure, Google Cloud)"],
    jobDemand: "Essential in deploying scalable AI solutions.",
  },
  {
    title: "8. Robotic Process Automation (RPA) Developer",
    description: "Role: Automate repetitive tasks using AI-driven RPA tools.",
    skills: ["Python", "RPA tools (UiPath, Blue Prism)"],
    jobDemand:
      "Used in enterprise automation in finance, HR, and customer service.",
  },
];

const adsection = [
  "/adsfiles/uniglobe.gif",
  "/adsfiles/ncmt.gif",
  "/adsfiles/thamesclz.gif",
];

const CareerScopeAi: FC = () => {
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

          {/* More roadmaps */}
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

export default CareerScopeAi;
