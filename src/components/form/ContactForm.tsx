import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import getErrorMessage from "../../utilities/getError.tsx";

const ContactForm = () => {
	//
	const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
	const [isSuccess, setIsSuccess] = useState<boolean>(false);
	const form = useRef<HTMLFormElement | null>(null);

	const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setIsSubmitting(true);
		if (!form.current) return;
		try {
			const response = await emailjs.sendForm(
				"service_tjh6uad",
				"template_h4w6yvg",
				form.current,
				{
					publicKey: "5S7DJhks2VMQmSc0U",
				}
			);

			if (response.status) {
				setIsSuccess(true);
				form.current.reset();
			} else {
				throw new Error(response.text);
			}
		} catch (err: unknown) {
			getErrorMessage(err);
		} finally {
			setIsSubmitting(false);
		}
	};
	return (
		<div className="flex translate-y-6 gap-4 flex-col max-w-[40em] border rounded-md shadow-md w-full text-xs bg-gray-100">
			<form
				aria-label="Submit message"
				id="form"
				className="flex w-full flex-col gap-4 p-2 md:p-8 "
				ref={form}
				onSubmit={sendEmail}
			>
				<p>CONTACT INFORMATION</p>
				<div className="flex gap-2 relative ">
					<input
						className="p-3 w-full outline-none rounded-md  "
						id="name"
						type="text"
						required
						placeholder="Full name"
					/>
					<input
						className="p-3 w-full outline-none rounded-md  "
						id="email"
						type="email"
						required
						placeholder="Business email"
					/>
				</div>

				<div className="flex relative">
					<textarea
						style={{ resize: "none" }}
						required
						className="p-3 w-full outline-none rounded-md  "
						id="message"
						name="message"
						placeholder="Tell us about your project"
					/>
				</div>

				<button
					disabled={isSubmitting}
					aria-label="submit form button"
					className=" bg-black rounded-3xl p-3 text-white  "
				>
					{isSuccess ? "THANK YOU" : "SEND MESSAGE"}
				</button>
				<p className="text-xs">
					By clicking this button, you agree to the site's Privacy Policy and
					consent to the processing of your personal data.
				</p>
			</form>
		</div>
	);
};

export default ContactForm;
