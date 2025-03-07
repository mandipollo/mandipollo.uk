import { motion } from "framer-motion";
import React, { SetStateAction } from "react";
import { ProjectProps } from "../../types/project-types";

interface ProjectDetailProps {
	setSelectedProject: React.Dispatch<SetStateAction<ProjectProps | undefined>>;
	selectedProject: ProjectProps;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({
	setSelectedProject,
	selectedProject,
}) => {
	return (
		<motion.section className="flex w-full h-full items-center justify-center bg-gray-100 bg-opacity-75 p-4">
			<motion.div className="rounded-md w-full">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					{/* Image Animation */}
					<motion.figure
						transition={{
							ease: [0.25, 1, 0.5, 1], // Custom cubic bezier for a slow start
							duration: 0.8, // Adjust for a slightly longer animation
						}}
						layoutId={`project-${selectedProject.id}`}
						className="flex aspect-[3/4] object-cover"
					>
						<img
							className="w-full h-full"
							src={selectedProject.imageUrl}
							alt={selectedProject.title}
						/>
					</motion.figure>

					{/* Project Info */}
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.5 }}
						className="flex flex-col"
					>
						<div className="flex flex-row justify-between">
							<div>
								<p>{selectedProject.title}</p>
								<p className="text-gray-400">{selectedProject.projectType}</p>
							</div>
							<button
								aria-label="Close project details"
								className="bg-gray-200 h-6 w-6 rounded-full p-1 block"
								onClick={() => setSelectedProject(undefined)}
							>
								<img
									src="/minus.svg"
									alt="back action image"
									className="h-full w-full"
								/>
							</button>
						</div>

						{/* Project Details List */}
						<ul className="flex flex-col w-full mt-8">
							{[
								{ label: "ID", value: selectedProject.id },
								{ label: "Year", value: selectedProject.year },

								{ label: "Tech", value: selectedProject.tech },

								{
									label: "URL",
									value: (
										<a
											rel="noopener noreferrer"
											aria-label={`Visit ${selectedProject.title} project website`}
											href={selectedProject.projectLink}
											target="_blank"
										>
											{selectedProject.projectLink}
										</a>
									),
								},
							].map((item, index) => (
								<li key={index} className="grid grid-cols-2 border-t py-2">
									<p>{item.label}</p>
									<p className="text-gray-400">{item.value}</p>
								</li>
							))}
						</ul>
					</motion.div>
				</div>
			</motion.div>
		</motion.section>
	);
};

export default ProjectDetail;
