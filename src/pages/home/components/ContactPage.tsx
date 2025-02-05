import React, { useRef } from "react";
import ContactForm from "../../../components/form/ContactForm";
import useThreadHeight from "../../../hooks/useThreadHeight";
import Thread from "../../../components/ui/Thread";

const ContactPage: React.FC = () => {
	const leftLineRef = useRef<HTMLDivElement>(null);

	const { numberOfThreads } = useThreadHeight({ leftLineRef });
	return (
		<section className="flex flex-row w-screen bg-black ">
			<div
				ref={leftLineRef}
				className=" flex w-28 flex-col justify-between border-y-[0.5px] border-gray-600 "
			>
				{Array.from({ length: numberOfThreads }).map((_, index) => (
					<Thread index={index} key={index} />
				))}
			</div>
			<div className=" flex flex-1 border-y-[0.5px] border-gray-600 flex-col">
				<div className=" gap-10 relative pt-48 border-x-[0.5px] border-gray-600 flex-col  flex flex-1 justify-center items-center">
					<video
						className="w-full h-full absolute top-0 bottom-0 left-0"
						src="https://res.cloudinary.com/dbg68gzpx/video/upload/v1738698815/bgVidoe_rhixav.mp4"
						autoPlay
						loop
						muted
					></video>
					<div className="text-white max-w-[40em] w-full text-center text-4xl font-bold z-10">
						<h4 className="">READY TO JOIN</h4>
						<h4>
							THE {""}
							<span className="text-brightOrange">WINNING</span> SIDE?
						</h4>
					</div>
					<ContactForm />
				</div>
			</div>
			<div className=" w-28 flex border-y-[0.5px] border-gray-600 "></div>
		</section>
	);
};

export default ContactPage;
