<script>
  import Transition from './effects/Transition.svelte'
  import Button from './Button.svelte'
  import { navLinks } from '../data.js'
</script>

<div class="container">
  <nav class="navbar">
    <ol class="nav-links">
      {#each navLinks as {url, name}, i}
      <Transition config={{y: -100, duration: 500, delay: i * 100}}>
        <li class="link">
          <a href={url}>{name}</a>
        </li>
      </Transition>
      {/each}
      <Transition config={{y: -100, duration: 500, delay: navLinks.length * 100}}>
        <Button text="Resume"/>
      </Transition>
    </ol>
  </nav>
</div>

<style>
  .container {
    height: 100px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  ol {
    font-family: var(--font-mono);
    font-size: 0.8rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    counter-reset: link 0;
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
  }
  
  a::before {
    content: "0" counter(link) ".";
    color: var(--accent);
    margin-right: 5px;
  }
</style>