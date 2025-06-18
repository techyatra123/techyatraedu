import Link from "next/link";

export default function Navbar() {
  return (
    <nav
      className="bg-gradient-to-b from-[#efe5e5] to-[#efe5e5] text-black p-4 flex flex-wrap  justify-between items-center  border-white-900"
    >
      <div className="text-base font-medium mb-2 ml-20 md:mb-0"><Link href="/" className="text-black">TECHYATRA EDU</Link>
      </div>
      <ul className="flex flex-wrap gap-4 text-sm md:text-base overflow-x-auto font-normal mr-16">
        <li className="cursor-pointer transition hover:-translate-y-0.5 px-2 py-1 rounded">Courses</li>
        <li className="cursor-pointer transition hover:-translate-y-0.5 px-2 py-1 rounded">Registered Institutions</li>
        <li className="cursor-pointer transition hover:-translate-y-0.5 px-2 py-1 rounded">Career Roadmap</li>
        <li className="cursor-pointer transition hover:-translate-y-0.5 px-2 py-1 rounded">Institutions</li>
        <li className="cursor-pointer transition hover:-translate-y-0.5 px-2 py-1 rounded">Admission</li>
        <li className="cursor-pointer transition hover:-translate-y-0.5 px-2 py-1 rounded">News & Blogs</li>
      </ul>
    </nav>
  );
}
