<script>
	import Transition from '../Transition.svelte'
	
</script>
<section class="hero">
	<Transition config={{y: -100, duration: 500, delay: 200}}>
		<h1>Greetings, my name is</h1>
	</Transition>
	<Transition config={{y: -100, duration: 500, delay: 100}}>
		<h2>Christian Bolus</h2>
	</Transition>
	<Transition config={{y: -100, duration: 500}}>
		<p>
			I'm a software engineer specializing in technologies for the web.
		</p>
	</Transition>
</section>

<style>
	.hero {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
		min-height: 100vh;

	}

  h1 {
		color: var(--accent);
		font-family: var(--font-mono);
		font-size: 1em;
		font-weight: 100;
		margin: 0 0 20px 4px;
	}

	h2 {
    color: #dfdfdf;
		font-size: 4rem;
    font-weight: 700;
		margin-bottom: 20px;
	}

  p {
    font-size: 1.1rem;
    color: rgb(165, 165, 165);
  }
</style>