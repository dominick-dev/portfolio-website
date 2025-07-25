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
      "Built using Next.js, Tailwind, Framer Motion. Features animated project cards, dark/light mode, and responsive design.",
  },
  {
    id: 2,
    title: "RAG Chatbot",
    summary: "AI chatbot for clinical trial eligibility.",
    details:
      "Local LLM with ChromaDB, Streamlit frontend, and LangChain for orchestration. No API calls — all self-hosted.",
  },
  {
    id: 3,
    title: "BookBase",
    summary: "Book explorer with social features.",
    details:
      "Full-stack app using React, PostgreSQL, MongoDB. Users can log in, search books, and save to-read lists.",
  },
  {
    id: 4,
    title: "Penn-Shredder Shell",
    summary: "Custom C shell for managing timeouts.",
    details:
      "Built in C for a systems course. Supports `fork`, `exec`, signals, input parsing, and automatic process cleanup.",
  },
  {
    id: 5,
    title: "Chord DHT + Search Engine",
    summary: "Peer-to-peer distributed index with Chord protocol.",
    details:
      "Implements finger tables, consistent hashing, and distributed keyword search across peers.",
  },
  {
    id: 6,
    title: "YouTube Clone",
    summary: "Streaming platform clone built with Neetcode’s stack.",
    details:
      "Next.js + Tailwind + Prisma. Supports video upload, comments, likes, and authentication with Supabase.",
  },
];

import "@/app/globals.css";
export default function Home() {
  return (
    <div>
      <NavBar />
      <Separator />
      <AboutMe />
      <Separator className="my-15" />
      <div>
        <ProjectsGrid projects={projects} />
      </div>
    </div>
  );
}
