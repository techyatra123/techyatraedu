// components/RegisteredColleges.tsx
import CollegeCard from "./subcomponents/registered.clzcard";
import { ArrowUpRight } from "lucide-react";

const Events = [
  {
    title: "UI UX Designing fest at Softwarica College of IT & E-commerce",
    location: "Dillibazar, Kathmandu",
    time: "2:00 PM–4:00 PM",
    date: "11 Feb, 2025",
    imageUrl: "/upcomingEvents/event1.jpg",
  },
  {
    title: "UI UX Designing fest at Softwarica College of IT & E-commerce",
    location: "Bagbazar, Kathmandu",
    time: "2:00 PM–4:00 PM",
    date: "11 Feb, 2025",
    imageUrl: "/upcomingEvents/event2.jpg",
  },
  {
    title: "UI UX Designing fest at Softwarica College of IT & E-commerce",
    location: "Maitidevi, Kathmandu",
    time: "2:00 PM–4:00 PM",
    date: "11 Feb, 2025",
    imageUrl: "/upcomingEvents/event3.jpg",
  },
  {
    title: "UI UX Designing fest at Softwarica College of IT & E-commerce",
    location: "Butwal, Rupandehi",
    time: "2:00 PM–4:00 PM",
    date: "11 Feb, 2025",
    imageUrl: "/upcomingEvents/event1.jpg",
  },
];

const Upcommingevent = () => {
  return (
    <section className="py-10 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">
            Upcoming Events
          </h2>
          <a
            href="#"
            className="text-indigo-600 hover:underline flex flex-row justify-center items-center gap-2"
          >
            View more
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Events.map((event, index) => (
            <CollegeCard key={index} {...event} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Upcommingevent;
