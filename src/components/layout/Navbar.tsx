import HoverButton from "../ui/HoverButton";

const Navbar = () => {
	return (
		<header className="fixed top-2 md:top-6 flex w-full z-50 justify-center items-center">
			<nav className=" flex flex-row justify-between text-xs mx-8 items-center max-w-4xl w-full bg-white p-4 rounded-3xl border shadow-sm">
				<div className="flex items-center">
					<figure className="h-full w-full">
						<img src="/logo.svg" alt="logo" className="w-8 h-8" />
					</figure>
				</div>

				<div className="hidden md:flex justify-center items-center font-jetBrains text-gray-500">
					<ul className="flex flex-row space-x-4 items-center ">
						<li>
							<HoverButton text="TECH-STACK" />
						</li>

						<li>
							<span className="h-4 w-1 flex border-l border-gray-400"></span>
						</li>
						<li className=" border-right">
							<HoverButton text="OFFER" />
						</li>
						<li>
							<span className="h-4 w-1 flex border-l border-gray-400"></span>
						</li>
						<li>
							<HoverButton text="CASES" />
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
		</header>
	);
};

export default Navbar;
