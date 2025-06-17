import Adsection from "@/components/adsection";
import CareerRoadmap from "@/components/careerRoadmap";
import HeroSection from "@/components/hero";
import JoinSection from "@/components/joinus";
import RegisteredClzList from "@/components/registeredclzlist";
import SchoolCollege from "@/components/schoolCollege";
import SubscribeSection from "@/components/subscribe";
import Testimonials from "@/components/testimonials";
import Upcommingevent from "@/components/upcomingEvents";
export default function Home() {
  return (
    <>
      <HeroSection />
      <Adsection
        adsList={[
          "/adsfiles/texasclz.gif",
          "/adsfiles/thamesclz.gif",
          "/adsfiles/careerconclave.png",
        ]}
      />
      <RegisteredClzList />
      <CareerRoadmap />
      <Adsection
        adsList={[
          "/adsfiles/uniglobe.gif",
          "/adsfiles/ncmt.gif",
          "/adsfiles/globalcollege.gif",
        ]}
      />
      <SchoolCollege />
      <Testimonials />
      <Adsection
        adsList={[
          "/adsfiles/texasclz.gif",
          "/adsfiles/thamesclz.gif",
          "/adsfiles/careerconclave.png",
        ]}
      />
      <Upcommingevent />
      <JoinSection />
      <SubscribeSection />
    
    </>
  );
}
