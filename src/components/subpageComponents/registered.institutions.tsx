import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function InstitutionsHeader() {
  return (
    <div className="bg-gradient-to-b from-[#efe5e5] to-[#6056bb] shadow-md p-6 md:p-9 mb-6 flex flex-col items-center justify-center">
      <h3 className="font-normal text-2xl md:text-4xl text-stone-50 text-center">
        Registered Institutions
      </h3>
      <div className="text-sm md:text-lg p-2 md:p-3 flex flex-wrap items-center justify-center gap-2 md:gap-3 text-blue-900">
        <Link href="/" className="hover:text-shadow-lg">
          Home
        </Link>
        <ChevronRight className="h-4 md:h-5 relative top-[1px]" />
        <span>
          {" "}
          <Link href="/RegisteredInstitutions" className="hover:text-shadow-lg">
            Registered Institutions
          </Link>
        </span>
      </div>
    </div>
  );
}
