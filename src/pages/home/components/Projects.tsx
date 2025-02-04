import React from "react";

import ProjectCards from "../../../components/cards/ProjectCards";

const Projects: React.FC = () => {
	const projectData = [
		{
			id: 1,
			title: "UrbanThreads",
			description: "E-commerce web app with guest/member and admin cms.",
			imageUrl:
				"https://res.cloudinary.com/dbg68gzpx/image/upload/v1738499780/urbanThreads_pyth2i.webp",
			backgroundColor: "bg-sky-900",
			wrapper1Bg: "bg-teal-900",
			wrapper2Bg: "bg-red-900",
		},
		{
			id: 2,
			title: "Lumshade",
			description: "Webshop frontend",
			imageUrl:
				"https://res.cloudinary.com/dbg68gzpx/image/upload/v1738499821/lumishade_sp32sm.webp",
			backgroundColor: "bg-slate-900",
			wrapper1Bg: "bg-orange-900",
			wrapper2Bg: "bg-green-900",
		},
		{
			id: 3,
			title: "Estate",
			description: "Real estate tracker",
			imageUrl:
				"https://res.cloudinary.com/dbg68gzpx/image/upload/v1738499797/estate_el0plo.webp",
			backgroundColor: "bg-teal-900",
			wrapper1Bg: "bg-cyan-900",
			wrapper2Bg: "bg-blue-900",
		},
		{
			id: 4,
			title: "Taskdom",
			description: "Team task management tool",
			imageUrl:
				"https://res.cloudinary.com/dbg68gzpx/image/upload/v1738499810/taskdom_ibtmr6.webp",
			backgroundColor: "bg-black",
			wrapper1Bg: "bg-red-900",
			wrapper2Bg: "bg-orange-900",
		},
	];

	return (
		<section className="flex flex-col w-full justify-center items-center gap-4 bg-gray-100">
			<p className="font-jetBrains text-xs text-gray-400">Lots of coffee ..</p>
			<h2 className="text-6xl">PROJECTS</h2>

			<ul className="flex relative w-full flex-col ">
				{projectData.map(project => (
					<ProjectCards
						key={project.id}
						id={project.id}
						title={project.title}
						imageUrl={project.imageUrl}
						description={project.description}
						wrapper1Bg={project.wrapper1Bg}
						wrapper2Bg={project.wrapper2Bg}
					/>
				))}
			</ul>
		</section>
	);
};

export default Projects;
