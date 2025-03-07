import React from "react";
import TechContainer from "../../../components/cards/TechContainer";

const Hero: React.FC = () => {
	return (
		<section className="flex w-full py-36 ">
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full h-full border-t py-2">
				<address className="flex flex-row justify-between md:justify-normal gap-4 not-italic ">
					<div>
						<p className="text-gray-400">Location</p>
						<p>Farnborough,</p>
						<p>United Kingdom</p>
					</div>
					<div>
						<p className="text-gray-400">Contact</p>
						<p>mandipollo65@gmail.com</p>
					</div>
				</address>
				<div className="flex ">
					<div className="flex flex-col w-full max-w-md gap-4 ">
						<p className="text-xl">
							Hi, I&apos;m Mandip, a Independent frontend developer based in
							Farnborough, UK.
						</p>
						<p>
							I specialize in creating accessible websites using modern
							JavaScript or TypeScript, React, HTML, and CSS.
						</p>
						<p>Currently, I&apos;m battling with database and DSA</p>
						<p>
							When I&apos;m not coding, you&apos;ll find me working on my
							aquascape or riding my E-Motorbike.
						</p>
						<div className="rounded-md  flex flex-wrap gap-2 text-white text-xs">
							<TechContainer />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
