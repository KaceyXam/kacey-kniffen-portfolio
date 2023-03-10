import "./ContactForm.scss";

export function ContactForm() {
	const onSubmitFunc = (e: SubmitEvent) => {
		e.preventDefault();
		alert("Make sure you add this functionality later, Kacey!");
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
