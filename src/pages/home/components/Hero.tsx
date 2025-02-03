import React, { useEffect, useState } from "react";
import HoverButton from "../../../components/ui/HoverButton";
import StaggeredAnimationText from "../../../components/animation/StaggerAnimation";

const Hero = () => {
	const [time, setTime] = useState<string>("");

	useEffect(() => {
		//Implementing the setInterval method
		const interval = setInterval(() => {
			const formatter = new Intl.DateTimeFormat([], {
				timeZone: "Europe/London",
				hour: "numeric",
				minute: "numeric",
			});

			const time = formatter.format(new Date());

			setTime(time);
		}, 1000);

		//Clearing the interval
		return () => clearInterval(interval);
	}, [time]);

	return (
		<section className="min-w-screen min-h-screen flex flex-col ">
			<div className="mt-14 flex flex-1 border flex-col">
				<div className="mx-24 border-x flex flex-1">
					<div className="flex justify-center items-center flex-col gap-2 flex-1">
						<span className="text-6xl font-extrabold">MANDIP GURUNG</span>
						<span className="text-6xl font-semibold">FRONTEND DEVELOPER</span>

						<p className="text-gray-400">
							Here to help you build functionally sound web components
						</p>
						<div className="flex flex-row space-x-2">
							<HoverButton
								bgColor="bg-black"
								textColor="text-white"
								borderRadius="rounded-3xl"
								text="BOOK A INTRO CALL"
							></HoverButton>
						</div>
					</div>
				</div>
				<div className="border-t h-16 flex justify-center items-center ">
					<div className="border-x mx-24 flex flex-1 h-full">
						<div className="mx-52 border-x flex flex-1 justify-center items-center h-full gap-2 font-jetBrains text-xs text-gray-400">
							<p>LONDON</p>
							<span className="h-4 w-1 flex border-l border-gray-400"></span>
							<p>{time}</p>
							<p>ON/OFF FEATURE</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
