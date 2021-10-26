<script>
  import { ScrollReveal } from '../effects/index'
</script>

<ScrollReveal>
  <section class="contact" id="contact">
    <h2>Like What You See?</h2>
    <h3>Get In Touch</h3>
  </section>
</ScrollReveal>

<style lang="scss">
  .contact {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h2 {
      counter-increment: section;
      color: var(--accent);
      font-family: var(--font-mono);
  
      &::before {
        content: "0" counter(section) ".";
        margin-right: 10px;
      }
    }
    h3 {
      color: var(--light-grey);
      font-size: 3rem;
    }

  }

</style>