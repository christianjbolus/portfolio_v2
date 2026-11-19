<script>
	import Transition from '../effects/Transition.svelte'
	import {onMount} from 'svelte'

	const one = `<h1 class="one">Hi, my name is</h1>`
	const two = `<h2>Christian Bolus.</h2>`
	const three = `<h3>I build AI products.</h3>`
	const four = `<p>I'm a founding engineer at Tiga AI. I take products from the first customer conversation to production, working across LLM agents, data pipelines, and the product decisions about what gets built.</p>`
	const five = `<a class="email-button" href="#work">See my work</a>`
	// `five` (the See my work button) is hidden until Selected Work is ready.
	const items = [one, two, three, four]
	
	let render = false;
	onMount(() => {
		setTimeout(() => {
			render = true
		}, 1000);
	})

</script>

<section class="hero" id="hero">
	{#if render}
		{#each items as item, i}
			<Transition type="fly" config={{y: -100, duration: 500, delay: ((items.length * 100) - (i * 100))}}>
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
		max-width: 1000px;
	}

  div :global(h1) {
		color: var(--accent);
		font-family: var(--font-mono);
		font-size: 1rem;
		font-weight: 100;
		margin: 0 0 20px 4px;
	}

	div :global(h2), :global(h3) {
    color: var(--light-grey);
		font-size: clamp(40px, 7.5vw, 65px);
    font-weight: 700;
		margin-bottom: 15px;
	}

	div :global(h3) {
    color: var(--dark-grey);
		margin-bottom: 20px;
	}

  div :global(p) {
    color: var(--dark-grey);
		line-height: 27px;
		max-width: 540px;
  }

	div :global(.email-button) {
		display: inline-block;
	}
</style>