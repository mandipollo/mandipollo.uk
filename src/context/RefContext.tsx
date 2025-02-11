import React, { createContext, useContext, useRef } from "react";

const RefContext = createContext<{
	refs: Record<string, React.RefObject<HTMLElement>>;
} | null>(null);

export const RefProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const refs = {
		tech: useRef<HTMLElement>(null),
		cases: useRef<HTMLElement>(null),
		contact: useRef<HTMLElement>(null),
	};

	return <RefContext.Provider value={{ refs }}>{children}</RefContext.Provider>;
};

export const useRefContext = () => {
	const context = useContext(RefContext);
	if (!context)
		throw new Error("useRefContext must be used within a RefProvider");
	return context.refs;
};
