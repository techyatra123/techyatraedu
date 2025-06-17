import Image from "next/image";
import { FC } from "react";
import { Clock, MapPin } from "lucide-react";

interface CollegeCardProps {
  title: string;
  location: string;
  time: string;
  date: string;
  imageUrl: string;
}

const CollegeCard: FC<CollegeCardProps> = ({
  title,
  location,
  time,
  date,
  imageUrl,
}) => {
  return (
    <div className="group rounded-2xl shadow-md overflow-hidden bg-white w-full max-w-sm transition-transform">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-2 right-2 bg-[#7171FF] text-white text-[8px] p-1 rounded">
          {date}
        </div>
      </div>
      <div className="p-4 space-y-2">
        <div className="flex flex-row space-y-1 text-xs gap-7">
          <div className="flex items-center text-xs text-gray-500">
            <Clock className="w-3 h-3 mr-1 text-blue-700" />
            {time}
          </div>
          <div className="flex items-center text-xs text-gray-500">
            <MapPin className="w-3 h-3 mr-1 text-blue-700" />
            {location}
          </div>
        </div>
        <p className="text-[15px] font-semibold">{title}</p>

        <button className="w-full mt-2 text-indigo-600 border cursor-pointer border-indigo-600 rounded-md py-2 hover:bg-indigo-50 transition">
          View Detail
        </button>
      </div>
    </div>
  );
};

export default CollegeCard;
