import Image from "next/image";

interface SchoolCardProps {
  name: string;
  location: string;
  courses: string[];
  imageUrl: string;
}

export default function SchoolCard({
  name,
  location,
  courses,
  imageUrl,
}: SchoolCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 w-full max-w-sm flex flex-col justify-between group">
      <div className="flex gap-3">
        <div className="relative w-[105px] h-44 rounded-lg overflow-hidden">
          <Image
            src={imageUrl}
            alt={`Image of ${name}`}
            fill
            className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
          />
        </div>

        <div className="flex flex-col justify-between flex-grow">
          <div>
            <h3 className="text-lg font-semibold leading-tight line-clamp-2">
              {name}
            </h3>
            <p className="text-[9px] text-gray-400 mb-2">{location}</p>
            <ul className="list-disc pl-4 space-y-1">
              {courses.map((course, idx) => (
                <li key={idx} className="text-sm text-gray-700">
                  {course}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <button className="mt-4 w-full bg-indigo-600 hover:bg-indigo-700 text-white rounded-md py-2 text-sm font-medium transition">
        Apply
      </button>
    </div>
  );
}
