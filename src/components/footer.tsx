"use client";
import Link from "next/link";
import {
  Facebook,
  Linkedin,
  Twitter,
  Youtube,
  MessageCircleMore,
} from "lucide-react";
import { motion } from "framer-motion";
export default function Footer() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.3 }}
    >
      <footer className="bg-gradient-to-t from-[#20206B] to-[#000000] text-white px-4 md:px-16 pt-16 pb-6 text-[15px]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h2 className="text-xl font-bold">
              EDU <span className="block text-3xl">YATRA</span>
            </h2>
            <p className="mt-4 text-gray-300">
              A perfect hub for anything related to <br /> education of and in
              Nepal
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">For Students</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/courses">Courses</Link>
              </li>
              <li>
                <Link href="/registeredinstitutions">
                  Registered Institutions
                </Link>
              </li>
              <li>
                <Link href="/roadmaps">Career Roadmap</Link>
              </li>
              <li>
                <Link href="/institutions">Institutions</Link>
              </li>
              <li>
                <Link href="/newsblogs">News & Blogs</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Info</h3>
            <ul className="space-y-2 text-gray-300">
              <li>About Us</li>
              <li>Our Team</li>
              <li>Terms of Use</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <p className="text-gray-300">TechYatra Edu Pvt. Ltd</p>
            <p className="text-gray-300">Shantinagar, Kathmandu, Nepal</p>
            <p className="text-gray-300 mt-2">+977-9876543212</p>
            <p className="text-gray-300">+977-01434534</p>
            <p className="text-gray-300 mt-2">info@techyatraedu.com.np</p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-4 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto">
          <p className="text-gray-400 text-sm">
            All right reserved to © Techyatra Edu • 2025
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0 text-lg">
            <a href="#" className="hover:text-blue-400">
              <Facebook />
            </a>
            <a href="#" className="hover:text-blue-400">
              <Linkedin />
            </a>
            <a href="#" className="hover:text-blue-400">
              <Twitter />
            </a>
            <a href="#" className="hover:text-green-400">
              <MessageCircleMore />
            </a>
            <a href="#" className="hover:text-red-500">
              <Youtube />
            </a>
          </div>
        </div>
      </footer>
    </motion.div>
  );
}
