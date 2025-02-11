import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import React, { useRef, useState } from "react";
import { useScreenSize } from "../../hooks/useScreenSize";

interface ProjectCardProps {
	id: number;
	title: string;
	description: string;
	imageUrl: string;
	wrapper1Bg: string;
	wrapper2Bg: string;
	projectLink: string;
}

const imageVariants = {
	initial: (isOdd: boolean) => ({
		x: isOdd ? "20px" : "-20px",
	}),
	animate: (isOdd: boolean) => ({
		x: isOdd ? "0px" : "0px", // Move left for odd, right for even
		transition: { duration: 0.6, ease: "easeIn" },
	}),
};

const wrapperVariants1 = {
	initial: (isOdd: boolean) => ({
		x: isOdd ? "20px" : "-20px",
		opacity: 1,
	}),
	animate: (isOdd: boolean) => ({
		x: isOdd ? "100%" : "-100%", // Move left for odd, right for even
		transition: { duration: 1, ease: "easeIn" },
	}),
};

const wrapperVariants = {
	initial: (isOdd: boolean) => ({
		x: isOdd ? "10px" : "-10px", // Smaller initial offset
		opacity: 1,
	}),
	animate: (isOdd: boolean) => ({
		x: isOdd ? "100%" : "-100%", // Same direction as wrapper1
		transition: { duration: 0.6, ease: "easeIn" },
	}),
};

const ProjectCards: React.FC<ProjectCardProps> = ({
	id,
	title,
	description,
	imageUrl,
	wrapper1Bg,
	wrapper2Bg,
	projectLink,
}) => {
	// get screen size

	const screenSize = useScreenSize();

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
		<li ref={containerRef} className=" flex w-full h-full text-sm ">
			<a target="_blank" href={projectLink} className="flex w-full h-full ">
				<article className="relative grid grid-cols-1 md:grid-cols-2 gap-4 px-4 md:px-0 py-20 w-full h-full ">
					{isOdd && screenSize !== "sm" && screenSize !== "xs" && (
						<div className="flex w-full justify-center py-44 ">
							<div className="flex flex-col gap-4 justify-center max-w-96">
								<h4 className="text-2xl md:text-4xl ">{title}</h4>
								<p>{description}</p>
							</div>
						</div>
					)}
					<div className="overflow-hidden flex relative">
						<motion.div
							aria-hidden
							custom={isOdd}
							style={{ position: "absolute" }}
							variants={wrapperVariants1}
							ref={wrapperRef1}
							initial="initial"
							animate={isHalfway ? "animate" : "initial"}
							className={`absolute block inset-0 z-10 ${wrapper1Bg}`}
						></motion.div>
						<motion.div
							aria-hidden
							custom={isOdd}
							style={{ position: "absolute" }}
							variants={wrapperVariants}
							ref={wrapperRef}
							initial="initial"
							animate={isHalfway ? "animate" : "initial"}
							className={`absolute inset-0 z-10 ${wrapper2Bg}`}
						></motion.div>

						{screenSize === "sm" || screenSize === "xs" ? (
							<motion.figure
								custom={isOdd}
								variants={imageVariants}
								ref={imageRef}
								initial="initial"
								animate={isHalfway ? "animate" : "initial"}
								className="flex  "
							>
								<img
									className={` h-full w-full   ${
										isOdd ? "object-left" : "object-right"
									}`}
									src={imageUrl}
									alt={title}
								/>
							</motion.figure>
						) : (
							<motion.figure
								custom={isOdd}
								variants={imageVariants}
								ref={imageRef}
								initial="initial"
								animate={isHalfway ? "animate" : "initial"}
								className="block object-cover absolute top-0 bottom-0 "
							>
								<img
									className={` h-full w-full object-cover  ${
										isOdd ? "object-left" : "object-right"
									}`}
									src={imageUrl}
									alt={title}
								/>
							</motion.figure>
						)}
					</div>
					{/* Small screens: Always render description below the image */}
					{screenSize === "sm" || screenSize === "xs" ? (
						<div className="flex flex-col gap-4 justify-center  max-w-md">
							<h4 className="text-2xl md:text-4xl ">{title}</h4>
							<p>{description}</p>
						</div>
					) : (
						// Large screens: Zigzag layout for even items
						!isOdd && (
							<div className="flex w-full justify-center py-44 ">
								<div className="flex flex-col gap-4 justify-center max-w-96">
									<h4 className="text-2xl md:text-4xl ">{title}</h4>
									<p>{description}</p>
								</div>
							</div>
						)
					)}
				</article>
			</a>
		</li>
	);
};

export default ProjectCards;
