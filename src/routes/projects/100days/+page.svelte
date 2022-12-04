<script lang="ts">
	import PageTitle from '../../PageTitle.svelte';
	import mountain3 from '$lib/images/mountain_4.webp';

	import Calender from './Calender.svelte';
</script>

<svelte:head>
	<title>Kacey Kniffen | 100 days of Web Design</title>
</svelte:head>

<PageTitle bgImg={mountain3} bgImgAlt="100 Days of Web Development" title="100 Days" />

<main>
	<Calender />
</main>

<style lang="scss">
</style>
