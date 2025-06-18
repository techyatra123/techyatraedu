import CareerScope from "@/components/subpageComponents/frontend.roadmap.lower";
import Image from "next/image";

export default function page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      {" "}
      <Image
        src="/roadmap/svgs/frontendroadmap.svg"
        alt="My SVG Image"
        width="1100"
        height="300"
      />
      <div>
        <CareerScope />
      </div>
    </div>
  );
}
