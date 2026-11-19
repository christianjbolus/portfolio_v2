<script>
  import { CaseStudy, NumberedHeader } from '../index'
  import { ScrollReveal } from '../effects'
  import { caseStudies } from '../../data'
</script>

<section class="work" id="work">
  <ScrollReveal>
    <NumberedHeader text="Selected Work" />
  </ScrollReveal>
  {#each caseStudies as study}
    <CaseStudy {study} />
  {/each}
</section>

<style>
  .work {
    max-width: 710px;
    padding: 100px 0;
    margin: 0 auto;
  }
</style>
