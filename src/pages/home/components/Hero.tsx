import React from "react";
import LabelSkill from "../../../components/ui/LabelSkill";

const Hero: React.FC = () => {
	return (
		<section className="flex w-full py-36 ">
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full h-full border-t py-2">
				<div className="flex flex-row justify-between md:justify-normal gap-4">
					<div>
						<p className="text-gray-400">Location</p>
						<p>Farnborough,</p>
						<p>United Kingdom</p>
					</div>
					<div>
						<p className="text-gray-400">Contact</p>
						<p>mandipollo65@gmail.com</p>
					</div>
				</div>
				<div className="flex ">
					<div className="flex flex-col w-full max-w-md gap-4 ">
						<p className="text-xl">
							Hi, I&apos;m Mandip, a freelance web developer based in
							Farnborough, UK.
						</p>
						<p>
							I specialize in creating bespoke websites with a focus on user
							accessibility and semantically correct HTML using modern
							JavaScript or TypeScript, React, HTML, and CSS.
						</p>
						<p>Currently, I&apos;m strengthening my backend skills.</p>
						<p>
							When I&apos;m not coding, you&apos;ll find me working on my
							aquascape or riding my E-Motorbike.
						</p>
						<div className="rounded-md  flex flex-wrap gap-2 text-white text-xs">
							<LabelSkill text="JS" bgColor="bg-yellow-500" />
							<LabelSkill text="TYPESCRIPT" bgColor="bg-[#234A84]" />
							<LabelSkill text="REACT" bgColor="bg-[#61DAFB]" />

							<LabelSkill
								text="NEXTJS"
								bgColor="bg-black"
								textColor="text-white"
							/>

							<LabelSkill text="NODEJS" bgColor="bg-[#339933]" />
							<LabelSkill
								text="EXPRESS"
								bgColor="bg-black"
								textColor="text-white"
							/>
							<LabelSkill
								text="MONGODB"
								bgColor="bg-black"
								textColor="text-white"
							/>
							<LabelSkill text="MONGOOSE" bgColor="bg-[#880000]" />
							<LabelSkill text="REACT-ROUTER" bgColor="bg-[#262626]" />
							<LabelSkill text="REDUX/RTK" bgColor="bg-[#764ABC]" />
							<LabelSkill text="JEST/REACT" bgColor="bg-[#C21325]" />

							<LabelSkill text="CSS" bgColor="bg-[#1572B6]" />
							<LabelSkill text="SASS/LESS" bgColor="bg-[#CC6699]" />
							<LabelSkill text="TAILWIND" bgColor="bg-[#38BDF8]" />
							<LabelSkill text="MATERIAL UI" bgColor="bg-[#0081CB]" />
							<LabelSkill text="HTML5" bgColor="bg-[#E34F26]" />
							<LabelSkill text="FRAMER MOTION" bgColor="bg-[#FF0050]" />

							<LabelSkill text="GIT" bgColor="bg-[#F05032]" />
							<LabelSkill text="GOOGLE CLOUD" bgColor="bg-[#4285F4]" />
							<LabelSkill text="AWS" bgColor="bg-[#FF9900]" />
							<LabelSkill text="CI/CD" bgColor="bg-[#262626]" />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
