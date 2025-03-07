import React, { SetStateAction } from "react";
import { ProjectProps } from "../../types/project-types";
import { motion } from "framer-motion";

interface ProjectCardProps {
	setSelectedProject: React.Dispatch<SetStateAction<ProjectProps | undefined>>;
	project: ProjectProps;
}

const ProjectCards: React.FC<ProjectCardProps> = ({
	setSelectedProject,
	project,
}) => {
	return (
		<li
			key={project.id}
			onClick={() => setSelectedProject(project)}
			role="listitem"
			className="flex flex-col gap-4 w-full h-full items-center justify-center border-t"
		>
			<div className="flex flex-col w-full py-2">
				<p>{project.title}</p>
				<p className="text-gray-400">{project.projectType}</p>
			</div>
			<div className="flex w-full h-full pt-16 px-16 bg-gray-100 rounded-md">
				<motion.figure
					layoutId={`project-${project.id}`}
					className="flex aspect-[3/4] object-cover shadow-md rounded-md hover:cursor-pointer translate-y-2"
				>
					<img
						className="w-full h-full"
						src={project.imageUrl}
						alt={project.title}
					/>
				</motion.figure>
			</div>
		</li>
	);
};

export default ProjectCards;
