import React from "react";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import ContactSection from "./components/ContactSection";

const HomePage: React.FC = () => {
	return (
		<section className="flex w-full h-full flex-col justify-center items-center  ">
			<Hero />
			<Projects />
			<ContactSection />
		</section>
	);
};

export default HomePage;
