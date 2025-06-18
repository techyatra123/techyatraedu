"use client";
import React, { useState } from "react";
import Sidebar from "@/components/subpageComponents/sidebar.registered.institutions";
import CollegeCard from "@/components/subcomponents/registered.clzcard";

const allColleges = [
  {
    name: "Islington College",
    location: "Kathmandu",
    imageurl: "/collegeImage/islingtoncollege.png",
    date: "1 Feb, 2025",
    institutionType: "College",
    courses: "Machine Learning",
    status: "Upcoming",
  },
  {
    name: "Sunway College Kathmandu",
    location: "Kathmandu",
    image: "/collegeImage/sunwaycollege.jpg",
    date: "1 Feb, 2025",
    institutionType: "College",
    trainingProgram: "Data Science",
    status: "Active",
  },
    {
    name: "Softwarica College of IT & E-commerce",
    location: "Kathmandu",
    image: "/collegeImage/softwaricacollege.jpg",
    date: "1 Feb, 2025",
    institutionType: "College",
    trainingProgram: "Data Science",
    status: "Active",
  },
  {
    name: "Tilottama College, Butwal, Rupandehi",
    location: "Rupandehi",
    image: "/collegeImage/tilottamacampus.jpg",
    date: "1 Feb, 2025",
    institutionType: "College",
    trainingProgram: "Data Science",
    status: "Active",
  },
  {
    name: "KMC Lalitpur",
    location: "Lalitpur",
    image: "/collegeImage/kmclalitpurcollege.png",
    date: "1 Feb, 2025",
    institutionType: "School",
    trainingProgram: "Robotics",
    status: "Completed",
  },
  {
    name: "Texas Intenational Secondary School",
    location: "Lalitpur",
    image: "/collegeImage/texascollege.jpg",
    date: "1 Feb, 2025",
    institutionType: "School",
    trainingProgram: "Robotics",
    status: "Completed",
  },
  {
    name: "Ace Institute of Management",
    location: "Kathmandu",
    image: "/collegeImage/aceinstitute.png",
    date: "1 Feb, 2025",
    institutionType: "College",
    trainingProgram: "Web Design",
    status: "Upcoming",
  },
    {
    name: "Nepal College of Information Technology",
    location: "Kathmandu",
    image: "/collegeImage/ncitnepal.png",
    date: "1 Feb, 2025",
    institutionType: "College",
    trainingProgram: "Web Design",
    status: "Upcoming",
  },
   {
    name: "United Academy",
    location: "Kathmandu",
    image: "/collegeImage/unitedacademy.jpg",
    date: "1 Feb, 2025",
    institutionType: "College",
    trainingProgram: "Web Design",
    status: "Upcoming",
  },
];

const RegisteredColleges = () => {
  const [filters, setFilters] = useState<{
    institutionType: string[];
    location: string[];
    trainingProgram: string[];
    status: string[];
  }>({
    institutionType: [],
    location: [],
    trainingProgram: [],
    status: [],
  });

  const handleFilterChange = (field: keyof typeof filters, value: string) => {
    setFilters((prev) => {
      const values = prev[field].includes(value)
        ? prev[field].filter((v) => v !== value)
        : [...prev[field], value];
      return { ...prev, [field]: values };
    });
  };

  const filteredColleges = allColleges.filter((college) => {
    return (
      (filters.institutionType.length === 0 ||
        filters.institutionType.includes(college.institutionType)) &&
      (filters.location.length === 0 ||
        filters.location.includes(college.location)) &&
      (filters.status.length === 0 ||
        filters.status.includes(college.status)) &&
      (filters.trainingProgram.length === 0 ||
        filters.trainingProgram?.some((p) =>
          college.trainingProgram?.includes(p)
        ) ||
        filters.trainingProgram?.some((p) => college.courses?.includes(p)))
    );
  });

  return (
    <div className="flex min-h-screen md:px-[60px] lg:px-[120px]">
      <Sidebar filters={filters} onFilterChange={handleFilterChange} />
      <main className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-6">Registered Colleges</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredColleges.map((college, index) => (
            <CollegeCard
              key={index}
              title={college.name}
              location={college.location}
              date={college.date}
              time="10:00 AM" // You can replace this with actual data if available
              imageUrl={college.image ?? college.imageurl ?? ""}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default RegisteredColleges;
