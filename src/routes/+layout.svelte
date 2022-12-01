<script lang="ts">
	import { page } from '$app/stores';
	import './styles.css';

	import favicon from '$lib/assets/favicon.png';

	$: pagePath = $page.url.pathname;
	let showNav = false;

	let screenWidth: number;
	let scrollY: number;

	function toggleNav() {
		showNav = !showNav;
	}
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" />
	<link
		href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap"
		rel="stylesheet"
	/>
	<link rel="shortcut icon" href={favicon} type="image/x-icon" />
</svelte:head>

<svelte:window bind:innerWidth={screenWidth} bind:scrollY />

<div class="app">
	<nav>
		<a class="home-link" href="/">
			<svg
				width="171"
				height="62"
				viewBox="0 0 171 62"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				class:small={scrollY >= 50}
			>
				<path
					d="M4.584 17.488L4.072 14.48L8.376 8.656L14.056 0.735998H17.624L9.736 11.424L8.824 12.304L4.584 17.488ZM1.704 24V0.735998H4.68V24H1.704ZM14.728 24L7.416 11.504L9.736 9.92L18.056 24H14.728ZM18.2195 24L25.7555 0.735998H29.8515L37.3555 24H34.2195L32.0435 17.008L33.7555 18.224H22.1875L23.3075 15.616H32.9555L31.9955 16.848L29.1475 7.584L27.8355 2.896H27.7395L26.4435 7.584L21.3715 24H18.2195ZM47.167 24.448C45.4177 24.448 43.919 23.9467 42.671 22.944C41.423 21.9413 40.4683 20.5227 39.807 18.688C39.1457 16.8533 38.815 14.6933 38.815 12.208C38.815 9.808 39.1563 7.71733 39.839 5.936C40.5323 4.144 41.5137 2.75733 42.783 1.776C44.0523 0.783998 45.5457 0.287998 47.263 0.287998C48.799 0.287998 50.1163 0.618665 51.215 1.28C52.3243 1.93067 53.1777 2.896 53.775 4.176C54.383 5.456 54.7083 7.04533 54.751 8.944H51.567C51.5137 7.68533 51.3323 6.61867 51.023 5.744C50.7243 4.85867 50.271 4.18667 49.663 3.728C49.0657 3.26933 48.2817 3.04 47.311 3.04C46.1163 3.04 45.119 3.38667 44.319 4.08C43.519 4.77333 42.911 5.80267 42.495 7.168C42.0897 8.52267 41.887 10.1973 41.887 12.192C41.887 15.168 42.351 17.4987 43.279 19.184C44.2177 20.8693 45.5563 21.712 47.295 21.712C48.2337 21.712 49.007 21.5147 49.615 21.12C50.223 20.7147 50.687 20.1867 51.007 19.536C51.327 18.8747 51.519 18.16 51.583 17.392H54.623C54.559 18.544 54.3243 19.5627 53.919 20.448C53.5243 21.3227 52.991 22.0587 52.319 22.656C51.6577 23.2427 50.8897 23.6907 50.015 24C49.1403 24.2987 48.191 24.448 47.167 24.448ZM59.4105 24V0.735998H72.7705V3.312H61.0905L62.3865 2.08V11.376L61.0905 10.512H71.6345V13.088H61.5385L62.3865 12.144V22.912L61.0905 21.376H73.4585V24H59.4105ZM83.974 16.192L76.278 0.735998H79.686L82.614 7.088L85.222 12.768H85.462L88.086 7.104L91.03 0.735998H94.422L86.742 16.192H83.974ZM83.894 24V14.656H86.806V24H83.894ZM114.845 24L121.725 12.416L114.797 0.735998H118.477L121.053 5.632L123.757 10.496L126.413 5.648L128.925 0.735998H132.653L125.741 12.416L132.621 24H128.893L126.413 19.248L123.709 14.256L121.053 19.264L118.525 24H114.845ZM133.345 24L140.881 0.735998H144.977L152.481 24H149.345L147.169 17.008L148.881 18.224H137.312L138.433 15.616H148.081L147.121 16.848L144.273 7.584L142.961 2.896H142.865L141.569 7.584L136.497 24H133.345ZM153.876 24L154.372 0.735998H158.66L161.204 10.192L162.1 14.208H162.148L163.06 10.192L165.524 0.735998H169.828L170.324 24H167.604L167.348 14.784L167.46 3.072H167.268L165.908 8.368L163.108 17.808H161.22L158.276 8.368L156.932 3.072H156.724L156.852 14.784L156.596 24H153.876ZM5.096 56.752L5.128 50.416L7.752 46.288L12.296 38.736H18.088L10.888 49.28L9.128 51.296L5.096 56.752ZM0.632 62V38.736H5.672V62H0.632ZM12.76 62L6.856 50.224L10.328 47.28L18.536 62H12.76ZM25.8675 62V38.736H32.2355L36.5395 51.6L38.2835 57.424H38.3795L37.4515 49.376V38.736H42.1875V62H35.7555L31.4835 49.136L29.8195 43.744H29.6755L30.6035 51.616V62H25.8675ZM52.015 62V57.696H56.943V44.976C56.943 44.336 57.0603 43.872 57.295 43.584C57.5297 43.296 57.887 43.1147 58.367 43.04H52.015V38.736H66.895V43.04H61.951V55.76C61.951 56.4 61.8337 56.864 61.599 57.152C61.3643 57.4293 61.007 57.6107 60.527 57.696H66.895V62H52.015ZM77.6825 62V38.736H92.7545L92.7865 43.232H79.6985L82.7225 40.24V50.4L79.7145 48.464H91.5705L91.5545 52.816H80.8825L82.7225 51.328V62H77.6825ZM103.11 62V38.736H118.182L118.214 43.232H105.126L108.15 40.24V50.4L105.142 48.464H116.998L116.982 52.816H106.31L108.15 51.328V62H103.11ZM128.377 62V38.736H143.209V43.184H131.721L133.305 42V48.912L131.721 47.904H142.121V52.128H131.929L133.305 51.136V58.624L131.721 57.424H143.721V62H128.377ZM153.005 62V38.736H159.373L163.677 51.6L165.421 57.424H165.517L164.589 49.376V38.736H169.325V62H162.893L158.621 49.136L156.957 43.744H156.813L157.741 51.616V62H153.005Z"
					fill="currentColor"
				/>
			</svg>
		</a>
		<button class="dropdown" on:click={toggleNav} aria-expanded={showNav}>
			<svg viewBox="0 0 100 100">
				<rect class="top line" width="80" height="10" x="10" y="20" rx="5" />
				<rect class="middle line" width="80" height="10" x="10" y="45" rx="5" />
				<rect class="bottom line" width="80" height="10" x="10" y="70" rx="5" />
			</svg>
		</button>
		<ul class:hidden={!showNav && screenWidth <= 768} class="page-links">
			<li><a class:active={pagePath === '/'} href="/">Home</a></li>
			<li><a class:active={pagePath === '/projects'} href="/projects">Projects</a></li>
			<li><a class:active={pagePath === '/contact'} href="/contact">Contact</a></li>
		</ul>
	</nav>

	<main>
		<slot />
	</main>

	<footer>
		<ul class="link-icons">
			<li>
				<a href="https://github.com/KaceyXam" target="_blank" rel="noreferrer" class="">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="3em"
						height="3em"
						preserveAspectRatio="xMidYMid meet"
						viewBox="0 0 16 16"
						class=""
						><path
							fill="currentColor"
							d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59c.4.07.55-.17.55-.38c0-.19-.01-.82-.01-1.49c-2.01.37-2.53-.49-2.69-.94c-.09-.23-.48-.94-.82-1.13c-.28-.15-.68-.52-.01-.53c.63-.01 1.08.58 1.23.82c.72 1.21 1.87.87 2.33.66c.07-.52.28-.87.51-1.07c-1.78-.2-3.64-.89-3.64-3.95c0-.87.31-1.59.82-2.15c-.08-.2-.36-1.02.08-2.12c0 0 .67-.21 2.2.82c.64-.18 1.32-.27 2-.27c.68 0 1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82c.44 1.1.16 1.92.08 2.12c.51.56.82 1.27.82 2.15c0 3.07-1.87 3.75-3.65 3.95c.29.25.54.73.54 1.48c0 1.07-.01 1.93-.01 2.2c0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
						/>
					</svg>
				</a>
			</li>
			<li>
				<a
					href="https://linkedin.com/in/kacey-kniffen"
					target="_blank"
					rel="noreferrer"
					class="hover:cursor-pointer"
				>
					<svg
						width="3em"
						height="3em"
						viewBox="0 0 12 12"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						class="p-2 hover:bg-blue-600 rounded duration-75 ease-in-out"
					>
						<g clip-path="url(#clip0_201_65)">
							<rect width="12" height="12" rx="1" fill="white" />
							<path
								d="M10.2246 10.2247H8.44655V7.44022C8.44655 6.77623 8.43469 5.92147 7.5218 5.92147C6.59573 5.92147 6.45403 6.64494 6.45403 7.39189V10.2245H4.67606V4.49848H6.38292V5.28101H6.40683C6.57764 4.98894 6.82448 4.74866 7.12106 4.58577C7.41763 4.42288 7.75283 4.34348 8.09095 4.35603C9.89306 4.35603 10.2253 5.5414 10.2253 7.0835L10.2246 10.2247V10.2247ZM2.66981 3.71581C2.09995 3.7159 1.63791 3.254 1.63781 2.68414C1.63772 2.11428 2.09958 1.65223 2.66944 1.65214C3.2393 1.652 3.70134 2.1139 3.70144 2.68376C3.70149 2.95742 3.59283 3.21989 3.39936 3.41344C3.2059 3.60698 2.94347 3.71575 2.66981 3.71581M3.55884 10.2248H1.77895V4.49848H3.5588V10.2247L3.55884 10.2248ZM11.111 0.00087337H0.885516C0.402234 -0.00456413 0.00590625 0.382576 0 0.865858V11.134C0.00571875 11.6175 0.402 12.005 0.885469 11.9999H11.111C11.5955 12.0059 11.9933 11.6184 12 11.134V0.865061C11.9931 0.380842 11.5952 -0.00625163 11.111 7.6495e-05"
								fill="#0A66C2"
							/>
						</g>
						<defs>
							<clipPath id="clip0_201_65">
								<rect width="12" height="12" fill="white" />
							</clipPath>
						</defs>
					</svg>
				</a>
			</li>
			<li>
				<a href="https://leetcode.com/kaceyxam/" target="_blank" rel="noreferrer" class="">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="3em"
						height="3em"
						preserveAspectRatio="xMidYMid meet"
						viewBox="0 0 24 24"
						><path
							fill="currentColor"
							d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104a5.35 5.35 0 0 0-.125.513a5.527 5.527 0 0 0 .062 2.362a5.83 5.83 0 0 0 .349 1.017a5.938 5.938 0 0 0 1.271 1.818l4.277 4.193l.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019l-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523a2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382a1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382a1.38 1.38 0 0 0-1.38-1.382z"
						/>
					</svg>
				</a>
			</li>
		</ul>
		<div class="copyright">
			Copyright 2022 Kacey Kniffen
			{#if screenWidth <= 768}
				<br />
			{:else}
				|
			{/if}
			Designed and Developed by Kacey Kniffen
		</div>
	</footer>
</div>

<style lang="scss">
	nav {
		isolation: isolate;
		display: flex;
		justify-content: space-between;
		align-items: center;
		background-color: var(--blue-900);
		position: sticky;
		width: 100%;
		top: 0;
		z-index: 99;
		box-shadow: 0 5px 10px 0px rgba(0, 0, 0, 0.384);
		.home-link {
			color: var(--blue-200);
			padding: 1em;
			&:hover {
				color: white;
			}
			svg {
				transition: 125ms ease-in-out;
			}
			.small {
				height: 2.5em;
			}
		}
		.page-links {
			display: flex;
			z-index: -1;
			flex-direction: column;
			position: absolute;
			top: 100%;
			bottom: auto;
			transition: 300ms ease-in-out;
			width: 100%;
			align-items: center;
			list-style: none;
			gap: 2rem;
			font-size: 22px;
			padding: 1.25em;
			margin: 0;
			background-color: var(--blue-900);
			&.hidden {
				translate: 0 -150%;
			}
			li {
				a {
					color: var(--blue-200);
					&:hover {
						color: white;
					}
				}
				.active {
					color: white;
				}
			}
		}
	}

	@media (min-width: 1024px) {
		nav {
			padding-inline: 4rem;
		}
	}

	@media (min-width: 768px) {
		nav {
			.dropdown {
				display: none;
			}
			.page-links {
				transition: 0ms;
				flex-direction: row;
				position: static;
				list-style: none;
				width: auto;
				gap: 2rem;
				font-size: 22px;
				padding: 1.25em;
				margin: 0;
				li {
					a {
						color: var(--blue-200);
						&:hover {
							color: white;
						}
					}
				}
			}
		}
	}

	footer {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding-block: 2em;
		background-color: var(--blue-900);
		text-align: center;
		.link-icons {
			display: grid;
			grid-template-columns: repeat(3, 1fr);
			list-style: none;
			gap: 1em;
			li {
				padding: 0.5em;
				border-radius: 0.5em;
				transition: 100ms ease-in-out;
				&:hover {
					background-color: var(--blue-700);
				}
				a {
					text-decoration: none;
					color: white;
				}
			}
		}
	}

	.dropdown {
		background: none;
		border: none;
		color: white;
		svg {
			width: 3rem;
			fill: var(--blue-200);
			&:hover {
				fill: white;
			}
		}
		.line {
			transition: y 125ms ease-in 125ms, rotate 125ms ease-in, opacity 0ms 125ms;
			transform-origin: center;
		}
		&[aria-expanded='true'] {
			.line {
				transition: y 125ms ease-in, rotate 125ms ease-in 125ms, opacity 0ms 125ms;
			}
			.top,
			.bottom {
				y: 45;
			}
			.top {
				rotate: 45deg;
			}
			.bottom {
				rotate: -45deg;
			}
			.middle {
				opacity: 0;
			}
		}
	}
</style>
