<script>
	import { Hero, About, Projects } from './sections'
	import { NavBar, Social, Email } from './index'
</script>

<main>
	<NavBar />
	<Hero />
	<About />
	<Projects />
	<Social />
	<Email />
</main>

<style lang="scss">
	main {
		padding: 0 150px;
		counter-reset: section;

		@media (max-width: 1024px) {
			padding: 0 100px;
		}
	}
</style>