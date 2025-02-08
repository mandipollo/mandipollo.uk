import React from "react";
import DottedButton from "../../../components/ui/DottedButtons";
import SkillButton from "../../../components/ui/SkillButton";

const Tech: React.FC = () => {
	return (
		<section className="relative flex flex-col py-20 justify-center items-center gap-4 max-w-4xl ">
			<div className="text-center flex flex-col gap-2">
				<h2 className="text-2xl md:text-4xl">TECH TOOLS </h2>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-2 bg-white p-4 w-full rounded-md text-sm">
				<div className="bg-gray-100 rounded-md flex flex-col gap-4 p-4">
					<div className="flex flex-row flex-wrap gap-2">
						<DottedButton
							text="TASKDOM"
							bgColor="bg-white"
							borderColor="border-slate-300"
						/>
						<DottedButton
							text="URBANTHREADS"
							bgColor="bg-white"
							borderColor="border-slate-300"
						/>
						<DottedButton
							text="ESTATE"
							bgColor="bg-white"
							borderColor="border-slate-300"
						/>
						<DottedButton
							text="LUMISHADE"
							bgColor="bg-white"
							borderColor="border-slate-300"
						/>
					</div>
				</div>
				<div className="bg-[#121212] rounded-md flex flex-wrap gap-2 p-4 text-white text-xs">
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
					<SkillButton text="REDUX/TOOLKIT" bgColor="bg-[#764ABC]" />
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
		</section>
	);
};

export default Tech;
