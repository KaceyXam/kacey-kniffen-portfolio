import { createEffect, createResource, createSignal } from "solid-js";
import "./ContactForm.scss";

async function postFormData(formData: FormData) {
	const response = await fetch("/api/emailform", {
		method: "POST",
		body: formData,
	});
	const data = await response.json();
	return data;
}

export function ContactForm() {
	const [formData, setFormData] = createSignal<FormData>();
	const [response] = createResource(formData, postFormData);

	const onSubmitFunc = (e: SubmitEvent) => {
		e.preventDefault();
		setFormData(new FormData(e.target as HTMLFormElement));
	};

	return (
		<section class="form-wrapper">
			<h2>Contact Me</h2>
			<form class="form" onSubmit={onSubmitFunc}>
				<div class="input-wrapper">
					<label for="name">Name:</label>
					<input type="text" name="name" id="name" placeholder="Your Name..." />
				</div>
				<div class="input-wrapper">
					<label for="email">Email:</label>
					<input
						type="text"
						name="email"
						id="email"
						placeholder="youraddress@email.com"
					/>
				</div>
				<div class="input-wrapper message-box">
					<label for="message">Message:</label>
					<textarea
						name="message"
						id="message"
						placeholder="Type your message here..."
					></textarea>
				</div>
				<button type="submit">Send Message</button>
			</form>
		</section>
	);
}
