import CoursesComponent from "@/components/subpageComponents/courses.subpage";
const CoursesData = [
  {
    title: "Frontend Development",
    image: "/roadmap/frontendroadmap.jpg",
    path: "/courses/frontend",
  },
  {
    title: "Artificial Intelligence",
    image: "/roadmap/ai.jpg",
    path: "/courses/ai",
  },
  {
    title: "Data Science",
    image: "/roadmap/datascience.jpg",
    path: "/courses/ai",
  },
  {
    title: "Cyber Security",
    image: "/roadmap/cybersecurity.jpg",
    path: "/courses/ai",
  },
  {
    title: "DevOps",
    image: "/roadmap/devops.png",
    path: "/courses/ai",
  },
  {
    title: "Full Stack Development",
    image: "/roadmap/fullstackroadmap.png",
    path: "/courses/ai",
  },
  {
    title: "UX Design",
    image: "/roadmap/uiuxroadmap.png",
    path: "/courses/ai",
  },
  {
    title: "Backend Development",
    image: "/roadmap/backendroadmap.png",
    path: "/courses/ai",
  },
];
export default function Page() {
  return (
    <div>
      <CoursesComponent CoursesData={CoursesData} />
    </div>
  );
}
