<script lang="ts">
	import kaceyGraduation from '$lib/images/kacey-at-graduation.webp';
	import svelteKitLogo from '$lib/assets/sveltekit-logo.svg';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="content-grid">
	<p class="paragraph para-left row-1">
		My name is Kacey Kniffen. I recently graduated, with an endorsement, from the eCommunication
		Academy at Olathe Northwest High School. In eComm, I focused on furthering my passion in web
		design.
	</p>
	<img class="img img-right row-1" src={kaceyGraduation} alt="Me and My family at my Graduation" />
	<p class="paragraph para-right row-2">
		My name is Kacey Kniffen. I recently graduated, with an endorsement, from the eCommunication
		Academy at Olathe Northwest High School. In eComm, I focused on furthering my passion in web
		design.
	</p>
	<img class="img img-left row-2" src={kaceyGraduation} alt="Me and My family at my Graduation" />
	<p class="paragraph para-left row-3">
		My name is Kacey Kniffen. I recently graduated, with an endorsement, from the eCommunication
		Academy at Olathe Northwest High School. In eComm, I focused on furthering my passion in web
		design.
	</p>
	<img class="img img-right row-3" src={kaceyGraduation} alt="Me and My family at my Graduation" />
	<div class="built-with">
		<h3 class="built-title">This site was built with<br />SvelteKit</h3>
		<a href="https://kit.svelte.dev/" target="_blank" rel="noreferrer" class="svelte-link">
			<img src={svelteKitLogo} alt="Svelte Kit Logo" />
		</a>
	</div>
</section>

<style lang="scss">
	.content-grid {
		max-width: 1024px;
		margin-inline: auto;
		display: grid;
		align-items: center;
		margin-top: 6rem;
		margin-bottom: 8rem;
		gap: 2em;
		grid-template-columns: repeat(4, 1fr);
		font-size: 20px;
		.paragraph {
			z-index: 1;
			padding: 1em;
			background-color: var(--blue-700);
			border-radius: 0.75em;
			line-height: 1.5;
			box-shadow: 0px 15px 25px -16px rgb(0 0 0 / 0.25);
		}
		.img {
			border-radius: 0.75em;
			box-shadow: 0 25px 50px -8px rgb(0 0 0 / 0.5);
		}
		.img-right {
			grid-column-start: 2;
			grid-column-end: -1;
		}
		.para-left {
			grid-column-start: 1;
			grid-column-end: 3;
		}
		.img-left {
			grid-column-start: 1;
			grid-column-end: 4;
		}
		.para-right {
			grid-column-start: 3;
			grid-column-end: -1;
		}
		@for $i from 1 through 3 {
			.row-#{$i} {
				grid-row: $i;
			}
		}

		.built-with {
			grid-column: 2 / -2;
			display: flex;
			flex-direction: column;
			align-items: center;
			text-align: center;
			gap: 1em;
			padding: 1em;
			background-color: var(--blue-700);
			border-radius: 0.5em;
			.svelte-link {
				width: max-content;
				transition: 125ms ease-in-out;
				cursor: pointer;
				padding: 1em;
				border-radius: 8px;
				img {
					width: 12rem;
				}
				&:hover {
					background-color: var(--blue-600);
					scale: 105%;
				}
			}
			.built-title {
				margin: 0;
				margin-top: 1em;
				padding: 0;
				font-weight: 400;
				font-size: 26px;
			}
		}
	}

	@media (max-width: 768px) {
		.content-grid {
			grid-template-columns: 1fr;
			margin-inline: 2.5%;
			gap: 1em;
			.paragraph,
			.img,
			.built-with {
				border-radius: 6px;
				grid-column: auto;
				grid-row: auto;
			}
		}
	}
</style>
