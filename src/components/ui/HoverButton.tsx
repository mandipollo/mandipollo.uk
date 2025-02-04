interface HoverButtonProps {
	text: string;
	afterText?: string;
	image?: string;
	bgColor?: string;
	hoverBgColor?: string;
	textColor?: string;
	borderRadius?: string;
}

const HoverButton = ({
	text,
	afterText,
	image,
	bgColor,
	hoverBgColor,
	textColor,
	borderRadius,
}: HoverButtonProps) => {
	return (
		<button
			type="button"
			className={`${bgColor} ${textColor} ${borderRadius} ${hoverBgColor} relative inline-flex items-center justify-center overflow-hidden px-4 py-2 group`}
		>
			<span className=" flex flex-row transition-all duration-500 ease-in-out group-hover:opacity-0 group-hover:-translate-y-full">
				{text}

				{image && (
					<figure>
						<img src={image} className="h-4 w-4" alt="" />
					</figure>
				)}
			</span>
			<span className="absolute inset-0 flex items-center justify-center group-hover:opacity-100 transition-all duration-500 ease-in-out translate-y-full group-hover:translate-y-0">
				{afterText ? afterText : text}
			</span>
		</button>
	);
};

export default HoverButton;
