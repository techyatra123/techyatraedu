"use client";

import SchoolCard from "./subcomponents/schoolCollege.card";
import { ArrowUpRight } from "lucide-react";

const schools = [
  {
    name: "Softwarica College of IT and E-Commerce",
    location: "Dillibazar, Kathmandu",
    courses: [
      "Bsc(Hons) Computer Science with AI",
      "Bsc(Hons) Ethical Hacking and Cybersecurity",
      "Bsc(Hons) Computing",
      "Msc Data Science",
    ],
    imageUrl: "/schoolCollege/softwarica.jpg",
  },
  {
    name: "Global School of Science",
    location: "Dillibazar, Kathmandu",
    courses: [
      "Ten Plus Two(+2) Science",
      "Ten Plus Two(+2) Management",
      "Ten Plus Two(+2) Law",
    ],
    imageUrl: "/schoolCollege/global.jpg",
  },
  {
    name: "Uniglobe Secondary School",
    location: "Dillibazar, Kathmandu",
    courses: [
      "Ten Plus Two(+2) Science",
      "Ten Plus Two(+2) Management",
      "Ten Plus Two(+2) Law",
    ],
    imageUrl: "/schoolCollege/uniglobe.jpg",
  },
];

export default function SchoolCollege() {
  return (
    <div className="bg-[#f7f8ff] py-12 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900">
            Schools and Colleges for you
          </h2>
          <a
            href="#"
            className="text-indigo-600 hover:underline flex flex-row justify-center items-center gap-2"
          >
            View more
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {schools.map((school, idx) => (
            <SchoolCard key={idx} {...school} />
          ))}
        </div>
      </div>
    </div>
  );
}
