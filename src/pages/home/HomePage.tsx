import React from "react";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import ContactPage from "./components/ContactPage";
import { useRefContext } from "../../context/RefContext";
import About from "./components/About";

const HomePage: React.FC = () => {
	const refs = useRefContext();
	return (
		<div className="flex w-full h-full flex-col justify-center items-center bg-[#F1F0E8] ">
			<Hero />
			<About aboutRef={refs.about} />
			<Projects casesRef={refs.cases} />
			<ContactPage contactRef={refs.contact} />
		</div>
	);
};

export default HomePage;
