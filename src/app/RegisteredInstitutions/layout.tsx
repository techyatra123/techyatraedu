import Adsection from "@/components/adsection";
import InstitutionsHeader from "@/components/subpageComponents/registered.instututions";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div>
    <InstitutionsHeader />
       <Adsection
            adsList={[
              "/adsfiles/texasclz.gif",
              "/adsfiles/thamesclz.gif",
              "/adsfiles/careerconclave.png",
            ]}
          />
    {children}
  </div>;
}
