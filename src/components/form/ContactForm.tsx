import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import ensureError from "../../utilities/ensureError";

const ContactForm = () => {
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
		} catch (err) {
			ensureError(err);
		} finally {
			setIsSubmitting(false);
		}
	};
	return (
		<section className="flex gap-4 z-10 flex-col max-w-[40em] shadow-lg rounded-md w-full text-xs text-gray-400 ">
			<div className="grid grid-cols-2">
				<div className="flex justify-center items-center p-4">
					<button className="text-md text-gray-200">REQUEST A QUOTE</button>
				</div>
				<div className="flex justify-center items-center bg-transparent p-4"></div>
			</div>

			<form
				aria-label="Submit message"
				id="form"
				className="flex w-full flex-col gap-4 p-8 "
				ref={form}
				onSubmit={sendEmail}
			>
				<p>CONTACT INFORMATION</p>
				<div className="flex gap-2 relative ">
					<input
						className="p-3 w-full outline-none rounded-md bg-[#424242] "
						id="name"
						type="text"
						required
						placeholder="Full name"
					/>
					<input
						className="p-3 w-full outline-none rounded-md bg-[#424242] "
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
						className="p-3 w-full outline-none rounded-md bg-[#424242] "
						id="message"
						name="message"
						placeholder="Tell us about your project"
					/>
				</div>

				<label htmlFor="budget">YOUR BUDGET</label>
				<select
					id="budget"
					className="p-2 bg-[#424242] rounded-md outline-black"
				>
					<option value="">Select</option>
					<option value="1000-5000">£1k-5k</option>
					<option value="5000-10000">£5k-10k</option>
					<option value="10000-50000">£10k-50k</option>
				</select>
				<button
					disabled={isSubmitting}
					aria-label="submit form button"
					className=" bg-brightOrange rounded-3xl p-3 text-gray-200  "
				>
					{isSuccess ? "THANK YOU" : "SEND MESSAGE"}
				</button>
				<p className="text-xs">
					By clicking this button, you agree to the site's Privacy Policy and
					consent to the processing of your personal data.
				</p>
			</form>
		</section>
	);
};

export default ContactForm;
