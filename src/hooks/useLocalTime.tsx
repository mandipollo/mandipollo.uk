import { useEffect, useState } from "react";

const useLocalTime = (timeZone?: string) => {
	const [time, setTime] = useState<string>("");

	useEffect(() => {
		//Implementing the setInterval method
		const interval = setInterval(() => {
			const formatter = new Intl.DateTimeFormat([], {
				timeZone: timeZone,
				hour: "numeric",
				minute: "numeric",
				second: "numeric",
			});

			const time = formatter.format(new Date());

			setTime(time);
		}, 1000);

		//Clearing the interval
		return () => clearInterval(interval);
	}, [time]);
	return { time };
};

export default useLocalTime;
