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
		<section className="min-w-screen min-h-screen flex flex-col h-full w-full text-center ">
			<div className="mt-10 md:mt-14 w-full flex justify-center items-center flex-1 border-y flex-row ">
				<div
					ref={leftLineRef}
					className="h-full w-8 md:w-28 relative flex flex-col items-stretch justify-between"
				>
					{Array.from({ length: numberOfThreads }).map((_, index) => (
						<Thread index={index} key={index} />
					))}
				</div>
				<div className=" flex w-full justify-center items-center flex-1 border-x h-full">
					<div className="flex justify-center items-center flex-col gap-2 flex-1 ">
						<span className="text-2xl md:text-6xl font-extrabold">
							MANDIP GURUNG
						</span>
						<span className="text-2xl md:text-6xl font-semibold">
							FRONTEND DEVELOPER
						</span>

						<p className="font-thin">
							Here to help you build functionally sound web components
						</p>
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
				<div className="h-full w-8 md:w-28"></div>
			</div>
			<div className="h-16 border-b flex justify-center items-center w-full ">
				<div className=" w-8 md:w-28"></div>
				<div className="border-x flex space-x-2 justify-center w-full h-full items-center font-jetBrains text-xs">
					<p>LONDON</p>
					<DottedSpan />
					<p>{time}</p>
					<DottedSpan />
					<p>GMT</p>
				</div>
				<div className=" w-8 md:w-28 "></div>
			</div>
		</section>
	);
};

export default Hero;
