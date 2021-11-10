<script>
  import { Project } from '../index'
  import { NumberedHeader } from '../index';
  import { ScrollReveal } from '../effects';
  import { projects } from '../../data'
</script>

<section class="projects" id="projects">
  <ScrollReveal>
    <NumberedHeader text="My Projects"/>
  </ScrollReveal>
  {#each projects as project}
    <Project project={project}/>
  {/each}
</section>

<style>
  .projects {
    max-width: 710px;
    padding: 100px 0;
    margin: 0 auto;
  }
</style>