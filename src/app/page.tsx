import NavBar from "@/components/NavBar";
import AboutMe from "@/components/AboutMe";
import { Separator } from "@/components/ui/separator";
import ProjectsGrid from "@/components/ProjectsGrid";
import type { Project } from "@/components/ProjectCard";

const projects: Project[] = [
  {
    id: 1,
    title: "Portfolio Website",
    summary: "Minimal personal site with projects & contact.",
    details:
      "Built using Next.js, Tailwind, and Framer Motion. Features animated project cards, dark/light mode, and responsive design.",
    img: "/test.png",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    githubLink: "https://github.com/dominick-dev/portfolio-website",
  },
  {
    id: 2,
    title: "RAG Chatbot",
    summary: "AI chatbot for clinical trial eligibility.",
    details:
      "Local LLM with ChromaDB, Streamlit frontend, and LangChain for orchestration. No API calls — all self-hosted.",
    img: "/test.png",
    technologies: ["LangChain", "ChromaDB", "Streamlit", "Python", "Llama3.1"],
    githubLink: "https://github.com/dominick-dev/CRC-ChatBot",
  },
  {
    id: 3,
    title: "BookBase",
    summary: "Book explorer with social features.",
    details:
      "Full-stack app using React, PostgreSQL, and MongoDB. Users can log in, search books, and save to-read lists.",
    img: "/test.png",
    technologies: ["React", "PostgreSQL", "MongoDB", "Node.js"],
    githubLink: "https://github.com/hi-jaxon/5500project",
  },
  {
    id: 4,
    title: "Penn-Shredder Shell",
    summary: "Custom C shell for managing timeouts.",
    details:
      "Built in C for a systems course. Supports `fork`, `exec`, signals, input parsing, and automatic process cleanup.",
    img: "/test.png",
    technologies: ["C", "UNIX", "Processes", "Signals"],
    githubLink: "",
  },
  {
    id: 5,
    title: "Chord DHT + Search Engine",
    summary: "Peer-to-peer distributed index with Chord protocol.",
    details:
      "Implements finger tables, consistent hashing, and distributed keyword search across peers.",
    img: "/test.png",
    technologies: ["Java", "Chord DHT", "Distributed Systems"],
    githubLink: "",
  },
  {
    id: 6,
    title: "YouTube Clone",
    summary: "Streaming platform clone built with Neetcode’s stack.",
    details:
      "Next.js + Tailwind + Prisma. Supports video upload, comments, likes, and authentication with Supabase.",
    img: "/test.png",
    technologies: ["Next.js", "Tailwind CSS", "Prisma", "Supabase"],
    githubLink: "https://github.com/dominick-dev/youtube-clone-first",
  },
];

import "@/app/globals.css";
export default function Home() {
  return (
    <div>
      <NavBar />
      <Separator />
      <AboutMe />
      <ProjectsGrid projects={projects} />
      <Separator className="my-15" />
    </div>
  );
}
