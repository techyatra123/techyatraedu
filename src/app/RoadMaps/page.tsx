import Adsection from "@/components/adsection";
import CareerRoadmapGrid from "@/components/subpageComponents/roadmap.subpage";

export default function Page() {
  return (
    <div>
        <Adsection
            adsList={[
              "/adsfiles/texasclz.gif",
              "/adsfiles/thamesclz.gif",
              "/adsfiles/careerconclave.png",
            ]}
          />
          <CareerRoadmapGrid />
    </div>
  );
}