<script lang="ts">
	import PageTitle from '../PageTitle.svelte';
	import Project from './Project.svelte';

	import mountain3 from '$lib/images/mountain_4.webp';

	import svelteHangman from '$lib/images/project-imgs/svelte-hangman.png';
	import articleCard from '$lib/images/project-imgs/article-card.png';
	import adviceGenerator from '$lib/images/project-imgs/advice-generator.png';
	import signupForm from '$lib/images/project-imgs/signup-form-frontend.png';
	import ratingComponent from '$lib/images/project-imgs/rating-component.png';
</script>

<svelte:head>
	<title>Kacey Kniffen | Projects</title>
</svelte:head>

<PageTitle title="Projects" bgImg={mountain3} bgImgAlt="Mountain Image from unsplash" />

<ul class="projects-list">
	<Project
		projectImg={svelteHangman}
		title="Svelte Hangman Game Screenshot"
		linkGithub="https://github.com/KaceyXam/svelte-hangman"
		link="https://delightful-chaja-3a120d.netlify.app/"
	>
		<span slot="title">Hangman</span>
		<span slot="description">
			This project was a Web Dev Simplified React tutorial that I rebuilt with the Svelte Framework.
			I wanted to remake this with a different framework to make sure I understood how it worked.
		</span>
	</Project>

	<Project
		projectImg={articleCard}
		title="Article Preview Card"
		linkGithub="https://github.com/KaceyXam/svelte-hangman"
		link="https://jazzy-hamster-7c76d2.netlify.app/"
	>
		<span slot="title">Article Card</span>
		<span slot="description">
			This project is a Frontend Mentor project I did using Solidjs and Tailwind. This project
			helped me get a better understanding of how Tailwind's utility classes work.
		</span>
	</Project>

	<Project
		projectImg={adviceGenerator}
		title="Advice Generator"
		linkGithub="https://github.com/KaceyXam/svelte-hangman"
		link="https://fancy-kashata-25de7b.netlify.app/"
	>
		<span slot="title">Advice Generator</span>
		<span slot="description">
			This project is a Frontend Mentor project I did using Solidjs and Typescript. This project
			required the use of an external API to generate the advice.
		</span>
	</Project>

	<Project
		projectImg={signupForm}
		title="Frontend Mentor Signup Form"
		linkGithub="https://github.com/KaceyXam/svelte-hangman"
		link="https://nimble-torrone-d58b9e.netlify.app"
	>
		<span slot="title">Sign-up Form</span>
		<span slot="description">
			This project is a Frontend Mentor project I did using Typescript, Vanilla HTML, and CSS.
		</span>
	</Project>

	<Project
		projectImg={ratingComponent}
		title="Custom Rating Component"
		linkGithub="https://github.com/KaceyXam/svelte-hangman"
		link="https://kaceyxam.github.io/interactive-rating-component-main/"
	>
		<span slot="title">Rating Component</span>
		<span slot="description">
			This project is a Frontend Mentor project I did using Typescript and Vanilla HTML. This was
			one of the first JavaScript Projects I worked on without following a tutorial.
		</span>
	</Project>
</ul>

<style lang="scss">
	ul {
		list-style: none;
		padding: 0;
		margin: 0;
		max-width: 1280px;
		margin-inline: auto;
		padding-inline: 5%;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		margin-bottom: 4rem;
	}

	@media (max-width: 768px) {
		ul {
			margin-inline: 5%;
			padding-inline: 0;
		}
	}
</style>
