<script>
  import NumberedHeader from "../NumberedHeader.svelte";
  const skills = [
    "JavaScript", "TypeScript", "Ruby", "HTML/CSS", "React", "Next.js", "Node.js", 
    "Express", "Ruby on Rails", "Mongo DB", "PostgreSQL", "GraphQL", "Git"  
    ]
</script>

<section class="about">
  <div >
    <NumberedHeader text="About Me" />
    <div class="container">
      <div>
        <p>
          Hard working and diligent Software Engineer with a love of learning and an insatiable curiosity.  
          I have a tenacious approach to problem solving and am motivated by overcoming challenges and 
          developing efficient solutions.  I’m passionate about building products that reduce friction 
          in the lives of the user.    
        </p>
        <p>
          My background in marketing allows me to view software through a user 
          focused lens. This informs my design decisions from the perspective of the end user and my 
          fellow developers.
        </p>
        <p>
          As a fast learner who is able to get along with all personality types, 
          I’m energized by working with high performance teams that are continually pushing their 
          members to improve and reach their goals.
        </p>
      </div>
      <img src="headshot.jpg" alt="Headshot"/>
    </div>
  </div>
</section>

<style>
  .about {
    max-width: 900px;
    margin: 0 auto;
  }

  .container {
    display: grid;
    grid-template-columns: 3fr 2fr;
    gap: 50px;
  }

  p {
    font-size: 1.1rem;
    color: var(--dark-grey);
    line-height: 27px;
    margin-bottom: 10px;
  }

  img {
    height: 300px;
    width: 300px;
  }
</style>