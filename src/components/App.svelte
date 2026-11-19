<script>
	import { Hero, About, Work, Contact } from './sections'
	import { Layout } from './index'
</script>

<main>
	<Layout>
		<Hero />
		<About />
		<!-- Selected Work is hidden until the case studies are ready. -->
		<!-- <Work /> -->
		<Contact />
	</Layout>
</main>

<style lang="scss">
	main {
		counter-reset: section;
	}
</style>