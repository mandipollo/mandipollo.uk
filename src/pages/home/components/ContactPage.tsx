import React from "react";
import ContactForm from "../../../components/form/ContactForm";

const ContactPage: React.FC = () => {
	return (
		<section className="flex flex-row w-screen bg-gradient-to-b from-black from-60% via-[#0C0C0C] via-90% to-[#1E1E1E] ">
			<div className="mt-14 flex border-y-[0.5px] border-gray-600 "></div>
			<div className="mt-14 flex flex-1 border-y-[0.5px] border-gray-600 flex-col">
				<div className="mx-24 gap-10 pt-48 border-x-[0.5px] border-gray-600 flex-col  flex flex-1 justify-center items-center">
					<div className="text-white max-w-[40em] w-full text-center text-4xl font-bold">
						<h4 className="">READY TO JOIN</h4>
						<h4>
							THE {""}
							<span className="text-brightOrange">WINNING</span> SIDE?
						</h4>
					</div>
					<ContactForm />
				</div>
			</div>
			<div className="mt-14 flex border-y-[0.5px] border-gray-600 "></div>
		</section>
	);
};

export default ContactPage;
