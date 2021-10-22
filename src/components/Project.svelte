<script>
  import { Phone } from './index'
  import ScrollReveal from './effects/ScrollReveal.svelte'
  export let project = {}
</script>

<ScrollReveal>
  <div class="container">
    <Phone image={project.image}/>
    <div class="info">
      <h3 class="title">{project.name}</h3>
      <div class="description">
        <p>{project.description}</p>
      </div>
      <ul class="tech">
        {#each project.tech as tool }
        <li class="tool">{tool}</li>
        {/each}
      </ul>
    </div>
  </div>
</ScrollReveal>

<style>
  .container {
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    gap: 10px;
  }

  .info {
    grid-column: 4 / 11;
    grid-row: 1 / 1;
    align-self: center;
    text-align: right;
  }

  .title {
    color: var(--light-grey);
    font-size: 26px;
    font-weight: 600;
    margin-bottom: 20px;
  }

  .description {
    background-color: #3b3b3b;
    padding: 20px;
    border-radius: 5px;
    color: var(--dark-grey);
    line-height: 27px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2)
  }

  .tech {
    display: flex;
    justify-content: flex-end;
    flex-wrap: wrap;
    font-family: var(--font-mono);
    font-size: 0.8rem;
    color: var(--light-grey);
    margin-top: 30px;
  }

  .tool {
    margin: 0 0 5px 20px;
  }

</style>