<script lang="ts">
	import kaceyGraduation from '$lib/images/kacey-at-graduation.webp';
	import kaceyAward from '$lib/images/kacey-and-mr-johns.webp';
	import programmingImg from '$lib/images/optimized-unsplash-programming-florian-olivo.jpg';
	import headerBg from '$lib/images/mountain_6.jpg';
	import svelteKitLogo from '$lib/assets/sveltekit-logo.svg';
</script>

<svelte:head>
	<title>Kacey Kniffen | Home</title>
	<meta name="description" content="Kacey Kniffen Portfolio" />
</svelte:head>

<header style={`--bg-image: url(${headerBg})`}>
	<div class="header-content">
		<div class="title">
			<h1>Kacey Kniffen</h1>
			<h2>Frontend Web Developer</h2>
		</div>
		<img src={kaceyAward} alt="" />
	</div>
</header>

<h2 class="page-title">Who am I?</h2>

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
	<img class="img img-left row-2" src={programmingImg} alt="Me and My family at my Graduation" />
	<p class="paragraph para-left row-3">
		I built this site to have a place to show off my work. I like working with newer and less used
		frameworks, like
		<a href="https://www.solidjs.com/" target="_blank" rel="noreferrer" class="framework-link">
			SolidJs
		</a>
		and
		<a href="https://www.svelte.dev" target="_blank" rel="noreferrer" class="framework-link">
			Svelte
		</a>, because I like problem solving.
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
		row-gap: 4em;
		grid-template-columns: repeat(4, 1fr);
		font-size: 20px;

		.framework-link {
			text-decoration: underline;
			color: var(--link);
		}

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
			padding: 1em 1em 2em;
			background-color: var(--blue-700);
			border-radius: 0.5em;
			box-shadow: 0px 15px 25px -16px rgb(0 0 0 / 0.25);

			.svelte-link {
				width: max-content;
				transition: 75ms ease-in-out;
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

	header {
		background-image: var(--bg-image);
		background-repeat: none;
		background-size: cover;
		&::after {
			content: '';
			position: absolute;
			width: 100%;
			height: 2em;
			background-color: var(--blue-900);
		}
	}

	.header-content {
		max-width: 100rem;
		margin-inline: auto;
		position: relative;
		display: grid;
		padding: 2.5% 5% 0;
		grid-template-columns: repeat(3, 1fr);
		align-items: center;
		h1 {
			padding: 0;
			margin: 0;
			font-size: 4rem;
		}
		h2 {
			font-size: 1.25rem;
			font-weight: 400;
			margin: 0;
		}
		.title {
			justify-self: end;
			text-align: end;
		}
		img {
			grid-column: span 2;
		}
	}

	.page-title {
		text-align: center;
		margin: 4rem;
		margin-top: 6rem;
		font-size: 3.5rem;
		font-weight: 600;
	}

	@media (max-width: 1536px) {
		.header-content {
			grid-template-columns: repeat(2, 1fr);
			img {
				grid-column: span 1;
			}
		}
	}

	@media (max-width: 1024px) {
		.header-content {
			grid-template-columns: 1fr;
			.title {
				justify-self: center;
				text-align: center;
				margin-top: 4rem;
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

		.header-content {
			h1 {
				font-size: 3rem;
			}
			gap: 1rem;
		}
	}

	@media (max-width: 640px) {
		.header-content {
			gap: 3rem;
		}
	}
</style>
