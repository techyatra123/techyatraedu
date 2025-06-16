import Adsection from '@/components/adsection';
import CareerRoadmap from '@/components/careerRoadmap';
import HeroSection from '@/components/hero';
import RegisteredClzList from '@/components/registeredclzlist';
export default function Home() {
  return (
    <>
    <HeroSection/>
    <Adsection adsList ={["/adsfiles/texasclz.gif","/adsfiles/thamesclz.gif","/adsfiles/careerconclave.png"]}/>
    <RegisteredClzList />
    <CareerRoadmap />
    </>
  );
}
