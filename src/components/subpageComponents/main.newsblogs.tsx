import Image from "next/image";
import { PencilLine, Dot } from "lucide-react";
const DataSet = {
  eventName: "IT Fest conducted by Edu Yatra on 11 Feb 2025",
  mentor: "Name of mentor",
  date: "11 Feb 2025",
  description: `Lorem ipsum dolor sit amet consectetur. Accumsan viverra amet
          tincidunt nisi ante purus. Sed aliquam tincidunt varius condimentum id
          lobortis. Nulla pellentesque odio vitae purus pellentesque quis nisl
          tristique neque. Mi tortor nunc in aliquam. Libero elementum orci
          sapien nibh. Netus viverra eu quis nullam. Tempus volutpat nisl id
          dictum odio mauris magnis est. Amet quam duis pulvinar faucibus et
          facilisis. Cursus leo donec id id proin enim hac metus. Aliquam dolor
          imperdiet morbi sit semper eu. Fringilla nec sed volutpat sit
          suspendisse quis neque lacus nunc. Lorem eget semper integer amet.
          Convallis eget malesuada ac sit sit lorem risus ante phasellus.
          Suspendisse adipiscing nunc sollicitudin aliquam at tortor. Tellus
          nulla cras pharetra elementum viverra ullamcorper. Massa malesuada
          cursus tortor a lorem sed mauris mi. Id suspendisse enim aliquam
          phasellus. Ultrices vestibulum auctor tempus adipiscing massa
          pharetra. Tortor a nullam morbi est at in non netus. Ultrices
          vestibulum auctor tempus adipiscing massa pharetra. Tortor a nullam
          morbi est at in non netus.`,
  image: "/upcomingEvents/event3.jpg",
};

export default function NewsBlogsMainSection() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center w-full gap-5 px-4 lg:px-[120px] py-6">
      {/* Image Section */}
      <div className="w-full lg:w-[800px] flex flex-col gap-6">
        <Image
          src={DataSet.image}
          alt="Upcoming Event"
          className="rounded-lg shadow-md w-full h-auto"
          width={800}
          height={450}
        />
      </div>

      {/* Text Content */}
      <div className="w-full lg:w-[50vw] flex flex-col gap-4 justify-between">
        <div>
          <h3 className="font-semibold text-xl sm:text-2xl">
            {DataSet.eventName}
          </h3>
          <div className="flex flex-wrap items-center gap-1 text-xs text-gray-600 mt-2">
            <span className="flex items-center gap-1">
              <PencilLine className="h-3 w-3" />
              {DataSet.mentor}
            </span>
            <span className="flex items-center ">
              <Dot className="h-3 w-3" />
              {DataSet.date}
            </span>
          </div>
        </div>
        <p className="text-sm text-gray-700 leading-relaxed">
          {DataSet.description}
        </p>
      </div>
    </div>
  );
}
