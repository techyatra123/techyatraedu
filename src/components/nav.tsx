export default function Navbar() {
  return (
    <nav
      className="bg-gradient-to-b from-[#191956] to-[#2a265d] text-white p-4 flex flex-wrap  justify-between items-center border-b-2 border-white-900"
    >
      <div className="text-base font-medium mb-2 ml-20 md:mb-0">
        TECHYATRA EDU
      </div>
      <ul className="flex flex-wrap gap-4 text-sm md:text-base overflow-x-auto font-normal mr-16">
        <li className="cursor-pointer transition hover:-translate-y-0.5 px-2 py-1 rounded">Courses</li>
        <li className="cursor-pointer transition hover:-translate-y-0.5 px-2 py-1 rounded">Registered Institutions</li>
        <li className="cursor-pointer transition hover:-translate-y-0.5 px-2 py-1 rounded">Career Roadmap</li>
        <li className="cursor-pointer transition hover:-translate-y-0.5 px-2 py-1 rounded">Institutions</li>
        <li className="cursor-pointer transition hover:-translate-y-0.5 px-2 py-1 rounded">Admission</li>
        <li className="cursor-pointer transition hover:-translate-y-0.5 px-2 py-1 rounded">News & Blogs</li>
        <li className="cursor-pointer transition hover:-translate-y-0.5 px-2 py-1 rounded">Events</li>
        <li className="cursor-pointer transition  px-2 py-1 rounded bg-white shadow-xl/30 text-blue-500">Login</li>
      </ul>
    </nav>
  );
}
