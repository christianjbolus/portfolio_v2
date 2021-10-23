<script>
  import { Project } from '../index'
  import { NumberedHeader } from '../index';
  import ScrollReveal from '../effects/ScrollReveal.svelte';
  import { projects } from '../../data'
</script>

<ScrollReveal>
  <section class="projects" id="projects">
    <NumberedHeader text="My Projects"/>
    {#each projects as project}
      <Project project={project}/>
    {/each}
  </section>
</ScrollReveal>

<style>
  .projects {
    max-width: 710px;
    padding: 100px 0;
    margin: 0 auto;
  }
</style>