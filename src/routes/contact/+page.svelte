<script lang="ts">
	import PageTitle from '../PageTitle.svelte';

	import mountain6 from '$lib/images/mountain_6.jpg';
	let name: string;
	let email: string;
	let message: string;

	let formSubmit = false;

	$: contact = {
		name,
		email,
		message,
		accessKey: 'dda2490d-3ce6-4e5d-ac82-f34e9b2be530'
	};

	async function handleSubmit() {
		const res = await fetch('https://api.staticforms.xyz/submit', {
			method: 'POST',
			body: JSON.stringify(contact),
			headers: { 'Content-Type': 'application/json' }
		});

		const json = await res.json();

		email = '';
		message = '';
		name = '';

		formSubmit = true;
	}
</script>

<svelte:head>
	<title>Kacey Kniffen | Contact Me</title>
</svelte:head>

<PageTitle title="Contact Me" bgImg={mountain6} bgImgAlt="Mountain Image from" />

<form method="post" on:submit|preventDefault={handleSubmit}>
	<div class="input-element">
		<label for="name">Name:</label>
		<input
			type="text"
			name="name"
			id="name"
			placeholder="Name"
			bind:value={name}
			disabled={formSubmit}
		/>
	</div>
	<div class="input-element">
		<label for="email">Email:</label>
		<input
			type="email"
			name="email"
			id="email"
			placeholder="Email"
			bind:value={email}
			disabled={formSubmit}
		/>
	</div>
	<div class="message-element">
		<label for="message">Message:</label>
		<textarea
			name="message"
			id="message"
			placeholder="Type your message here..."
			bind:value={message}
			disabled={formSubmit}
		/>
	</div>

	<input type="submit" value="Submit" disabled={formSubmit} />
</form>

<style lang="scss">
	form {
		max-width: 1024px;
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		margin-inline: auto;
		gap: 1em;
		background-color: var(--blue-700);
		padding: 2em;
		border-radius: 10px;
		margin-bottom: 6rem;
		box-shadow: 0 25px 50px -8px rgb(0 0 0 / 0.25);
		label {
			padding: 0;
			margin: 0;
			margin-bottom: 0.5em;
		}
		* {
			padding: 0.5em;
		}
		.message-element {
			grid-column: span 2;
			height: 10rem;
			display: flex;
			flex-direction: column;
			padding: 0;
			textarea {
				height: 100%;
				resize: none;
			}
		}
		input[type='submit'] {
			grid-column: 2;
			padding: 0.5em;
			background-color: var(--blue-600);
			color: var(--blue-100);
			border: solid 3px var(--blue-100);
			border-radius: 0.25em;
			font-size: 22px;
			transition: 75ms ease-in-out;
			&:hover {
				background-color: var(--blue-400);
				color: white;
				border-color: white;
			}
		}
		.input-element {
			display: flex;
			flex-direction: column;
			padding: 0;
		}
		input[type='text'],
		input[type='email'],
		textarea {
			background: none;
			border: solid 2px var(--blue-100);
			color: white;
			border-radius: 0.25em;
			&:focus {
				background: var(--blue-600);
				outline: solid white 2px;
				outline-offset: 2px;
			}
			&::placeholder {
				color: var(--blue-100);
			}
		}
		input:disabled,
		textarea:disabled,
		input[type='submit']:disabled:hover {
			background-color: rgba(82, 82, 82, 0.438);
			cursor: not-allowed;
		}
		input[type='submit']:disabled:hover {
			color: var(--blue-100);
			border-color: var(--blue-100);
		}
	}
</style>
