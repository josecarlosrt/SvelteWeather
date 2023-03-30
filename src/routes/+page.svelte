<script>
	import Weather from './Weather.svelte';
</script>

<svelte:head>
	<title>Svelte Weather App</title>
	<meta name="description" content="Svelte Weather App" />
</svelte:head>

<section>
	<h2>
	Welcome Back!
	</h2>
	<Weather />
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}

	h2 {
		width: 100%;
	}
</style>
