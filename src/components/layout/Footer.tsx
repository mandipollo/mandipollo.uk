import React from "react";
import useLocalTime from "../../hooks/useLocalTime";
import DottedSpan from "../ui/DottedSpan";

const Footer: React.FC = () => {
	const { time } = useLocalTime("Europe/London");
	const { time: timeNyc } = useLocalTime("America/New_York");
	return (
		<footer className="flex flex-col w-full bg-black text-gray-400 text-xs font-jetBrains ">
			<div className="grid grid-cols-2 md:grid-cols-[_2fr_6fr_2fr] border-t-[0.5px] border-gray-600">
				<div className="flex justify-center space-x-2 items-center border-l-[0.5px] border-gray-600 p-4">
					<p>LONDON</p>
					<DottedSpan />
					<p>{time}</p>
					<DottedSpan />
					<p>GMT</p>
				</div>
				<div className="hidden md:flex justify-center items-center border-l-[0.5px] border-gray-600 p-4"></div>
				<div className="flex space-x-2 justify-center items-center border-x-[0.5px] border-gray-600 p-4">
					<p>NYC</p>
					<DottedSpan />
					<p>{timeNyc}</p>
					<DottedSpan />
					<p>EST</p>
				</div>
			</div>
			<div className="flex border-t-[0.5px] border-gray-600 p-6 justify-center items-center ">
				<p> MANDIPOLLO 2025. ALL RIGHTS RESERVED.</p>
			</div>
		</footer>
	);
};

export default Footer;
