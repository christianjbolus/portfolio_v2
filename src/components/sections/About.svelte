<script>
  import NumberedHeader from "../NumberedHeader.svelte";
  import { ScrollReveal } from '../effects'
</script>

  <ScrollReveal>
    <section class="about" id="about">
      <NumberedHeader text="About Me" />
      <div class="container">
        <div>
          <p>
            I'm a founding engineer at Tiga AI, where I've helped build the product since 2023.
            My work covers the Go backend, the Vue frontend, the infrastructure our AI agents run on,
            and integrations with systems like HubSpot and Salesforce. A big part of the job is
            product: I work directly with customers to shape features, and with the founders on
            what we build next.
          </p>
          <p>
            Before that, I was an engineer at Triblio, building data pipelines and customer-facing
            analytics on high-volume intent data, including a GPU-backed transformer classification
            pipeline. I've been shipping language-model features since 2022.
          </p>
          <p>
            I came to engineering from marketing, and that still shapes how I work: I start with the
            person using the software and work back to the code.
          </p>
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