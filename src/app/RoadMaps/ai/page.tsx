
import CareerScope from "@/components/subpageComponents/ai.roadmap.lower";
import Image from "next/image";

export default function page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      {" "}
      <Image
        src="/roadmap/svgs/airoadmap.svg"
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
