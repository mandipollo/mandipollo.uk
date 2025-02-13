import React from "react";

import ProjectCards from "../../../components/cards/ProjectCards";

const projectData = [
	{
		id: 1,
		title: "UrbanThreads",
		description:
			"UrbanThreads is a React TypeScript-based e-commerce platform designed for a smooth shopping experience. It features a dedicated admin CMS, enabling administrators to add/remove products, manage inventory, and process orders efficiently. Customers can checkout as guests or members.",
		imageUrl:
			"https://res.cloudinary.com/dbg68gzpx/image/upload/v1738499780/urbanThreads_pyth2i.webp",

		wrapper1Bg: "bg-teal-900",
		wrapper2Bg: "bg-red-900",
		bgColorFrom: "from-[#232323]",
		bgColorTo: "to-[#2D2D2D]",
		projectLink: "https://urbandthreads.netlify.app/",
	},
	{
		id: 2,
		title: "Lumshade",
		description:
			"A Next.js-based e-commerce platform currently in development, focusing on performance, scalability, and a seamless shopping experience.",
		imageUrl:
			"https://res.cloudinary.com/dbg68gzpx/image/upload/v1738499821/lumishade_sp32sm.webp",

		wrapper1Bg: "bg-orange-900",
		wrapper2Bg: "bg-green-900",
		bgColorFrom: "from-[#000018]",
		bgColorTo: "to-[#00004E]",
		projectLink: "https://beauty-boutique-brown.vercel.app/",
	},
	{
		id: 3,
		title: "Estate",
		description:
			"A real estate app that fetches the latest property prices using the Rightmove API.Powered by Google Firebase for backend services.",
		imageUrl:
			"https://res.cloudinary.com/dbg68gzpx/image/upload/v1738499797/estate_el0plo.webp",

		wrapper1Bg: "bg-cyan-900",
		wrapper2Bg: "bg-blue-900",
		bgColorFrom: "from-[#151C23]",
		bgColorTo: "to-[#2A3843]",
		projectLink: "https://estate-2aef8.web.app/",
	},
	{
		id: 4,
		title: "Taskdom",
		description:
			"A project management system for task assignments and real-time chat. Built with Firebase Realtime Database for seamless collaboration and data syncing.",
		imageUrl:
			"https://res.cloudinary.com/dbg68gzpx/image/upload/v1738499810/taskdom_ibtmr6.webp",

		wrapper1Bg: "bg-red-900",
		wrapper2Bg: "bg-orange-900",
		bgColorFrom: "from-[#40648D]",
		bgColorTo: "to-[#3D6087]",
		projectLink: "https://taskdom.web.app/",
	},
];
const Projects: React.FC<{ casesRef: React.RefObject<HTMLElement> }> = ({
	casesRef,
}) => {
	return (
		<section
			ref={casesRef}
			className="flex items-center flex-col w-full bg-[#232323] "
		>
			<div className="flex  w-full px-2 py-20 md:py-40 max-w-7xl ">
				<h2 className="text-4xl md:text-7xl text-white ">CASES</h2>
			</div>

			<ul className="flex relative w-full justify-center items-center flex-col text-white  ">
				{projectData.map(project => (
					<ProjectCards
						projectLink={project.projectLink}
						key={project.id}
						id={project.id}
						title={project.title}
						imageUrl={project.imageUrl}
						description={project.description}
						wrapper1Bg={project.wrapper1Bg}
						wrapper2Bg={project.wrapper2Bg}
						bgColorFrom={project.bgColorFrom}
						bgColorTo={project.bgColorTo}
					/>
				))}
			</ul>
		</section>
	);
};

export default Projects;
