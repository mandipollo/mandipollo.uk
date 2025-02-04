interface ThreadProps {
	index: number;
}
const Thread = ({ index }: ThreadProps) => {
	return (
		<div className="flex justify-end items-center text-gray-300 text-[0.5em]">
			<span className="-rotate-90">{index * 50}</span>
			<span className="h-1 w-2 inline-block border-b border-gray-300"></span>
		</div>
	);
};

export default Thread;
