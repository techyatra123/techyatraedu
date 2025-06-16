import Image from "next/image";

export default function Adsection({adsList}: {adsList: string[]}) {
    // const ads:string[] = ["/adsfiles/texasclz.gif","/adsfiles/thamesclz.gif","/adsfiles/careerconclave.png"]
  return (
 
    <div className="py-12 px-[120px] flex flex-row gap-between items-center justify-between gap-[44px]">
        {adsList.map((ad, index) => (
        <div key={index} className="flex-1">
            <Image src={`${ad}`} alt={`Ad ${index + 1}`} className="w-full h-auto" width={300} height={150} />
            </div>
        ))}
     
    </div>
    
    
  );
}
