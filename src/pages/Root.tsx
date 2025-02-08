import { Outlet } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const Root = () => {
	return (
		<main className="flex justify-center items-center relative flex-col w-full overflow-auto font-extralight ">
			<Navbar />
			<section className="relative w-full flex flex-1 flex-col justify-center items-center">
				<Outlet />
			</section>
			<Footer />
		</main>
	);
};

export default Root;
