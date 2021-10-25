<script>
  import { Phone } from './index'
  import { ScrollReveal } from './effects'
  export let project = {}
</script>

<ScrollReveal>
  <div class="container">
    <Phone image={project.image} order={project.order}/>
    <div class={`info ${project.order}`}>
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

<style lang="scss">
  .container {
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    gap: 10px;
    margin: 0 auto 100px;;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      gap: 0;
      width: 280px;
    }
  }

  .info {
    grid-column: 4 / 11;
    grid-row: 1 / 1;
    align-self: center;
    text-align: right;
    display: flex;
    flex-direction: column;
    justify-content: center;

    &.odd {
      grid-column: 1 / 8;
      grid-row: 1 / 1;
      text-align: left;

      .tech {
        justify-content: flex-start;
      }
    }
    
    @media (max-width: 768px) {
      grid-column: 1;
      text-align: left;
      background-color: rgba(59, 59, 59, 0.95);
      height: 100%;
      border-radius: 36px;
      padding: 0 20px;
    }
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
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);

    @media (max-width: 768px) {
      background-color: transparent;
      box-shadow: none;
      padding: 0;
    }
  }

  .tech {
    display: flex;
    justify-content: flex-end;
    flex-wrap: wrap;
    font-family: var(--font-mono);
    font-size: 0.8rem;
    color: var(--light-grey);
    margin-top: 30px;

    @media (max-width: 768px) {
      justify-content: flex-start;
    }
  }

  .tool {
    margin: 0 0 5px 20px;

    @media (max-width: 768px) {
      margin: 0 20px 5px 0;
    }
  }

</style>