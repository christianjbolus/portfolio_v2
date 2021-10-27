<script>
  import { ScrollReveal } from '../effects/index'
  import { Button } from '../index'
  import { email } from '../../data'
</script>

<ScrollReveal>
  <section class="contact" id="contact">
    <h2>Like What You See?</h2>
    <h3>Get In Touch</h3>
    <p>
      I'm currently open to new opportunities and would love to discuss the 
      prospect of us working together.  Feel free to reach out to me anytime. 
      Thanks for visiting!
    </p>
    <Button className="email-link" text="Say Hello" url={`mailto:${email}`}/>
  </section>
</ScrollReveal>

<style lang="scss">
  .contact {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 100px 0;
    max-width: 600px;
    margin: 0 auto;

    h2 {
      counter-increment: section;
      color: var(--accent);
      font-family: var(--font-mono);
      margin-bottom: 20px;
  
      &::before {
        content: "0" counter(section) ".";
        margin-right: 10px;
      }
    }
    
    h3 {
      color: var(--light-grey);
      font-size: 3rem;
      font-weight: 700;
      margin-bottom: 20px;
    }

    p {
      font-size: 1.1rem;
      color: var(--dark-grey);
      line-height: 27px;
      text-align: center;
    }
  }

</style>