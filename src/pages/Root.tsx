import { Outlet } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const Root = () => {
	return (
		<div className="flex h-full justify-center items-center relative flex-col w-full font-openSans px-2 md:px-8 text-xs md:text-sm">
			<header className="fixed top-0 left-2 md:left-8 right-2 md:right-8 z-10 ">
				<Navbar />
			</header>
			<main
				id="main-content"
				className="relative mt-[198px] w-full h-full flex flex-1 flex-col justify-center items-center"
			>
				<Outlet />
			</main>
			<footer className="flex flex-col w-full text-xs ">
				<Footer />
			</footer>
		</div>
	);
};

export default Root;
