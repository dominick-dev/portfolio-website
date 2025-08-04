import NavBar from "@/components/NavBar";
import AboutMe from "@/components/AboutMe";
import ProjectsGrid from "@/components/ProjectsGrid";
import Footer from "@/components/Footer";
import { Separator } from "@/components/ui/separator";
import type { Project } from "@/components/ProjectCard";

const projects: Project[] = [
  {
    id: 1,
    title: "RAG Chatbot",
    summary: "A clinical research focused AI chatbot",
    details:
      "A Retrieval-Augmented Generation chatbot developed to match patients with clinical research trials based on eligibility criteria. The system was built using LangChain, ChromaDB, and a locally run LLM for full data privacy/improved latency. The front end is built with Streamlit and Docker ensures cross platform support.",
    img: "/chatbot.png",
    technologies: [
      "Python",
      "LangChain",
      "ChromaDB",
      "Streamlit",
      "Llama3.1",
      "Docker",
    ],
    githubLink: "https://github.com/dominick-dev/CRC-ChatBot",
  },
  {
    id: 2,
    title: "BookBase",
    summary: "A data-driven web app for book discovery",
    details:
      "A full-stack book discovery app featuring smart search, user login w/ personalized bookshelves, and map-based review exploration. It fetches insights like hidden gems and polarizing reads using optimized SQL queries over 13M+ records. Advanced preprocessing, geocoding, and indexing reduced query times by 80%.",
    img: "/bb2.png",
    technologies: [
      "React",
      "JavaScript",
      "Node.js",
      "PostgreSQL",
      "MongoDB",
      "AWS RDS",
    ],
    githubLink: "https://github.com/hi-jaxon/5500project",
  },
  {
    id: 3,
    title: "Chord DHT + Search Engine",
    summary: "A distributed search engine using a Chord-based DHT",
    details:
      "A distributed search engine built on a Chord DHT with efficient O(log N) lookups, keyword-based querying, and dynamic ring stabilization. Designed and tested using ns-3, the system supports node joins, leaves, and consistent data redistribution across a simulated network.",
    img: "/chord.png",
    technologies: ["C++", "ns-3", "Python", "Linux/Unix", "Docker"],
    githubLink: "",
  },
  {
    id: 4,
    title: "Real-Time Messenger",
    summary:
      "A real-time chat application with real-time messaging, authentication, and media sharing",
    details:
      "A full-stack chat app with one-on-one and group messaging, real-time updates via Pusher, and Google/GitHub login using NextAuth. It supports file sharing, read receipts, online status, and an animated, responsive UI with Tailwind CSS. Messages and user data are handled efficiently with direct database access in server components.",
    img: "/messenger.png",
    technologies: [
      "Next.js 13",
      "React",
      "Tailwind",
      "Prisma",
      "MongoDB",
      "NextAuth",
      "Pusher",
    ],
    githubLink: "https://github.com/dominick-dev/real-time-messenger",
  },
  {
    id: 5,
    title: "Portfolio Website",
    summary: "You’re looking at it! Showcasing skills and projects",
    details:
      "Features animated project cards, dark/light mode, and responsive design. With a running to-do list for continuous improvements and new features.",
    img: "/portfolio_dark.png",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    githubLink: "https://github.com/dominick-dev/portfolio-website",
  },
  {
    id: 6,
    title: "OpenData Philly Analysis",
    summary: "A terminal-based, Philadelphia focused data analysis tool ",
    details:
      "A terminal-based Java tool for analyzing COVID, property, and population data in Philadelphia. Built with scalable N-tier architecture and design patterns like Singleton and Strategy. Supports real-world CSV/JSON parsing, ZIP code–based queries, and a custom insight that maps property value tiers to local vaccination rates. Users can adjust value thresholds, with memoization improving performance.",
    img: "/philly.jpg",
    technologies: [
      "Java",
      "JUnit",
      "Object-Oriented Design",
      "Design Patterns",
    ],
    githubLink: "",
  },
  {
    id: 7,
    title: "YouTube Clone",
    summary: "A simplified YouTube clone built with full-stack architecture",
    details:
      "Based on a tutorial by NeetCode, this project implements video upload, transcoding, and playback using Next.js, Firebase, Cloud Storage, Cloud Pub/Sub, and Cloud Run. It features Google Sign-In, signed upload URLs, asynchronous FFmpeg video processing, and metadata management via Firestore. The architecture showcases a scalable, event-driven workflow for real-time video upload and processing.",
    img: "/yt-logo.png",
    technologies: ["Next.js", "Tailwind CSS", "Firebase", "GCP"],
    githubLink: "",
  },
];

import "@/app/globals.css";
export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <section id="home" className="scroll-mt-5">
        <NavBar />
      </section>
      <Separator />

      <section id="about">
        <AboutMe />
      </section>

      <section id="projects" className="scroll-mt-15">
        <ProjectsGrid projects={projects} />
      </section>

      <Separator className="mt-15" />

      <Footer />
    </div>
  );
}
