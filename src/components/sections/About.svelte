<script>
  import NumberedHeader from "../NumberedHeader.svelte";
  import { ScrollReveal } from '../effects'
  let skills = ["JavaScript", "TypeScript", "React", "Next.js", "Node.js", "GraphQL"]
  // import { skills } from '../../data.js'
</script>

  <ScrollReveal>
    <section class="about" id="about">
      <NumberedHeader text="About Me" />
      <div class="container">
        <div>
          <p>
            Hello there!  My name is Christian and I'm passionate about building software products 
            that reduce friction in the lives of users.  I have a tenacious approach to problem 
            solving and am motivated by overcoming challenges and developing efficient solutions.    
          </p>
          <p>
            My background in marketing allows me to view software through a user focused lens. 
            This informs my design decisions from the perspective of the end user and my fellow developers.
          </p>
          <p>
            I'm a fast learner who is able to get along with all personality types and 
            I’m energized by working with high performance teams that are continually pushing their 
            members to improve and reach their goals.
          </p>
          <p>Some of the technologies I've been using recently are:</p>
          <ul class="skill-list">
            {#each skills as skill }
              <li>{skill}</li>
            {/each}
          </ul>
        </div>
        <div class="wrapper">
          <img src="headshot.jpg" alt="Headshot"/>
        </div>
      </div>
    </section>
  </ScrollReveal>

<style lang="scss">
  .about {
    max-width: 900px;
    margin: 0 auto;
    padding: 100px 0;
  }

  .container {
    display: grid;
    grid-template-columns: 3fr 2fr;
    gap: 50px;

    @media (max-width: 768px) {
      grid-template-columns: 1fr
    }
  }

  p {
    color: var(--dark-grey);
    line-height: 27px;
    margin-bottom: 10px;
  }

  .skill-list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 20px;
    font-size: var(--fs-xs);

    li {
      color: var(--dark-grey);
      font-family: var(--font-mono);
      margin-bottom: 15px;

      &::before {
        content: '▷';
        color: var(--accent);
        padding-right: 10px;
      }
    }

    @media (max-width: 480px) {
      font-size: var(--fs-xxs);
    }
  }

  .wrapper {
    max-width: 300px;

    @media (max-width: 768px) {
      justify-self: center;
    }
  }

  img {
    max-width: 100%;
    width: auto;
    height: auto;
  }
</style>