import React from "react";
import { Link } from "react-router-dom";

interface ProjectCardProps {
	title: string;
	imageUrl: string;
	projectType: string;
}

const ProjectCards: React.FC<ProjectCardProps> = ({
	title,
	imageUrl,
	projectType,
}) => {
	return (
		<li
			role="listitem"
			className="flex flex-col gap-4 w-full h-full items-center justify-center border-t text-sm"
		>
			<div className="flex flex-col w-full py-2">
				<p>{title}</p>
				<p className="text-gray-400">{projectType}</p>
			</div>
			<Link
				to={`/project/${title}`}
				className="flex w-full h-full pt-16 px-16 bg-gray-100 rounded-md"
			>
				<figure className="flex aspect-square object-cover ">
					<img className="w-full h-full" src={imageUrl} alt={title} />
				</figure>
			</Link>
		</li>
	);
};

export default ProjectCards;
