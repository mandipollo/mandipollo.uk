import React, { useRef } from "react";
import HoverButton from "../../../components/ui/HoverButton";
import DottedSpan from "../../../components/ui/DottedSpan";
import Thread from "../../../components/ui/Thread";
import useThreadHeight from "../../../hooks/useThreadHeight";
import useLocalTime from "../../../hooks/useLocalTime";

const Hero: React.FC = () => {
	// filter thread markings

	const leftLineRef = useRef<HTMLDivElement>(null);
	const { numberOfThreads } = useThreadHeight({ leftLineRef });

	// local time state
	const { time } = useLocalTime("Europe/London");
	return (
		<section className="min-w-screen h-screen flex flex-col w-full text-center bg-[#132F58]  text-white ">
			<div className="mt-8 md:mt-14 w-full flex justify-center items-center flex-1 border-y border-gray-600 flex-row ">
				<div
					ref={leftLineRef}
					className="h-full w-8 md:w-28 relative flex flex-col items-stretch justify-between"
				>
					{Array.from({ length: numberOfThreads }).map((_, index) => (
						<Thread index={index} key={index} />
					))}
				</div>
				<div className=" flex w-full justify-center items-center flex-1 border-x border-gray-600 h-full">
					<div className="flex justify-center items-center flex-col gap-2 flex-1 ">
						<span className="text-5xl md:text-7xl font-extrabold">
							FREELANCE
						</span>
						<span className="text-5xl md:text-7xl font-semibold">
							FRONT-END
						</span>
						<span className="text-5xl md:text-7xl font-semibold">
							DEVELOPER
						</span>

						<p>Here to help you build functionally sound web applications</p>
						<div className="flex flex-row space-x-2">
							<HoverButton
								hoverBgColor="hover:bg-brightOrange"
								bgColor="bg-black"
								textColor="text-white"
								borderRadius="rounded-3xl"
								text="BOOK A INTRO CALL"
							></HoverButton>
						</div>
					</div>
				</div>
				<div className="h-full w-8 md:w-28 "></div>
			</div>
			<div className="h-16 border-b border-gray-600 flex justify-center items-center ">
				<div className=" w-20 md:w-40"></div>
				<div className="border-x border-gray-600 flex space-x-2 justify-center w-full h-full items-center font-jetBrains text-xs">
					<p>LONDON</p>
					<DottedSpan />
					<p>{time}</p>
					<DottedSpan />
					<p>GMT</p>
				</div>
				<div className=" w-20 md:w-40 "></div>
			</div>
		</section>
	);
};

export default Hero;
