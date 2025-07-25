"use client";

import { useState, useRef, useEffect } from "react";
import ProjectCard, { Project } from "./ProjectCard";

interface Props {
  projects: Project[];
}

function ProjectsGrid({ projects }: Props) {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <div className="grid grid-cols-2 gap-6 auto-rows-[200px] md:auto-rows-[300px] [grid-auto-flow:dense]">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
          isExpanded={expandedId === project.id}
          onClick={() =>
            setExpandedId(expandedId === project.id ? null : project.id)
          }
        />
      ))}
    </div>
  );
}

export default ProjectsGrid;
