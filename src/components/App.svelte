<script>
	import { Hero, About, Projects, Contact } from './sections'
	import { Layout } from './index'
</script>

<main>
	<Layout>
		<Hero />
		<About />
		<Projects />
		<Contact />
	</Layout>
</main>

<style lang="scss">
	main {
		counter-reset: section;
	}
</style>