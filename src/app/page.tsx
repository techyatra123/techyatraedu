import Adsection from '@/components/adsection';
import HeroSection from '@/components/hero';
export default function Home() {
  return (
    <>
    <HeroSection/>
    <Adsection adsList ={["/adsfiles/texasclz.gif","/adsfiles/thamesclz.gif","/adsfiles/careerconclave.png"]}/>
    </>
  );
}
