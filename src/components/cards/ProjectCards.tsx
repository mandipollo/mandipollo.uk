import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import React, { useRef, useState } from "react";

interface ProjectCardProps {
	id: number;
	title: string;
	description: string;
	imageUrl: string;
	wrapper1Bg: string;
	wrapper2Bg: string;
	backgroundTo: string;
	backgroundFrom: string;
}

const imageVariants = {
	initial: (isOdd: boolean) => ({
		x: isOdd ? "-60px" : "60px",
	}),
	animate: (isOdd: boolean) => ({
		x: isOdd ? "0px" : "0px", // Move left for odd, right for even
		transition: { duration: 0.8, ease: "easeInOut" },
	}),
};

const wrapperVariants1 = {
	initial: (isOdd: boolean) => ({
		x: isOdd ? "-60px" : "60px",
		opacity: 1,
	}),
	animate: (isOdd: boolean) => ({
		x: isOdd ? "-100%" : "100%", // Move left for odd, right for even
		transition: { duration: 1, ease: "easeInOut" },
	}),
};

const wrapperVariants = {
	initial: (isOdd: boolean) => ({
		x: isOdd ? "30px" : "-30px", // Smaller initial offset
		opacity: 1,
	}),
	animate: (isOdd: boolean) => ({
		x: isOdd ? "-100%" : "100%", // Same direction as wrapper1
		transition: { duration: 0.4, ease: "easeInOut" },
	}),
};

const ProjectCards: React.FC<ProjectCardProps> = ({
	id,
	title,
	description,
	imageUrl,
	wrapper1Bg,
	wrapper2Bg,
	backgroundFrom,
	backgroundTo,
}) => {
	const containerRef = useRef<HTMLLIElement>(null);
	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start end", "end start"],
	});
	const [isHalfway, setIsHalfway] = useState(false);

	useMotionValueEvent(scrollYProgress, "change", latest => {
		// trigger animation when element is middel of the viewport
		setIsHalfway(prev => prev || latest >= 0.3);
	});

	const isOdd = id % 2 !== 0;

	const imageRef = useRef<HTMLDivElement>(null);
	const wrapperRef = useRef<HTMLDivElement>(null);
	const wrapperRef1 = useRef<HTMLDivElement>(null);

	return (
		<li
			ref={containerRef}
			className={`bg-gradient-to-b ${backgroundFrom} ${backgroundTo}  flex w-full h-full `}
		>
			<article className="relative grid grid-cols-2 w-full justify-center min-h-[50rem] items-center">
				{!isOdd && (
					<div className="flex flex-col gap-4 p-10 justify-center items-end">
						<div>
							<p>Featured Project</p>
							<h4 className="text-4xl ">{title}</h4>
						</div>

						<p>{description}</p>
					</div>
				)}
				<div className=" overflow-hidden flex justify-center items-center relative w-full h-full">
					<motion.div
						custom={isOdd}
						style={{ position: "absolute" }}
						variants={wrapperVariants1}
						ref={wrapperRef1}
						initial="initial"
						animate={isHalfway ? "animate" : "initial"}
						className={`absolute block inset-y-24 inset-x-0 z-10 ${wrapper1Bg}`}
					></motion.div>
					<motion.div
						custom={isOdd}
						style={{ position: "absolute" }}
						variants={wrapperVariants}
						ref={wrapperRef}
						initial="initial"
						animate={isHalfway ? "animate" : "initial"}
						className={`absolute inset-y-24 inset-x-0 z-10 ${wrapper2Bg}`}
					></motion.div>
					<motion.figure
						custom={isOdd}
						variants={imageVariants}
						ref={imageRef}
						initial="initial"
						animate={isHalfway ? "animate" : "initial"}
						className="absolute inset-y-24 inset-x-0  "
					>
						<img
							className={`w-full h-full object-cover ${
								isOdd ? "object-right" : "object-left"
							}`}
							src={imageUrl}
							alt={title}
						/>
					</motion.figure>
				</div>
				{isOdd && (
					<div className="flex flex-col gap-4 p-10 justify-center ">
						<div>
							<p>Featured Project</p>
							<h4 className="text-4xl ">{title}</h4>
						</div>

						<p>{description}</p>
					</div>
				)}
			</article>
		</li>
	);
};

export default ProjectCards;
