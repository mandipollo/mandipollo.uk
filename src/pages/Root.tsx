import { Outlet } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const Root = () => {
	return (
		<div className="flex h-full justify-center items-center relative flex-col w-full overflow-auto font-extralight ">
			<header className="fixed top-2 md:top-6 flex w-full z-50 justify-center items-center">
				<Navbar />
			</header>
			<main className="relative w-full h-full flex flex-1 flex-col justify-center items-center">
				<Outlet />
			</main>
			<footer className="flex flex-col w-full bg-black text-gray-400 text-xs font-jetBrains ">
				<Footer />
			</footer>
		</div>
	);
};

export default Root;
