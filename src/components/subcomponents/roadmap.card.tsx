import Image from "next/image";
import Link from "next/link";

type CardProps = {
  title: string;
  imageSrc: string;
  path: string;
};

const RoadmapCard: React.FC<CardProps> = ({ title, imageSrc, path})=> {
  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-4 w-full max-w-xs group flex flex-col h-full">
      <div className="h-40 relative mb-4 overflow-hidden rounded-md">
        <div className="w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-125">
          <Image
            src={imageSrc}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="rounded-md"
          />
        </div>
      </div>

      <div className="flex-grow">
        <h3 className="text-lg font-semibold mb-4">{title}</h3>
      </div>

      <button
        
        className="bg-indigo-600 cursor-pointer hover:bg-indigo-700 text-white px-4 py-2 rounded-md w-full mt-auto"
      >
        <Link href={path} className="flex items-center justify-center gap-2 w-full">
        View More
        </Link>
      </button>
    </div>
  );
};

export default RoadmapCard;
