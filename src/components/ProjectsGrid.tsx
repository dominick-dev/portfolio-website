"use client";

import { useState } from "react";
import ProjectCard, { Project } from "./ProjectCard";
import { useRef, useEffect } from "react";

interface Props {
  projects: Project[];
}

function ProjectsGrid({ projects }: Props) {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <div>
      <div>
        <h3 className="text-base font-medium text-muted-foreground mb-5 mt-20">
          Projects:
        </h3>
      </div>
      <div className="grid md:grid-cols-2 gap-6 auto-rows-[minmax(200px,auto)] md:auto-rows-[minmax(300px,auto)] [grid-auto-flow:dense]">
        {projects.map((project) => (
          <ProjectWrapper
            key={project.id}
            project={project}
            isExpanded={expandedId === project.id}
            onClick={() =>
              setExpandedId((prev) => (prev === project.id ? null : project.id))
            }
          />
        ))}
      </div>
    </div>
  );
}

export default ProjectsGrid;

interface WrapperProps {
  project: Project;
  isExpanded: boolean;
  onClick: () => void;
}

function ProjectWrapper({ project, isExpanded, onClick }: WrapperProps) {
  const cardRef = useRef<HTMLDivElement>(null as unknown as HTMLDivElement);

  useEffect(() => {
    if (isExpanded && cardRef.current) {
      cardRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [isExpanded]);

  return (
    <ProjectCard
      project={project}
      isExpanded={isExpanded}
      onClick={onClick}
      innerRef={cardRef}
    />
  );
}
