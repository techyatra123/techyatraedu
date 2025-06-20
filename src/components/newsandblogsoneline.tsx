import { NewsEventItem } from "@/app/newsblogs/page";
import CollegeCard from "./subcomponents/registered.clzcard";
import { ArrowUpRight } from "lucide-react";

interface NewsAndBlogsProps {
  AllNewsData: NewsEventItem[];
}

const NewsAndBlogs = ({ AllNewsData }: NewsAndBlogsProps) => {
  return (
    <section className="py-10 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">News & Blogs</h2>

          <a
            href="/news"
            className="text-indigo-600 hover:underline flex items-center gap-1"
          >
            View more
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {AllNewsData.map((news, index) => (
            <CollegeCard key={index} {...news} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsAndBlogs;
