import React from "react";
import Hero from "./components/Hero";
import Tech from "./components/Tech";
import Projects from "./components/Projects";
import ContactPage from "./components/ContactPage";
import { useRefContext } from "../../context/RefContext";

const HomePage: React.FC = () => {
	const refs = useRefContext();
	return (
		<div className="flex w-full h-full flex-col justify-center items-center bg-[#F7F7F7]">
			<Hero />
			<Tech techRef={refs.tech} />
			<Projects casesRef={refs.cases} />
			<ContactPage contactRef={refs.contact} />
		</div>
	);
};

export default HomePage;
