import React from "react";
import Hero from "./components/Hero";
import Tech from "./components/Tech";
import Projects from "./components/Projects";
import ContactPage from "./components/ContactPage";

const HomePage: React.FC = () => {
	return (
		<main className="flex h-full flex-col justify-center items-center bg-[#F7F7F7]">
			<Hero />
			<Tech />
			<Projects />
			<ContactPage />
		</main>
	);
};

export default HomePage;
