import React from "react";

const Footer: React.FC = () => {
	return (
		<footer className="flex flex-col w-full bg-black text-gray-400 text-xs font-jetBrains ">
			<div className="grid grid-cols-[_1fr_6fr_1fr] border-t-[0.5px] border-gray-600">
				<div className="flex justify-center items-center border-l-[0.5px] border-gray-600 p-4">
					time
				</div>
				<div className="flex justify-center items-center border-l-[0.5px] border-gray-600 p-4">
					date
				</div>
				<div className="flex justify-center items-center border-x-[0.5px] border-gray-600 p-4">
					nyc
				</div>
			</div>
			<div className="grid grid-cols-2 border-t-[0.5px] border-gray-600">
				<div className="flex justify-center items-center p-6">
					MANDIPOLLO 2025. ALL RIGHTS RESERVED.
				</div>

				<div className="flex justify-center items-center gap-4 p-6">
					<p>DRIBBLE</p>
					<p>LINKEDIN</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
