import { RefObject, useEffect, useState } from "react";

interface UseThreadHeightProps {
	leftLineRef: RefObject<HTMLDivElement>;
}

const useThreadHeight = ({ leftLineRef }: UseThreadHeightProps) => {
	const [sideHeight, setSideHeight] = useState<number>(0);

	const numberOfThreads = Math.ceil(sideHeight / 50);

	useEffect(() => {
		if (!leftLineRef.current) return;
		setSideHeight(leftLineRef.current.clientHeight);
	}, []);

	return { numberOfThreads };
};

export default useThreadHeight;
