import HoverButton from "../ui/HoverButton";
import { useRefContext } from "../../context/RefContext";

const Navbar = () => {
	const refs = useRefContext();

	const scrollToSection = (section: keyof typeof refs) => {
		refs[section]?.current?.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<nav className=" flex flex-row justify-between text-xs mx-8 items-center max-w-4xl w-full bg-white p-4 rounded-3xl border shadow-sm">
			<div className="flex items-center">
				<figure className="h-full w-full">
					<img src="/logo.svg" alt="logo" className="w-8 h-8" />
				</figure>
			</div>

			<div className="hidden md:flex justify-center items-center font-jetBrains text-gray-500">
				<ul className="flex flex-row space-x-4 items-center ">
					<li onClick={() => scrollToSection("tech")}>
						<HoverButton text="TECH" />
					</li>

					<li>
						<span className="h-4 w-1 flex border-l border-gray-400"></span>
					</li>
					<li
						onClick={() => scrollToSection("cases")}
						className=" border-right"
					>
						<HoverButton text="CASES" />
					</li>
					<li>
						<span className="h-4 w-1 flex border-l border-gray-400"></span>
					</li>
					<li onClick={() => scrollToSection("contact")}>
						<HoverButton text="CONTACT" />
					</li>
				</ul>
			</div>
			<div className="flex justify-end items-center">
				<HoverButton
					text="Work with us"
					afterText="lets talk"
					bgColor="bg-black"
					textColor="text-white"
					borderRadius="rounded-2xl"
					image="/arrow-right.svg"
					hoverBgColor="hover:bg-brightOrange"
				/>
			</div>
		</nav>
	);
};

export default Navbar;
