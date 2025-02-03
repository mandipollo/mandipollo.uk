import React from "react";
import SkillButton from "../../../components/ui/SkillButton";
import HoverButton from "../../../components/ui/HoverButton";
import DottedSpan from "../../../components/ui/DottedSpan";

const Projects: React.FC = () => {
	return (
		<section className="flex flex-col py-20 justify-center items-center gap-4 px-24 ">
			<p className="font-jetBrains text-xs text-gray-400">Lots of coffee ..</p>
			<h2 className="text-6xl">PROJECTS</h2>

			<ul className="flex flex-col  pt-28 gap-40">
				<li className="flex flex-row justify-center items-center hover:shadow-md gap-10 bg-white rounded-md p-4">
					<figure className=" w-1/2">
						<img
							src="https://res.cloudinary.com/dbg68gzpx/image/upload/v1738499780/urbanThreads_pyth2i.webp"
							alt="urbanThreads"
						/>
					</figure>
					<div className="flex flex-col gap-4 ">
						<h4 className="text-2xl underline">UrbanThreads</h4>
						<p className="flex text-gray-400 text-xs">
							E-commerce web app with guest/member and admin cms.
						</p>
						<div className="flex flex-row flex-wrap gap-2 text-white text-xs">
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
						<div className="flex flex-col flex-1 border-t items-center text-xs text-gray-400 font-jetBrains">
							<div className="flex flex-1"></div>
							<div className="flex flex-wrap flex-row items-center">
								<HoverButton text="GUEST CHECKOUT" afterText="MEMBER" />
								<DottedSpan />
								<HoverButton text="FILTER" afterText="CART" />
								<DottedSpan />
								<HoverButton text="ORDER HISTORY" afterText="UPDATE STATUS" />
								<DottedSpan />
								<HoverButton
									text="CRUD PRODUCTS"
									afterText="SHIP/CANCEL ORDERS"
								/>
							</div>
						</div>
					</div>
				</li>
				<li className="flex flex-row justify-center items-center hover:shadow-md  gap-10 bg-white rounded-md p-4">
					<div className="flex flex-col gap-4 ">
						<h4 className="text-2xl underline">Lumishade</h4>
						<p className="flex text-gray-400 text-xs">Web shop frontend</p>
						<div className="flex flex-row flex-wrap gap-2 text-white text-xs">
							<SkillButton text="TYPESCRIPT" bgColor="bg-[#234A84]" />
							<SkillButton
								text="NEXTJS"
								bgColor="bg-white"
								textColor="text-black"
							/>
							<SkillButton text="REDUX/TOOLKIT" bgColor="bg-[#764ABC]" />
							<SkillButton text="TAILWIND" bgColor="bg-[#38BDF8]" />
							<SkillButton text="FRAMER MOTION" bgColor="bg-[#FF0050]" />
						</div>
						<div className="flex flex-col flex-1 border-t items-center text-xs text-gray-400 font-jetBrains">
							<div className="flex flex-1"></div>
							<div className="flex flex-wrap flex-row items-center">
								<HoverButton text="STAGGERED" afterText="SHOP" />
								<span className="h-1 w-1 bg-orange-500 rounded-full"></span>
								<HoverButton text="FILTER" afterText="CART" />
							</div>
						</div>
					</div>
					<figure className=" w-1/2">
						<img
							src="https://res.cloudinary.com/dbg68gzpx/image/upload/v1738499821/lumishade_sp32sm.webp"
							alt="lumishade"
						/>
					</figure>
				</li>
				<li className="flex hover:shadow-md justify-center items-center flex-row  gap-10 bg-white rounded-md p-4">
					<figure className=" w-1/2">
						<img
							src="https://res.cloudinary.com/dbg68gzpx/image/upload/v1738499797/estate_el0plo.webp"
							alt="estate"
						/>
					</figure>
					<div className="flex flex-col gap-4 ">
						<h4 className="text-2xl underline">Estate</h4>
						<p className="flex text-gray-400 text-xs">Real estate tracker</p>
						<div className="flex flex-row flex-wrap gap-2 text-white text-xs">
							<SkillButton text="REACT" bgColor="bg-[#61DAFB]" />
							<SkillButton text="REDUX/TOOLKIT" bgColor="bg-[#764ABC]" />
							<SkillButton text="MATERIAL UI" bgColor="bg-[#0081CB]" />
							<SkillButton text="GOOGLE CLOUD" bgColor="bg-[#4285F4]" />
							<SkillButton
								text="RIGHTMOVE API"
								bgColor="bg-black"
								textColor="text-white"
							/>
						</div>
						<div className="flex flex-col flex-1 border-t items-center text-xs text-gray-400 font-jetBrains">
							<div className="flex flex-1"></div>
							<div className="flex flex-wrap flex-row items-center">
								<HoverButton text="AUTHENTICATION" afterText="LIVE" />
								<DottedSpan />
								<HoverButton text="FILTER" afterText="HISTORY" />
								<DottedSpan />
								<HoverButton text="GLOBAL" afterText="CRUD" />
								<DottedSpan />
							</div>
						</div>
					</div>
				</li>
				<li className="flex flex-row justify-center items-center hover:shadow-md gap-10 bg-white rounded-md p-4">
					<div className="flex flex-col gap-4 ">
						<h4 className="text-2xl underline">Taskdom</h4>
						<p className="flex text-gray-400 text-xs">
							Team task management tool
						</p>
						<div className="flex flex-row flex-wrap gap-2 text-white text-xs">
							<SkillButton text="TYPESCRIPT" bgColor="bg-[#234A84]" />
							<SkillButton text="REACT" bgColor="bg-[#61DAFB]" />
							<SkillButton text="REDUX/TOOLKIT" bgColor="bg-[#764ABC]" />
							<SkillButton text="TAILWIND" bgColor="bg-[#38BDF8]" />
							<SkillButton text="GOOGLE CLOUD" bgColor="bg-[#4285F4]" />
						</div>
						<div className="flex flex-col flex-1 border-t items-center text-xs text-gray-400 font-jetBrains">
							<div className="flex flex-1"></div>
							<div className="flex flex-wrap flex-row items-center">
								<HoverButton text="TASK" afterText="ADMIN" />
								<DottedSpan />
								<HoverButton text="MESSANGER" afterText="ASSIGN" />
								<DottedSpan />
								<HoverButton text="TRACK TASKS" afterText="UPDATE" />
							</div>
						</div>
					</div>
					<figure className=" w-1/2">
						<img
							src="https://res.cloudinary.com/dbg68gzpx/image/upload/v1738499810/taskdom_ibtmr6.webp"
							alt="taskdom"
						/>
					</figure>
				</li>
			</ul>
		</section>
	);
};

export default Projects;
