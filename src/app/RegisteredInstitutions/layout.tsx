import Adsection from "@/components/adsection";
import InstitutionsHeader from "@/components/subpageComponents/subpageHeader";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div>
    <InstitutionsHeader Page={"Registered Institutions"}/>
       <Adsection
            adsList={[
              "/adsfiles/texasclz.gif",
              "/adsfiles/thamesclz.gif",
              "/adsfiles/careerconclave.png",
            ]}
          />
    {children}
    <Adsection
            adsList={[
              "/adsfiles/uniglobe.gif",
              "/adsfiles/ncmt.gif",
              "/adsfiles/globalcollege.gif",
            ]}
          />
  </div>;
}
