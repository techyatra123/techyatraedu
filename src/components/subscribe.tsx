import { Mail } from "lucide-react";

export default function SubscribeSection() {
  return (
    <div className="text-white py-10 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-row justify-between bg-blue-900 py-6 px-6 md:px-12 items-center rounded-2xl">
        <h4 className="font-semibold text-lg md:text-xl ml-1 md:ml-20 flex flex-row items-center gap-3 ">
          <Mail className="w-5 h-5" />
          Subscribe to Newsletter
        </h4>
        <div className="flex items-center gap-2 mr-4 pr-0.5  bg-white rounded ">
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="px-4 py-2 rounded-lg bg-white text-black focus:outline-none  focus:white "
          />
          <button
            type="button"
            className=" text-white font-normal px-4 py-1 rounded-lg bg-blue-900  hover:bg-blue-800 hover:scale-3d hover:pointer-coarse: transition mr-2"
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}
