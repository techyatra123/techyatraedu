import Adsection from "@/components/adsection";
import JoinSection from "@/components/joinus";
import HorizontalScrollingEvents, {
  EventItem,
} from "@/components/subcomponents/autoscrollImage";
import NewsBlogsMainSection from "@/components/subpageComponents/main.newsblogs";
import SubscribeSection from "@/components/subscribe";
import NewsAndBlogs from "@/components/newsandblogsoneline";
const demoEvents: EventItem[] = [
  {
    title: "Tech Talk 2025",
    image: "/upcomingEvents/event1.jpg",
  },
  {
    title: "AI & ML Conference",
    image: "/upcomingEvents/event2.jpg",
  },
  {
    title: "Blockchain Meetup",
    image: "/upcomingEvents/event3.jpg",
  },
  {
    title: "Web 3.0 Workshop",
    image: "/upcomingEvents/event1.jpg",
  },
];
export const AllNewsData = [
  {
    title: "UI UX Designing fest at Softwarica College of IT & E-commerce",
    location: "Dillibazar, Kathmandu",
    time: "2:00 PM–4:00 PM",
    date: "11 Feb, 2025",
    imageUrl: "/upcomingEvents/event1.jpg",
  },
  {
    title: "UI UX Designing fest at Softwarica College of IT & E-commerce",
    location: "Bagbazar, Kathmandu",
    time: "2:00 PM–4:00 PM",
    date: "11 Feb, 2025",
    imageUrl: "/upcomingEvents/event2.jpg",
  },
  {
    title: "UI UX Designing fest at Softwarica College of IT & E-commerce",
    location: "Maitidevi, Kathmandu",
    time: "2:00 PM–4:00 PM",
    date: "11 Feb, 2025",
    imageUrl: "/upcomingEvents/event3.jpg",
  },
  {
    title: "UI UX Designing fest at Softwarica College of IT & E-commerce",
    location: "Butwal, Rupandehi",
    time: "2:00 PM–4:00 PM",
    date: "11 Feb, 2025",
    imageUrl: "/upcomingEvents/event1.jpg",
  },
];
export interface NewsEventItem {
  title: string;
  location: string;
  time: string;
  date: string;
  imageUrl: string;
}
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
      <NewsBlogsMainSection />
      <HorizontalScrollingEvents events={demoEvents} speed={35} />
      <Adsection
        adsList={[
          "/adsfiles/uniglobe.gif",
          "/adsfiles/ncmt.gif",
          "/adsfiles/globalcollege.gif",
        ]}
      />
      <NewsAndBlogs AllNewsData={AllNewsData} />

      <JoinSection />
      <SubscribeSection />
    </div>
  );
}
