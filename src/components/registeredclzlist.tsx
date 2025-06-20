import Link from "next/link";
import CollegeCard from "./subcomponents/registered.clzcard";
import { ArrowUpRight } from "lucide-react";

const colleges = [
  {
    title: "Softwarica College of IT & E-commerce",
    location: "Dillibazar, Kathmandu",
    time: "2:00 PM–4:00 PM",
    date: "11 Feb, 2025",
    imageUrl: "/collegeImage/softwaricacollege.jpg",
  },
  {
    title: "Islington College, Bagbazar, Kathmandu",
    location: "Bagbazar, Kathmandu",
    time: "2:00 PM–4:00 PM",
    date: "11 Feb, 2025",
    imageUrl: "/collegeImage/islintoncollege.png",
  },
  {
    title: "Sunway College of Kathmandu, Maitidevi, Kathmandu",
    location: "Maitidevi, Kathmandu",
    time: "2:00 PM–4:00 PM",
    date: "11 Feb, 2025",
    imageUrl: "/collegeImage/sunwaycollege.jpg",
  },
  {
    title: "Tilottama Campus, Butwal, Rupandehi",
    location: "Butwal, Rupandehi",
    time: "2:00 PM–4:00 PM",
    date: "11 Feb, 2025",
    imageUrl: "/collegeImage/tilottamacampus.jpg",
  },
];

const RegisteredColleges = () => {
  return (
    <section className="py-10 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">
            Registered Colleges and Schools
          </h2>
          <Link href="/registeredinstitutions" className="text-indigo-600 hover:underline flex flex-row justify-center items-center gap-2">
            View more
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {colleges.map((college, index) => (
            <CollegeCard key={index} {...college} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RegisteredColleges;
