<script>
  import { Project } from '../index'
import NumberedHeader from '../NumberedHeader.svelte';
</script>

<section class="projects" id="projects">
  <NumberedHeader text="My Projects"/>
  <Project />

</section>

<style>
  .projects {
    max-width: 860px;
  }
</style>