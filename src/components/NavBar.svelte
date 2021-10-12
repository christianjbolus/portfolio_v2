<script>
import {fly} from 'svelte/transition'

  import Button from './Button.svelte'
  const links = [
    {href: 'about', text: 'About'},
    {href: 'skills', text: 'Skills'},
    {href: 'projects', text: 'Projects'},
    {href: 'contact', text: 'Contact'},
  ]

</script>

<div class="container">
  <nav class="navbar">
    <ol class="nav-links">
      {#each links as link, i}
        <li class="link" transition:fly="{{y: -100, duration: 500, delay: i * 100}}">
          <a href={link.href}>{link.text}</a>
        </li>
      {/each}
      <Button text="Resume"/>
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
    color: #dfdfdf;
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