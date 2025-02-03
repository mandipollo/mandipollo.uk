import React from "react";
import SkillButton from "../ui/SkillButton";

const ProjectCards = () => {
	return (
		<div className="flex flex-col gap-10">
			<div className="flex flex-col">
				<h4 className="text-2xl">
					UrbanThreads
					<span className="text-xs font-jetBrains text-gray-400">
						Ecommerce app with custom built admin cms
					</span>
				</h4>
				<div className="flex flex-row gap-2 text-white text-xs">
					<SkillButton text="TYPESCRIPT" bgColor="bg-[#234A84]" />
					<SkillButton text="REACT" bgColor="bg-[#61DAFB]" />
					<SkillButton text="NODEJS" bgColor="bg-[#339933]" />

					<SkillButton
						text="MONGODB"
						bgColor="bg-white"
						textColor="text-black"
					/>
					<SkillButton text="REDUX/TOOLKIT" bgColor="bg-[#764ABC]" />
					<SkillButton text="TAILWIND" bgColor="bg-[#38BDF8]" />
					<SkillButton text="GOOGLE CLOUD" bgColor="bg-[#4285F4]" />
				</div>
			</div>
			<figure className="hover:shadow-md">
				<img
					src="https://res.cloudinary.com/dbg68gzpx/image/upload/v1738499780/urbanThreads_pyth2i.webp"
					alt="urbanThreads"
				/>
			</figure>
		</div>
	);
};

export default ProjectCards;
