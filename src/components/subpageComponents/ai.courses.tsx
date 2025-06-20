"use client";

import React from "react";
import Image from "next/image";
const data = {
  courseOverview: {
    title: "Artificial Intelligence and Prompt Engineering",
    description:
      "Generative AI and Prompt Engineering skills are the next big thing in artificial intelligence. Effective use of AI tools is currently gaining prominence across industries and sectors and is of paramount importance. Whether you are a student, content creator, experimentalist, or in business, this foundational AI course is helpful. You’ll learn how to use AI tools wisely and get the best out of them. We offer hands-on training concentrating on the practical applications of Artificial Intelligence and prompt engineering. During the course, students work with popular tools such as ChatGPT, Gemini, Eduaide.ai, Typli, Canva AI, and many others. Using AI prompting, students develop content, design graphics, produce videos, summarize information, and tackle real-world problems.",
    subDescription:
      "The training covers key modules, including text generation, multimedia creation, AI research, and prompt design best practices. You’ll also work on hands-on labs and final projects where you apply everything you’ve learned. After completing this course, you will confidently use AI for content creation, communication, planning, and more, adding an in-demand skill to your professional toolkit.",
  },
  modules: [
    {
      title: "Module 1",
      sessions: [
        "What is AI?",
        "Applications of AI in Everyday Life",
        "Introduction to Prompting",
        "Basic Prompting Techniques",
        "Glossary for AI/Prompting",
        "Hands-On Lab: Effective Prompting",
      ],
    },
    {
      title: "Module 2",
      sessions: [
        "Overview of Text Generation Tools",
        "AI for Blogging",
        "AI for Copywriting",
        "AI for Creative Writing",
        "Best Practices and Ethical Considerations",
        "Hands-On Lab: Text Generation Project",
      ],
    },
    {
      title: "Module 3",
      sessions: [
        "Introduction to AI in Audio Generation",
        "Text-to-Speech Tools",
        "AI in Video Generation",
        "Creating Videos with AI Tools",
        "Best Practices for Audio and Video Content",
        "Hands-On Lab: Audio/Video Project",
      ],
    },
    {
      title: "Module 4",
      sessions: [
        "AI for Graphic Design",
        "Text-to-Image Generation with AI",
        "AI Tools for Presentation Creation",
        "Creating Social Media Content with AI",
        "Integrating AI-Generated Content into Designs",
        "Hands-On Lab: Design Project",
      ],
    },
    {
      title: "Module 5",
      sessions: [
        "Understanding Research using AI",
        "AI Tools for Research",
        "Final AI Research Project",
        "Submit: Research and Planning Project",
        "Project for submission: Create solution solving real-world problem",
      ],
    },
  ],
  sessions: [
    {
      college: "Softwarica College of IT & E-commerce",
      date: "22 Jun 2025 - 29 Jun 2025",
      time: "8:00 AM - 9:00 AM",
    },
    {
      college: "Sunway College Kathmandu",
      date: "23 Jun 2025 - 29 Aug 2025",
      time: "10:00 AM - 2:00 AM",
    },
    {
      college: "Islington College",
      date: "22 Jun 2025 - 24 Aug 2025",
      time: "8:00 AM - 10:00 AM",
    },
  ],
};
export default function AICourse() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 text-gray-800">
      {/* Title */}
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
        {data.courseOverview.title}
      </h2>

      {/* Overview Section */}
      <div className="flex flex-col lg:flex-row gap-6 items-center mb-10">
        <div className="w-full lg:w-1/2">
          <Image
            src="/roadmap/ai.jpg"
            alt="AI Course Roadmap"
            width={500}
            height={400}
            className="w-full h-auto rounded-lg shadow transform transition-transform duration-300 hover:scale-[1.01] ease-out hover:shadow-2xl"
          />
        </div>
        <div className="w-full lg:w-1/2">
          <p className="mb-4">{data.courseOverview.description}</p>
          <p>{data.courseOverview.subDescription}</p>
        </div>
      </div>

      {/* Modules */}
      <section className="mb-12">
        <h3 className="text-2xl font-semibold mb-6 text-center">
          Course Modules
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.modules.map((module, index) => (
            <div
              key={index}
              className="p-5 border rounded-xl shadow bg-white hover:shadow-lg transform transition-transform duration-300 hover:scale-[1.01] ease-out"
            >
              <h4 className="text-lg font-semibold mb-3">{module.title}</h4>
              <ul className="list-disc list-inside text-sm space-y-1">
                {module.sessions.map((session, idx) => (
                  <li key={idx}>{session}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Upcoming Sessions */}
      <section className="mb-12">
        <h3 className="text-2xl font-semibold mb-6 text-center">
          Upcoming Sessions
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.sessions.map((session, idx) => (
            <div
              key={idx}
              className="bg-blue-50 border p-5 rounded-xl shadow hover:shadow-xl transform transition-transform duration-300 hover:scale-[1.01] ease-out"
            >
              <h4 className="text-lg font-bold">{session.college}</h4>
              <p className="text-sm mt-1">{session.date}</p>
              <p className="text-sm">{session.time}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Certificate Section */}
      <section className="bg-gray-50 p-8 rounded-xl shadow text-center">
        <h3 className="text-2xl font-bold mb-3">Certificate upon Completion</h3>
        <p className="mb-6">
          Add this credential to your LinkedIn profile, resume, or CV to stand
          out to recruiters.
        </p>
        <div className="inline-block border-2 border-dashed border-gray-400 p-6 rounded-lg bg-white">
          <Image
            src="/certification/certificate.png"
            alt="AI Course Roadmap"
            width={500}
            height={400}
            className="w-full h-auto rounded-lg shadow transform transition-transform duration-75 hover:scale-[1.01] ease-out hover:shadow-2xl mx-auto"
          />
        </div>
      </section>
    </div>
  );
}
