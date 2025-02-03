import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
	const form = useRef<HTMLFormElement | null>(null);

	const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!form.current) return;

		try {
			await emailjs.sendForm(
				"service_tjh6uad",
				"template_h4w6yvg",
				form.current,
				{
					publicKey: "5S7DJhks2VMQmSc0U",
				}
			);

			form.current.reset();
		} catch (err) {
			if (err instanceof Error) {
			}
		}
	};
	return (
		<section className="translate-y-2 flex gap-4 flex-col max-w-[40em] shadow-lg rounded-md w-full text-xs text-gray-400 bg-[#1F1F1F]">
			<div className="grid grid-cols-2">
				<div className="flex justify-center items-center p-4">
					<button className="text-md text-gray-200">REQUEST A QUOTE</button>
				</div>
				<div className="flex justify-center items-center bg-black p-4">
					<button className="text-md text-gray-400">BOOK A CALL</button>
				</div>
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
					aria-label="submit form button"
					className=" bg-brightOrange rounded-3xl p-3 text-gray-200  "
				>
					SEND MESSAGE
				</button>
				<p className="text-xs">
					By clicking this button, you agree to the site's Privacy Policy and
					consent to the processing sof your personal data.
				</p>
			</form>
		</section>
	);
};

export default ContactForm;
