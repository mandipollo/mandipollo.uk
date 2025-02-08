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
				className="hidden md:flex w-8 md:w-28 flex-col justify-between border-y-[0.5px] border-gray-600 p-1"
			>
				{Array.from({ length: numberOfThreads }).map((_, index) => (
					<Thread index={index} key={index} />
				))}
			</div>
			<div className=" flex flex-1 border-y-[0.5px] border-gray-600 flex-col">
				<div className=" px-2 gap-10 relative pt-20 md:pt-48 border-x-[0.5px] border-gray-600 flex-col  flex flex-1 justify-center items-center">
					<div className="text-white max-w-[40em] w-full text-center text-2xl md:text-4xl font-bold">
						<h4 className="">HAVE A</h4>
						<h4>
							<span className="text-brightOrange">PROJECT</span> IN MIND?
						</h4>
					</div>
					<ContactForm />
				</div>
			</div>
			<div className=" w-8 md:w-28 hidden md:flex border-y-[0.5px] border-gray-600 p-1 "></div>
		</section>
	);
};

export default ContactPage;
