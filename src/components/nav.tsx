import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-b from-[#efe5e5] to-[#efe5e5] text-black px-16 py-3 border-b border-gray-100 z-1000  ">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <div className="text-lg font-semibold ml-2 md:ml-0">
          <Link href="/" className="text-black">
            TECHYATRA EDU
          </Link>
        </div>
        <ul className="flex flex-wrap gap-4 text-sm md:text-base font-normal mt-2 md:mt-0">
          <li className="transition hover:-translate-y-0.5 px-2 py-1 rounded">
            <Link href="/">Home</Link>
          </li>
          <li className="transition hover:-translate-y-0.5 px-2 py-1 rounded">
            <Link href="/courses">Courses</Link>
          </li>
          <li className="transition hover:-translate-y-0.5 px-2 py-1 rounded">
            <Link href="/registeredinstitutions">Registered Institutions</Link>
          </li>
          <li className="transition hover:-translate-y-0.5 px-2 py-1 rounded">
            <Link href="/roadmaps">Career Roadmap</Link>
          </li>
          <li className="transition hover:-translate-y-0.5 px-2 py-1 rounded">
            <Link href="/">Institutions</Link>
          </li>
          <li className="transition hover:-translate-y-0.5 px-2 py-1 rounded">
            <Link href="/newsblogs">News & Blogs</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
