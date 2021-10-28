<script>
  import Transition from './effects/Transition.svelte'
  import Button from './Button.svelte'
  import { navLinks, resume } from '../data.js'
</script>

<div class="container">
  <nav class="navbar">
    <ol class="nav-links">
      {#each navLinks as {url, name}, i}
      <Transition type="fly" config={{y: -100, duration: 500, delay: i * 100}}>
        <li class="link">
          <a href={url}>{name}</a>
        </li>
      </Transition>
      {/each}
      <Transition type="fly" config={{y: -100, duration: 500, delay: navLinks.length * 100}}>
        <Button className="resume-link" text="Resume" url={resume}/>
      </Transition>
    </ol>
  </nav>
</div>

<style lang="scss">
  .container {
    height: 100px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  ol {
    font-family: var(--font-mono);
    font-size: var(--fs-xs);
    display: flex;
    justify-content: flex-end;
    align-items: center;
    counter-reset: link;
  }

  li {
    margin: 0 5px;
    counter-increment: link;
  }

  a {
    color: var(--light-grey);
    text-decoration: none;
    padding: 10px;
    cursor: pointer;

    &::before {
      content: "0" counter(link) ".";
      color: var(--accent);
      margin-right: 5px;
    }
  }

</style>