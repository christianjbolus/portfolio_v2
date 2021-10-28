<script>
  import { navLinks, resume } from '../data'
  import { Button } from './index'
  let show = false

  const toggleMenu = () => {
    show = !show
  }
</script>

<div class="menu">
  <div class="menu-control" on:click={toggleMenu}></div>
  <aside class={show ? 'show-menu' : ''}>
    <nav>
      <ol>
        {#each navLinks as { url, name }}
        <li>
          <a href={url}>{name}</a>
        </li>
        {/each}
      </ol>
      <Button className="resume-link" text="Resume" url={resume}/>
    </nav>
  </aside>
</div>

<style lang="scss">
  .menu {
    display: none;

    @media (max-width: 768px) {
      display: block;
    }
  }

  .menu-control {
    height: 30px;
    width: 30px;
    background-color: var(--dark-grey);
    position: relative;
    z-index: 15;
  }

  aside {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    transform: translateX(100%);
    width: 300px;
    background-color: #3b3b3b;
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 50px 10px;
    transition: 200ms;
  }

  nav {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  ol {
    font-family: var(--font-mono);
    width: 100%;
  }

  li {
    counter-increment: link;
    font-size: var(--fs-sm);
    text-align: center;
    margin-bottom: 10px;
  }

  a {
    display: inline-block;
    text-decoration: none;
    padding: 10px;
    cursor: pointer;
    color: var(--light-grey);

    &::before {
      content: "0" counter(link) ".";
      color: var(--accent);
      display: block;
      margin-bottom: 10px;
    }
  }

  .show-menu {
    transform: translateX(0);
  }
</style>