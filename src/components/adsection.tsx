import Image from "next/image";

export default function Adsection({ adsList }: { adsList: string[] }) {
  return (
    <div className="py-8 px-4 sm:px-8 md:px-[60px] lg:px-[120px] flex flex-col md:flex-row items-center justify-between gap-8 md:gap-[44px]">
      {adsList.map((ad, index) => (
        <div key={index} className="w-full md:flex-1">
          <Image
            src={ad}
            alt={`Ad ${index + 1}`}
            className="w-full h-auto"
            width={300}
            height={150}
          />
        </div>
      ))}
    </div>
  );
}
