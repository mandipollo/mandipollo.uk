import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { projectData } from "../../db/project-data";
import getErrorMessage from "../../utilities/getError";
import { ProjectProps } from "../../types/project-types";

const ProjectPage: React.FC = () => {
	const [currentProject, setCurrentProject] = useState<ProjectProps | null>(
		null
	);
	const { projectID } = useParams();

	useEffect(() => {
		const fetchData = () => {
			try {
				const project = projectData.find(pro => pro.title === projectID);
				if (!project) {
					throw new Error("Could not find the project");
				}
				setCurrentProject(project);
			} catch (error) {
				const message = getErrorMessage(error);
				console.log(message);
			}
		};
		fetchData();
	}, []);

	if (!currentProject) {
		return <p>Loading....</p>;
	}

	return (
		<section className="flex h-full w-full bg-secondayBgColor mt-10 rounded-md font-normal">
			<div className="grid grid-cols-2 gap-4 p-4">
				<figure className="flex aspect-[3/4] object-cover ">
					<img
						className="w-full h-full"
						src={currentProject.imageUrl}
						alt={currentProject.title}
					/>
				</figure>
				<div className="flex flex-col">
					<div className="flex flex-row justify-between">
						<div>
							<p>{currentProject.title}</p>
							<p className="text-secondaryTextColor">
								{currentProject.projectType}
							</p>
						</div>

						<button className="bg-gray-200 h-6 w-6 rounded-full p-1 block">
							<figure className=" h-full w-full object-cover">
								<img
									src="/minus.svg"
									alt="back action image"
									className="h-full w-full"
								/>
							</figure>
						</button>
					</div>
					<ul className="flex flex-col w-full mt-8">
						<li className="grid grid-cols-2 border-t py-2">
							<p>ID</p>
							<p className="text-secondaryTextColor">1</p>
						</li>
						<li className="grid grid-cols-2 border-t py-2">
							<p>Year</p>
							<p className="text-secondaryTextColor">2024</p>
						</li>
						<li className="grid grid-cols-2 border-t py-2">
							<p>Design</p>
							<p className="text-secondaryTextColor">
								Independent Designer&apos;s Collective
							</p>
						</li>
						<li className="grid grid-cols-2 border-t py-2">
							<p>Tech</p>
							<p className="text-secondaryTextColor">{currentProject.tech}</p>
						</li>
						<li className="grid grid-cols-2 border-t py-2">
							<p>Platform</p>
							<p className="text-secondaryTextColor">
								["Netlify", "Google Cloud"]
							</p>
						</li>
						<li className="grid grid-cols-2 border-t py-2">
							<p>URL</p>
							<a
								href="https://urbandthreads.netlify.app/"
								target="_blank"
								className="text-secondaryTextColor"
							>
								{currentProject.projectLink}
							</a>
						</li>
					</ul>
				</div>
			</div>
		</section>
	);
};

export default ProjectPage;
