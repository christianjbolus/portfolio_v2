<script>
	import {About, Hero} from './sections'
	import NavBar from './NavBar.svelte'
	import Social from './Social.svelte'
	import Email from './Email.svelte'
</script>

<main>
	<NavBar />
	<Hero />
	<About />
	<Social />
	<Email />
</main>

<style>
	main {
		padding: 0 150px;
	}
</style>