"use client";

import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SiGithub as GithubIcon } from "react-icons/si";

export interface Project {
  id: number;
  title: string;
  summary: string;
  details: string;
  img: string;
  technologies?: string[];
  githubLink?: string;
}

interface Props {
  project: Project;
  isExpanded?: boolean;
  onClick?: () => void;
  innerRef?: React.RefObject<HTMLDivElement>;
}

function ProjectCard({ project, isExpanded, onClick, innerRef }: Props) {
  return (
    <motion.div
      layout
      ref={innerRef}
      onClick={onClick}
      whileHover={{ scale: 1.03 }}
      transition={{
        layout: {
          type: "spring",
          stiffness: 225,
          damping: 25,
          mass: 1,
          bounce: 1,
        },
        duration: 0.2,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={clsx(
        "cursor-pointer rounded-xl overflow-hidden transition-shadow",
        isExpanded && "col-span-2 row-span-1"
      )}
    >
      <div
        className={clsx(
          "w-full h-full",
          isExpanded ? "flex flex-row gap-4 p-4" : "flex flex-col"
        )}
      >
        <div
          className={clsx(
            isExpanded ? "w-1/2 h-auto" : "w-full h-[150px] md:h-[180px]"
          )}
        >
          {/* image */}
          <Image
            src={project.img}
            alt={`${project.title} preview`}
            width={isExpanded ? 400 : 300}
            height={isExpanded ? 300 : 200}
            className="w-full h-full object-cover rounded-md"
          />
        </div>
        <div
          className={clsx(
            "flex flex-col",
            isExpanded ? "w-1/2 justify-between gap-4" : "p-4"
          )}
        >
          <div>
            {/* title */}
            <motion.h3 layout className="text-lg font-semibold mb-2">
              {project.title}
            </motion.h3>

            {/* technologies */}
            {isExpanded && project.technologies && (
              <motion.div layout className="flex flex-wrap gap-2 mb-3">
                {project.technologies.map((tech) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="bg-blue-500 text-white dark:bg-blue-600"
                  >
                    {tech}
                  </Badge>
                ))}
              </motion.div>
            )}

            {/* details/summary */}
            <AnimatePresence mode="wait">
              {isExpanded ? (
                <motion.p
                  key="details"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-sm"
                >
                  {project.details}
                </motion.p>
              ) : (
                <motion.p
                  key="summary"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-sm text-muted-foreground"
                >
                  {project.summary}
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          {/* github link */}
          {isExpanded && (
            <motion.div layout className="mt-4 self-start">
              {project.githubLink ? (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="sm"
                    className="text-sm hover:ring-1 hover:shadow-md transition-transform hover:scale-[1.03] rounded-xl"
                  >
                    <GithubIcon className="w-4 h-4" />
                    GitHub
                  </Button>
                </a>
              ) : (
                <Badge variant="secondary" className="bg-gray-500 text-white">
                  Private repo - available upon request
                </Badge>
              )}
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
