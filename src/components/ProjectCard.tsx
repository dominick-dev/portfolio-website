"use client";

import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";

export interface Project {
  id: number;
  title: string;
  summary: string;
  details: string;
}

interface Props {
  project: Project;
  isExpanded?: boolean;
  onClick?: () => void;
}

function ProjectCard({ project, isExpanded, onClick }: Props) {
  return (
    <motion.div
      layout
      transition={{
        layout: {
          type: "spring",
          stiffness: 250,
          damping: 25,
        },
      }}
      onClick={onClick}
      className={clsx(
        "cursor-pointer rounded-xl bg-stone-200 dark:bg-stone-800 p-6 overflow-hidden shadow-sm transition-shadow hover:bg-stone-300 dark:hover:bg-stone-700",
        isExpanded && "col-span-2 row-span-1"
      )}
    >
      <motion.h3 layout className="text-xl font-semibold mb-2">
        {project.title}
      </motion.h3>
      <AnimatePresence mode="wait">
        {isExpanded ? (
          <motion.p
            key="details"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="text-sm text-stone-700 dark:text-stone-300"
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
            className="text-sm text-stone-700 dark:text-stone-300"
          >
            {project.summary}
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default ProjectCard;
