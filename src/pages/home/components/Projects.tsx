import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { projectData } from "../../../db/project-data";
import { ProjectProps } from "../../../types/project-types";

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
								className="flex aspect-[3/4] object-cover shadow-md rounded-md"
							>
								<img
									className="w-full h-full"
									src={project.imageUrl}
									alt={project.title}
								/>
							</motion.figure>
						</div>
					</li>
				))}
			</motion.ul>

			{selectedProject && (
				<AnimatePresence mode="wait">
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
											<p className="text-gray-400">
												{selectedProject.projectType}
											</p>
										</div>
										<button
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
											{
												label: "Design",
												value: "Independent Designer's Collective",
											},
											{ label: "Tech", value: selectedProject.tech },

											{
												label: "URL",
												value: (
													<a href={selectedProject.projectLink} target="_blank">
														{selectedProject.projectLink}
													</a>
												),
											},
										].map((item, index) => (
											<li
												key={index}
												className="grid grid-cols-2 border-t py-2"
											>
												<p>{item.label}</p>
												<p className="text-gray-400">{item.value}</p>
											</li>
										))}
									</ul>
								</motion.div>
							</div>
						</motion.div>
					</motion.section>
				</AnimatePresence>
			)}
		</section>
	);
};

export default Projects;
