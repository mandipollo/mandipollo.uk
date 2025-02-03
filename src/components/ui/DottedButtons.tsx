interface DottedButtonProps {
	text: string;
	bgColor: string;
	borderColor: string;
}

const DottedButton = ({ text, bgColor, borderColor }: DottedButtonProps) => {
	return (
		<button
			className={`${bgColor} ${borderColor} px-2 py-1 border border-dashed rounded-md`}
		>
			{text}
		</button>
	);
};

export default DottedButton;
