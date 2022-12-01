<script lang="ts">
	export let title: string;
	export let bgImg: string;
	export let bgImgAlt: string;
</script>

<header>
	<div class="under" aria-hidden="true">
		{title}
	</div>
	<img src={bgImg} alt={bgImgAlt} class="bg-image" />
	<h1>
		{title}
	</h1>
	<div class="over" aria-hidden="true">
		{title}
	</div>
</header>

<style lang="scss">
	header {
		overflow-y: hidden;
		position: relative;
		height: clamp(30rem, 40vh, 50rem);
		display: grid;
		place-content: center;
		.bg-image {
			width: 100%;
			position: absolute;
			top: 0;
			z-index: -1;
			object-fit: cover;
			height: 100%;
			clip-path: polygon(0 0, 100% 0, 100% 30%, 0% 90%);
		}
		h1,
		.over,
		.under {
			position: relative;
			grid-column: 1;
			grid-row: 1;
			font-size: 8rem;
			font-weight: 600;
			margin: 0;
			top: 2rem;
		}
		h1 {
			opacity: 60%;
		}
		.over {
			z-index: 9;
			mix-blend-mode: color-burn;
		}
		.under {
			z-index: -999;
		}
	}

	@media (max-width: 1024px) {
		header {
			h1,
			.over,
			.under {
				font-size: 4rem;
			}
		}
	}
	@media (max-width: 768px) {
		header {
			h1,
			.over,
			.under {
				font-size: 3rem;
			}
		}
	}
</style>
