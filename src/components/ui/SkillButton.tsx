interface SkillButtonProps {
	text: string;
	bgColor: string;
	textColor?: string;
}

const SkillButton = ({ text, bgColor, textColor }: SkillButtonProps) => {
	return (
		<button className={`${bgColor} ${textColor} px-2 py-1 rounded-sm`}>
			{text}
		</button>
	);
};

export default SkillButton;
