import React from "react";
import SkillButton from "../../../components/ui/SkillButton";

const About: React.FC<{ aboutRef: React.RefObject<HTMLElement> }> = ({
	aboutRef,
}) => {
	return (
		<section
			className="flex px-2 flex-col py-10 md:py-20 max-w-7xl w-full"
			ref={aboutRef}
		>
			<div className="flex items-center py-20 md:py-40">
				<h1 className="text-4xl md:text-7xl">About Me</h1>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full h-full max-w-6xl text-md md:text-2xl leading-snug ">
				<div className="flex flex-col gap-4">
					<p>
						Hi, I'm Mandip, a freelance web developer based in Farnborough, UK.
					</p>
					<p>
						I specialize in creating bespoke websites with a focus on user
						accessibility and semantically correct HTML using modern JavaScript
						or TypeScript, React, HTML, and CSS.
					</p>
					<p>Currently, I’m strengthening my backend skills.</p>
					<p>
						When I'm not coding, you’ll find me working on my aquascape or
						riding my E-Motorbike.
					</p>
				</div>

				<div className=" flex bg-[#121212] justify-center items-center rounded-md">
					<div className="rounded-md  flex flex-wrap gap-2 p-4 text-white text-xs">
						<SkillButton text="JS" bgColor="bg-yellow-500" />
						<SkillButton text="TYPESCRIPT" bgColor="bg-[#234A84]" />
						<SkillButton text="REACT" bgColor="bg-[#61DAFB]" />

						<SkillButton
							text="NEXTJS"
							bgColor="bg-white"
							textColor="text-black"
						/>

						<SkillButton text="NODEJS" bgColor="bg-[#339933]" />
						<SkillButton
							text="EXPRESS"
							bgColor="bg-white"
							textColor="text-black"
						/>
						<SkillButton
							text="MONGODB"
							bgColor="bg-white"
							textColor="text-black"
						/>
						<SkillButton text="MONGOOSE" bgColor="bg-[#880000]" />
						<SkillButton text="REACT-ROUTER" bgColor="bg-[#262626]" />
						<SkillButton text="REDUX/RTK" bgColor="bg-[#764ABC]" />
						<SkillButton text="JEST/REACT" bgColor="bg-[#C21325]" />

						<SkillButton text="CSS" bgColor="bg-[#1572B6]" />
						<SkillButton text="SASS/LESS" bgColor="bg-[#CC6699]" />
						<SkillButton text="TAILWIND" bgColor="bg-[#38BDF8]" />
						<SkillButton text="MATERIAL UI" bgColor="bg-[#0081CB]" />
						<SkillButton text="HTML5" bgColor="bg-[#E34F26]" />
						<SkillButton text="FRAMER MOTION" bgColor="bg-[#FF0050]" />

						<SkillButton text="GIT" bgColor="bg-[#F05032]" />
						<SkillButton text="GOOGLE CLOUD" bgColor="bg-[#4285F4]" />
						<SkillButton text="AWS" bgColor="bg-[#FF9900]" />
						<SkillButton text="CI/CD" bgColor="bg-[#262626]" />
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
