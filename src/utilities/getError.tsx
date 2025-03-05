const getErrorMessage = (error: unknown) => {
	let message: string;

	if (error instanceof Error) {
		message = error.message;
	} else if (error && typeof error === "object" && "message" in error) {
		message = String(error.message);
	} else {
		message = "Something went wrong!";
	}

	return message;
};

export default getErrorMessage;
