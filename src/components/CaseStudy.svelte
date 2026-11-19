<script>
  import { ScrollReveal } from './effects'
  export let study = {}

  // Text in [square brackets] is a placeholder still waiting on real content.
  const parts = (text) =>
    text.split(/(\[[^\]]+\])/).filter(Boolean).map((t) => ({
      text: t,
      placeholder: t.startsWith('['),
    }))
</script>

<ScrollReveal>
  <article class="study">
    <p class="company">{study.company}</p>
    <h3 class="title">{study.title}</h3>
    <div class="body">
      {#each study.sections as { label, text }}
        <p>
          <span class="label">{label}.</span>
          {#each parts(text) as part}
            {#if part.placeholder}<mark>{part.text}</mark>{:else}{part.text}{/if}
          {/each}
        </p>
      {/each}
    </div>
    {#if study.tech}
      <ul class="tech">
        {#each study.tech as tool}
          <li>{tool}</li>
        {/each}
      </ul>
    {/if}
  </article>
</ScrollReveal>

<style lang="scss">
  .study {
    background-color: #3b3b3b;
    border-radius: 5px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    padding: 30px;
    margin-bottom: 40px;

    @media (max-width: 480px) {
      padding: 20px;
    }
  }

  .company {
    color: var(--accent);
    font-family: var(--font-mono);
    font-size: var(--fs-xs);
    margin-bottom: 10px;
  }

  .title {
    color: var(--light-grey);
    font-size: 24px;
    font-weight: 600;
    line-height: 1.3;
    margin-bottom: 20px;
  }

  .body p {
    color: var(--dark-grey);
    font-size: var(--fs-md);
    line-height: 26px;
    margin-bottom: 14px;
  }

  .label {
    color: var(--light-grey);
    font-weight: 600;
  }

  mark {
    background: none;
    color: var(--accent);
    font-style: italic;
    border-bottom: 1px dashed var(--accent);
  }

  .tech {
    display: flex;
    flex-wrap: wrap;
    gap: 5px 20px;
    margin-top: 20px;
    font-family: var(--font-mono);
    font-size: var(--fs-xs);
    color: var(--light-grey);
  }
</style>
