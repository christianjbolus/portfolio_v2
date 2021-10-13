<script>
	import Transition from '../effects/Transition.svelte'
	import {onMount} from 'svelte'

	const one = `<h1>Greetings, my name is</h1>`
	const two = `<h2>Christian Bolus</h2>`
	const three = `<p>I'm a software engineer specializing in technologies for the web.</p>`
	const items = [one, two, three]
	
	let render = false;
	onMount(() => {
		setTimeout(() => {
			render = true
		}, 1000);
	})

</script>

<section class="hero">
	{#if render}
		{#each items as item, i}
			<Transition config={{y: -100, duration: 500, delay: ((items.length * 100) - (i * 100))}}>
				<div>{@html item}</div>
			</Transition>
		{/each}
	{/if}
</section>

<style>
	.hero {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
		min-height: 100vh;

	}

  div :global(h1) {
		color: var(--accent);
		font-family: var(--font-mono);
		font-size: 1em;
		font-weight: 100;
		margin: 0 0 20px 4px;
	}

	div :global(h2) {
    color: var(--light-grey);
		font-size: 4rem;
    font-weight: 700;
		margin-bottom: 20px;
	}

  div :global(p) {
    font-size: 1.1rem;
    color: var(--dark-grey);
  }
</style>