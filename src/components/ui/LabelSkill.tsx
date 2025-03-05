interface SkillButtonProps {
	text: string;
	bgColor: string;
	textColor?: string;
}

const LabelSkill = ({ text, bgColor, textColor }: SkillButtonProps) => {
	return (
		<span className={`${bgColor} ${textColor} px-2 py-1 rounded-sm`}>
			{text}
		</span>
	);
};

export default LabelSkill;
