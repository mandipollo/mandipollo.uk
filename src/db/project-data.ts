import { ProjectProps } from "../types/project-types";

export const projectData: ProjectProps[] = [
	{
		id: 4,
		title: "UrbanThreads",
		year: 2024,
		description:
			"UrbanThreads is a React TypeScript-based e-commerce platform designed for a smooth shopping experience. It features a dedicated admin CMS, enabling administrators to add/remove products, manage inventory, and process orders efficiently. Customers can checkout as guests or members.",
		imageUrl:
			"https://res.cloudinary.com/dbg68gzpx/image/upload/v1741250714/urbanThreads-potrait_lxdjnp.webp",

		projectLink: "https://urbandthreads.netlify.app/",
		projectType: "E-commerce/Admin Panel",
		tech: "React ,Typescript ,MongoDB",
	},
	{
		id: 3,
		title: "Lumshade",
		year: 2024,
		description:
			"A Next.js-based e-commerce platform currently in development, focusing on performance, scalability, and a seamless shopping experience.",
		imageUrl:
			"https://res.cloudinary.com/dbg68gzpx/image/upload/v1741250727/lumishade-potrait_cqh99x.webp",

		projectLink: "https://lumishade.netlify.app/",
		projectType: "E-commerce",
		tech: "NextJS ,Typescript ,MongoDB",
	},
	{
		id: 2,
		title: "Estate",
		year: 2023,
		description:
			"A real estate app that fetches the latest property prices using the Rightmove API.Powered by Google Firebase for backend services.",
		imageUrl:
			"https://res.cloudinary.com/dbg68gzpx/image/upload/v1741250739/estate-potrait_t7zada.webp",

		projectLink: "https://estate-2aef8.web.app/",
		projectType: "Real Estate",
		tech: "React ,Firebase",
	},
	{
		id: 1,
		title: "Taskdom",
		year: 2023,
		description:
			"A project management system for task assignments and real-time chat. Built with Firebase Realtime Database for seamless collaboration and data syncing.",
		imageUrl:
			"https://res.cloudinary.com/dbg68gzpx/image/upload/v1740905488/taskdom-potrait_h9nzav.webp",

		projectLink: "https://taskdom.web.app/",
		projectType: "Project-mangement",
		tech: "React ,Firebase",
	},
];
