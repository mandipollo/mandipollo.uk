import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { projectData } from "../../../db/project-data";
import { ProjectProps } from "../../../types/project-types";
import ProjectCards from "../../../components/cards/ProjectCards";
import ProjectDetail from "../../../components/cards/ProjectDetail";

const Projects = () => {
	const [selectedProject, setSelectedProject] = useState<
		ProjectProps | undefined
	>(undefined);

	const projectsVariants = {
		open: { opacity: 1 },
		closed: { opacity: 0 },
	};

	return (
		<section className="flex w-full">
			<motion.ul
				animate={selectedProject ? "closed" : "open"}
				variants={projectsVariants}
				className={`${
					selectedProject ? "hidden" : "grid"
				} grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4`}
			>
				{projectData.map(project => (
					<ProjectCards
						project={project}
						setSelectedProject={setSelectedProject}
					/>
				))}
			</motion.ul>

			{selectedProject && (
				<AnimatePresence mode="wait">
					<ProjectDetail
						setSelectedProject={setSelectedProject}
						selectedProject={selectedProject}
					/>
				</AnimatePresence>
			)}
		</section>
	);
};

export default Projects;
